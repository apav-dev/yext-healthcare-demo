export default function HeroImageFull({
  name,
  image,
  description,
  author,
  date,
}) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full h-full flex justify-between">
      <img src={image} alt="" className="w-[45%] object-cover" />
      <div className="pl-20 flex flex-col gap-6 justify-center py-20 bg-stone-50 ml-4 sm:py-40">
        <h2 className="text-text-500 tracking-tight sm:text-6xl pr-8">
          {name}
        </h2>
        <div className="h-3 bg-primary-green" />
        <p className="text-base text-gray-600 italic pr-8">{description}</p>
        <p className="text-text-100 text-gray-600 italic">
          <ul className="list-none">
            <li>Written by: {author}</li>
            <li>
              Published:
              <time dateTime={formattedDate} className="text-gray-500 ml-2">
                {formattedDate}
              </time>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
