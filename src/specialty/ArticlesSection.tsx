import Button from "../facility/Button";

function ArticleCard({ title, imgUrl, url }) {
  return (
    <div className="grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex">
      <img className="self-stretch h-[262px] object-cover" src={imgUrl} />
      <div className="self-stretch grow shrink basis-0 py-6 flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-6 flex">
          <a
            href={`/${url}`}
            className="self-stretch grow shrink basis-0 text-zinc-900 text-2xl font-normal leading-[33.99px] hover:underline hover:cursor-pointer"
          >
            {title}
          </a>
          <div className="pb-2 justify-start items-start gap-3 inline-flex">
            <a
              href={`/${url}`}
              className="grow shrink basis-0 text-zinc-900 text-base font-bold leading-normal hover:text-neutral-500 hover:cursor-pointer"
            >
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArticlesSection({ articles }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[88px] h-3 bg-green-700" />
      <h3 className="text-text-500 text-zinc-900">Articles</h3>
      <div className="justify-start items-between gap-12 inline-flex">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard
            title={article.name}
            imgUrl={article.photoGallery[0].image.url}
            key={article.id}
            url={article.slug}
          />
        ))}
      </div>
      <Button color="primary" href="#">
        <span>Explore More</span>
      </Button>
    </div>
  );
}
