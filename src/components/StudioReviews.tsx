import { twMerge } from "tailwind-merge";
import BodyText from "./atoms/BodyText";
import HeadingText from "./atoms/HeadingText";
import Icon from "./atoms/Icon";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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

const reviews = [
  {
    $key: {
      primaryKey: "1",
    },
    authorName: "Jane Smith",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.",
    rating: 5,
    reviewDate: "2023-08-01",
  },
  {
    $key: {
      primaryKey: "2",
    },
    authorName: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.",
    rating: 5,
    reviewDate: "2023-05-06",
  },
  {
    $key: {
      primaryKey: "3",
    },
    authorName: "George Costanza",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.",
    rating: 4.5,
    reviewDate: "2023-03-01",
  },
  {
    $key: {
      primaryKey: "4",
    },
    authorName: "Elaine Benes",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.",
    rating: 4,
    reviewDate: "2022-12-15",
  },
  {
    $key: {
      primaryKey: "5",
    },
    authorName: "Kosmo Kramer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc aliquam aliquet. Sed vitae nisi eget nunc aliquam aliquet.",
    rating: 5,
    reviewDate: "2022-09-07",
  },
];

export default function StudioReviews() {
  return (
    <>
      {reviews.map((review, reviewIdx) => (
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
                  hexColor="#F0BB32"
                  classname="h-5 w-5"
                />
              ))}
            </div>
            <BodyText text={review.content} />
          </div>
        </div>
      ))}
    </>
  );
}
