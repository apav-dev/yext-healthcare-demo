import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/PageLayout";
import SpecialistBanner from "../components/condition/SpecialistBanner";
import InfoGridBanner from "../components/condition/InfoGridBanner";
import Breadcrumbs from "../components/Breadcrumbs";
import HeroImageFull from "../components/blogs/HeroImageFull";
import RelatedBlogs from "../components/blogs/RelatedBlogs";
import BlogContent from "../components/blogs/BlogContent";

export const config: TemplateConfig = {
  stream: {
    $id: "blogs",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "slug",
      "c_author.name",
      "taxonomy_relatedSpecialties.name",
      "taxonomy_relatedSpecialties.id",
      "c_relatedBlogPosts.name",
      "c_relatedBlogPosts.c_blogPostContentSummary",
      "c_relatedBlogPosts.photoGallery",
      "c_relatedBlogPosts.slug",
      "c_datePosted",
      "photoGallery",
      "c_blogPostContentSummary",
      "c_blogPostContentOriginal",
    ],
    filter: { entityTypes: ["ce_blogPost"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const blog = document;
  return {
    title: blog.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Blog: Template<TemplateRenderProps> = ({ document }: TemplateProps) => {
  return (
    <PageLayout
      headerLogoURL={document._site.c_headerLogo?.url}
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <div className="mt-32">
        <Breadcrumbs
          breadcrumbs={[
            { label: "Home", link: "/" },
            { label: "Blogs", link: "#" },
            { label: document.name },
          ]}
        />
      </div>
      <HeroImageFull
        name={document.name}
        image={document.photoGallery[0].image.url}
        description={document.c_blogPostContentSummary}
        author={document.c_author[0].name}
        date={document.c_datePosted}
      />
      <BlogContent content={document.c_blogPostContentOriginal.markdown} />
      <SpecialistBanner
        name={document.taxonomy_relatedSpecialties?.[0]?.name}
      />
      <RelatedBlogs
        name1={document.c_relatedBlogPosts[0]?.name}
        description1={document.c_relatedBlogPosts[0]?.c_blogPostContentSummary}
        image1={document.c_relatedBlogPosts[0]?.photoGallery[0]?.image.url}
        link1={`/${document.c_relatedBlogPosts[0]?.slug}`}
        name2={document.c_relatedBlogPosts[1]?.name}
        description2={document.c_relatedBlogPosts[1]?.c_blogPostContentSummary}
        image2={document.c_relatedBlogPosts[1]?.photoGallery[0]?.image.url}
        link2={`/${document.c_relatedBlogPosts[1]?.slug}`}
        name3={document.c_relatedBlogPosts[2]?.name}
        description3={document.c_relatedBlogPosts[2]?.c_blogPostContentSummary}
        image3={document.c_relatedBlogPosts[2]?.photoGallery[0]?.image.url}
        link3={`/${document.c_relatedBlogPosts[2]?.slug}`}
      />
    </PageLayout>
  );
};

export default Blog;
