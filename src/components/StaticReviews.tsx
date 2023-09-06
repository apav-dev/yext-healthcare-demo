import StarIcon from "./Icons/StarIcon";

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

export default function StaticReviews() {
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="absolute -top-16 right-0"></div>
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
  );
}
