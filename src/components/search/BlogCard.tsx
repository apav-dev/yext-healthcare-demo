import { CardProps } from "@yext/search-ui-react";
import Ce_blogPost from "../../types/search/blog_posts";
import { Image } from "@yext/sites-components";
import { useEffect } from "react";

export default function BlogCard({ result }: CardProps<Ce_blogPost>) {
  const {
    id,
    name,
    slug,
    c_datePosted,
    photoGallery,
    c_blogPostContentSummary,
    c_author,
  } = result.rawData;

  const image = photoGallery?.[0];
  const author = c_author?.[0];

  const formattedDate = new Date(c_datePosted).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article key={id} className="flex flex-col items-start justify-between">
      <a href={slug}>
        <div className="relative w-full">
          {image && (
            <Image
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              image={image}
              layout="fixed"
              width={324}
              height={216}
            />
          )}
          {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" /> */}
        </div>
        <div className="max-w-xl">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time dateTime={formattedDate} className="text-gray-500">
              {formattedDate}
            </time>
            {/* vertical divider */}
            <span aria-hidden className="h-1 w-1 bg-gray-500 " />
            <p className="text-gray-600"> {author?.name}</p>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href={slug}>
                <span className="absolute inset-0" />
                {name}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {c_blogPostContentSummary}
            </p>
          </div>
        </div>
      </a>
    </article>
  );
}
