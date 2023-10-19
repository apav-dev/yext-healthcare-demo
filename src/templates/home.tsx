import PageLayout from "../components/PageLayout";
import "../index.css";
import {
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateRenderProps,
  TemplateConfig,
} from "@yext/pages";
import { Home as HomeType } from "../types/autogen";
import Section from "../components/atoms/Section";
import PhotoHero from "../components/PhotoHero";
import DoctorFilterSearch from "../components/search/DoctorFilterSearch";
import HorizontalDivider from "../components/HoriztontalDivider";
import { Image } from "@yext/sites-components";
import Button from "../components/facility/Button";
import FeaturedBlogs from "../components/FeaturedBlogs";
``;
export const config: TemplateConfig = {
  stream: {
    $id: "home",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "slug",
      "c_primaryHero",
      "c_locationHero",
      "c_servicesHero",
      // "c_featuredDirectory",
      "c_featuredDirectory.title",
      "c_featuredDirectory.directory.name",
      "c_featuredDirectory.directory.slug",
      "c_featuredDirectory.cta",
      "c_featuredBlogs.blogs.id",
      "c_featuredBlogs.blogs.name",
      "c_featuredBlogs.blogs.c_author.name",
      "c_featuredBlogs.blogs.c_datePosted",
      "c_featuredBlogs.blogs.photoGallery",
      "c_featuredBlogs.blogs.c_blogPostContentSummary",
      "c_featuredBlogs.blogs.slug",
    ],
    filter: { entityIds: ["home"] },
  },
};

export const getPath: GetPath<TemplateRenderProps> = () => {
  return "index.html";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Home = ({ document }: TemplateRenderProps) => {
  const {
    id,
    name,
    slug,
    c_primaryHero,
    c_locationHero,
    c_servicesHero,
    c_featuredDirectory,
    c_featuredBlogs,
  } = document as HomeType;

  console.log(c_featuredBlogs);

  return (
    <PageLayout
      headerLogoURL={document._site.c_headerLogo?.url}
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <div className="pt-32">
        {/* <Section containerClassname="p-0"> */}
        <PhotoHero image={c_primaryHero.image}>
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-center text-[84px] font-extrabold leading-[108px]">
              {c_primaryHero.title}
            </h1>
            <p className="text-white text-xl font-normal mb-6">
              {c_primaryHero.description}
            </p>
            <DoctorFilterSearch navigateOnSearch />
          </div>
        </PhotoHero>
        {/* </Section> */}
        <Section>
          <div className="grid grid-cols-2 w-full gap-6">
            <img
              src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2283&q=80"
              className="object-cover w-100% lg:aspect-video my-auto"
            />
            <div className="flex gap-6 justify-center flex-col">
              <HorizontalDivider />
              <div className="self-stretch text-zinc-900 text-[52px] font-medium leading-[56px]">
                Get the Right Care for You
              </div>
              <p className="self-stretch text-neutral-500 text-2xl font-normal leading-[33.99px]">
                Not sure where to start? We'll help you find the perfect
                healthcare provider.
              </p>
              <Button color="primary" href="/guided-doctor-finder">
                Get Started
              </Button>
            </div>
          </div>
        </Section>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex-col justify-center items-start gap-6 inline-flex">
              <HorizontalDivider />
              <div className="self-stretch text-zinc-900 text-[52px] font-medium leading-[56px]">
                {c_locationHero.title}
              </div>
              <div className="self-stretch text-neutral-500 text-2xl font-normal leading-[33.99px]">
                {c_locationHero.description}
              </div>
              {c_locationHero.cta && (
                <Button color="primary" href={c_locationHero.cta.link}>
                  {c_locationHero.cta?.label}
                </Button>
              )}
            </div>
            <div className="p-10 flex-col justify-center items-center gap-2.5 inline-flex">
              {c_locationHero.image ? (
                <Image className="self-stretch" image={c_locationHero.image} />
              ) : (
                <img
                  className="self-stretch "
                  src="https://via.placeholder.com/536x321"
                />
              )}
            </div>
          </div>
        </Section>
        <Section>
          <div className="justify-start items-center gap-12 inline-flex">
            <div className="w-[616px] h-[861px] grow shrink basis-0 p-20 bg-green-700 flex-col justify-center items-center gap-2.5 inline-flex">
              {c_servicesHero.image ? (
                <Image className="self-stretch" image={c_servicesHero.image} />
              ) : (
                <img
                  className="self-stretch"
                  src="https://via.placeholder.com/536x321"
                />
              )}
            </div>
            <div className="grow shrink basis-0 py-8 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <HorizontalDivider />
                <div className="self-stretch text-zinc-900 text-[52px] font-medium leading-[56px]">
                  {c_servicesHero.title}
                </div>
                <div className="self-stretch text-neutral-500 text-2xl font-normal leading-[33.99px]">
                  {c_servicesHero.description}
                </div>
                {c_servicesHero.cta && (
                  <Button color="primary" href={c_servicesHero.cta.link}>
                    {c_servicesHero.cta?.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="px-20 bg-zinc-100 justify-start items-start inline-flex">
            <div className="grow shrink basis-0 self-stretch px-8 py-6 flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-zinc-900 text-[80px] font-normal leading-[84px]">
                  800+{" "}
                </div>
                <div className="self-stretch text-zinc-900 text-2xl font-normal leading-[33.99px]">
                  Locations Nationwide
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch px-8 py-6 flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-zinc-900 text-[80px] font-normal leading-[84px]">
                  320+{" "}
                </div>
                <div className="self-stretch text-zinc-900 text-2xl font-normal leading-[33.99px]">
                  Services
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch px-8 py-6 bg-black bg-opacity-30 flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="self-stretch h-40 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-white text-4xl font-medium leading-10">
                  National
                  <br />
                  Recognition for
                  <br />
                  Excellence in
                  <br />
                  Healthcare
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="py-8 flex-col justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <HorizontalDivider />
              <div className="self-stretch text-zinc-900 text-[52px] font-medium leading-[56px]">
                {c_featuredDirectory.title}
              </div>
            </div>
            <div className="grid grid-cols-3 w-full gap-x-[98px] gap-y-4">
              {c_featuredDirectory.directory.map((item) => (
                <div className="self-stretch justify-start items-center gap-[98px] inline-flex min-h-fit">
                  <div className="grow shrink basis-0 pb-4 border-b border-stone-300 justify-start items-end gap-4 flex min-h-fit">
                    <a
                      href={`/${item.slug}`}
                      className="grow shrink basis-0 text-zinc-900 text-2xl font-medium underline leading-[33.99px]"
                    >
                      {item.name}
                    </a>
                    <div className="text-center text-green-700 text-base font-light">
                      +
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {c_featuredDirectory.cta && (
              <Button color="primary" href={c_featuredDirectory.cta.link}>
                {c_featuredDirectory.cta?.label}
              </Button>
            )}
          </div>
        </Section>
        {/* <Section>
          <FeaturedBlogs blogs={c_featuredBlogs.blogs} />
        </Section> */}
      </div>
    </PageLayout>
  );
};

export default Home;
