import { twMerge } from "tailwind-merge";
import BodyText from "./atoms/BodyText";
import HeadingText from "./atoms/HeadingText";
import Icon from "./atoms/Icon";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Selector from "./atoms/Selector";
import { formatDate } from "../utils";
import StarIcon from "./Icons/StarIcon";

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

const tempReviews = [
  {
    rating: 5,
    reviewDate: "June 8, 2023",
    content:
      "Dr. Johnson is an amazing doctor! She's so friendly and knowledgeable, and she really takes the time to listen to my concerns. She's also great at explaining things in a way that's easy to understand. Highly recommend!",
    authorName: "John Doe",
  },
  {
    rating: 5,
    reviewDate: "June 8, 2023",
    content:
      "Dr. Johnson is an amazing doctor! She's so friendly and knowledgeable, and she really takes the time to listen to my concerns. She's also great at explaining things in a way that's easy to understand. Highly recommend!",
    authorName: "John Doe",
  },
  {
    rating: 5,
    reviewDate: "June 8, 2023",
    content:
      "Dr. Johnson is an amazing doctor! She's so friendly and knowledgeable, and she really takes the time to listen to my concerns. She's also great at explaining things in a way that's easy to understand. Highly recommend!",
    authorName: "John Doe",
  },
];

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

const reviewsUrl = `https://cdn.yextapis.com/v2/accounts/me/content/doctorReviews?api_key=e72c4545ff1e278714a09ce903eb5256&v=20230724`;

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
    <div className="flex flex-col gap-4 relative">
      <div className="absolute -top-16 right-0">
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
      </div>
      {tempReviews.map((review) => (
        <div className="p-8 bg-white rounded-2xl border border-stone-300 justify-start items-start gap-8 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="justify-start items-start inline-flex">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon key={rating} />
              ))}
            </div>
            <div className="text-black text-2xl font-bold leading-[33.99px]">
              {review.authorName}
            </div>
            <div className="self-stretch text-neutral-500 text-base font-medium leading-normal">
              {review.content}
            </div>
            <div className="self-stretch text-neutral-500 text-base font-medium leading-normal">
              {review.reviewDate}
            </div>
          </div>
        </div>
      ))}
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
