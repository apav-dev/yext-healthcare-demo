import { twMerge } from "tailwind-merge";
import BodyText from "./atoms/BodyText";
import HeadingText from "./atoms/HeadingText";
import Icon from "./atoms/Icon";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Selector from "./atoms/Selector";
import { formatDate } from "../utils";

type ReviewsResponse = {
  count: number;
  nextPageToken?: string;
  docs?: {
    $key: {
      locale: string;
      primaryKey: string;
    };
    authorName: string;
    content: string;
    rating: number;
    reviewDate: string;
    entity: {
      id: string;
    };
  }[];
  errors?: {
    code: number;
    type: string;
    message: string;
    name: string;
  }[];
};

export type ReviewSort =
  | "reviewDateDesc"
  | "reviewDateAsc"
  | "ratingDesc"
  | "ratingAsc";

const reviewSortOptions: Record<ReviewSort, { key: string; value: string }> = {
  reviewDateDesc: {
    key: "$sortBy__desc",
    value: "reviewDate",
  },
  reviewDateAsc: {
    key: "$sortBy__asc",
    value: "reviewDate",
  },
  ratingDesc: {
    key: "$sortBy__desc",
    value: "rating",
  },
  ratingAsc: {
    key: "$sortBy__asc",
    value: "rating",
  },
};

const REVIEWS_LIMIT = 3;

const reviewsUrl = `${YEXT_PUBLIC_FETCH_REVIEWS_URL}?api_key=${YEXT_PUBLIC_CONTENT_API_KEY}&v=20230724`;

const fetchReviews = async (
  id: string,
  sort?: ReviewSort,
  pageToken?: string
): Promise<ReviewsResponse> => {
  // debugger;
  let requestUrl = reviewsUrl + "&entity.id=" + id;
  if (sort) {
    requestUrl += `&${reviewSortOptions[sort].key}=${reviewSortOptions[sort].value}`;
  }
  requestUrl += "&limit=" + REVIEWS_LIMIT;

  if (pageToken) {
    requestUrl += "&pageToken=" + pageToken;
  }

  const response = await fetch(requestUrl);
  const data = await response.json();
  return data.response;
};

export interface ReviewsProps {
  entityId: string;
  reviewLimit?: number;
}

export default function Reviews({ entityId }: ReviewsProps) {
  const [sort, setSort] = useState<ReviewSort>("reviewDateDesc");
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(
    undefined
  );
  const [prevPageToken, setPrevPageToken] = useState<string | undefined>(
    undefined
  );
  const [pageToken, setPageToken] = useState<string | undefined>(undefined);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["reviews", entityId, sort, pageToken],
    queryFn: () => fetchReviews(entityId, sort, pageToken),
    onSuccess: (data) => {
      if (nextPageToken) {
        setPrevPageToken(nextPageToken);
      }
      setNextPageToken(data.nextPageToken);
    },
    retry: 0,
  });

  const handleSortSelect = (id: string) => {
    setPrevPageToken(undefined);
    setNextPageToken(undefined);
    setPageToken(undefined);
    setSort(id as ReviewSort);
  };

  const handleNextPageClick = () => {
    setPageToken(nextPageToken);
  };

  const handlePrevPageClick = () => {
    debugger;
    setPageToken(prevPageToken);
  };

  return !isLoading ? (
    <div className="-my-10">
      <Selector
        placeholder="Sort by..."
        onSelect={handleSortSelect}
        items={[
          {
            label: "Most Recent",
            id: "reviewDateDesc",
          },
          {
            label: "Oldest",
            id: "reviewDateAsc",
          },
          {
            label: "Highest Rated",
            id: "ratingDesc",
          },
          {
            label: "Lowest Rated",
            id: "ratingAsc",
          },
        ]}
      />
      {data?.docs?.map((review, reviewIdx) => (
        <div
          key={review.$key.primaryKey}
          className="flex space-x-4 text-sm text-gray-500"
        >
          <div
            className={twMerge(
              reviewIdx === 0 ? "" : "border-t border-gray-200",
              "flex-1 py-10"
            )}
          >
            <HeadingText text={review.authorName} level="Heading 4" />
            <BodyText text={formatDate(review.reviewDate)} />
            <div className="my-4 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <Icon
                  key={rating}
                  color={
                    review.rating > rating
                      ? "text-yellow"
                      : "text-disabled-gray"
                  }
                  classname="h-5 w-5"
                />
              ))}
            </div>
            <BodyText text={review.content} />
          </div>
        </div>
      ))}
      <div className="flex justify-center gap-x-6">
        <button disabled={!prevPageToken} onClick={handlePrevPageClick}>
          <Icon
            name="chevron-left"
            color={prevPageToken ? "text-green" : "text-disabled-gray"}
            classname={"h-7 w-7"}
          />
        </button>
        <button disabled={!nextPageToken} onClick={handleNextPageClick}>
          <Icon
            name="chevron-right"
            color={nextPageToken ? "text-green" : "text-disabled-gray"}
            classname="h-7 w-7"
          />
        </button>
      </div>
    </div>
  ) : (
    <div className="-my-10">
      <div className="w-48 h-8 bg-gray-300 rounded animate-pulse mb-4" />
      {Array.from(Array(REVIEWS_LIMIT).keys()).map((reviewIdx) => (
        <div key={reviewIdx} className="flex space-x-4 text-sm text-gray-500">
          <div className="flex-1 py-10 animate-pulse">
            <div className="w-2/3 h-4 bg-gray-300 rounded mb-4" />
            <div className="w-1/3 h-4 bg-gray-300 rounded mb-2" />
            <div className="w-1/4 h-4 bg-gray-300 rounded mb-2" />
            <div className="w-2/3 h-4 bg-gray-300 rounded mb-2" />
            <div className="w-3/4 h-4 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
