import { Source } from "@yext/search-headless-react";
import BlogCard from "./search/BlogCard";
import { useEffect } from "react";

export interface FeaturedBlogsProps {
  blogs: any;
}

export default function FeaturedBlogs({ blogs }: FeaturedBlogsProps) {
  return (
    <div className="py-8 bg-zinc-100 flex-col justify-center items-center gap-12 inline-flex">
      <div className="self-stretch h-14 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch text-center text-zinc-900 text-[52px] font-medium leading-[56px]">
          Featured Stories & Topics
        </div>
      </div>
      {/* TODO: pull from entity */}
      <div className="justify-start items-start gap-3 inline-flex">
        <div className="px-4 py-2 rounded-[999px] border border-neutral-500 justify-center items-center gap-2 flex">
          <div className="text-center text-zinc-900 text-base font-bold leading-normal">
            Arrhythmias
          </div>
        </div>
        <div className="px-4 py-2 rounded-[999px] border border-neutral-500 justify-center items-center gap-2 flex">
          <div className="text-center text-zinc-900 text-base font-bold leading-normal">
            Autism
          </div>
        </div>
        <div className="px-4 py-2 rounded-[999px] border border-neutral-500 justify-center items-center gap-2 flex">
          <div className="text-center text-zinc-900 text-base font-bold leading-normal">
            Breast Cancer
          </div>
        </div>
        <div className="px-4 py-2 rounded-[999px] border border-neutral-500 justify-center items-center gap-2 flex">
          <div className="text-center text-zinc-900 text-base font-bold leading-normal">
            Gynecology
          </div>
        </div>
        <div className="px-4 py-2 rounded-[999px] border border-neutral-500 justify-center items-center gap-2 flex">
          <div className="text-center text-zinc-900 text-base font-bold leading-normal">
            Primary Care
          </div>
        </div>
        <div className="px-4 py-2 rounded-[999px] border border-neutral-500 justify-center items-center gap-2 flex">
          <div className="text-center text-zinc-900 text-base font-bold leading-normal">
            Pediatric Cancer
          </div>
        </div>
      </div>
      <div className="justify-start items-start gap-12 inline-flex px-8">
        {blogs.map((blog) => (
          <BlogCard
            result={{ rawData: blog, source: Source.KnowledgeManager }}
          />
        ))}
      </div>
      <div className="px-8 py-4 bg-green-700 rounded-[999px] justify-center items-center gap-2 inline-flex">
        <div className="text-center text-white text-base font-bold leading-normal">
          Explore More
        </div>
      </div>
    </div>
  );
}
