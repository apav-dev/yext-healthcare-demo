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
  } = document as HomeType;

  console.log(c_featuredDirectory);

  return (
    <PageLayout
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <div className="pt-32">
        <Section containerClassname="p-0">
          <PhotoHero image={c_primaryHero.image}>
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-center text-[84px] font-extrabold leading-[108px]">
                {c_primaryHero.title}
              </h1>
              <p className="text-white text-xl font-normal">
                {c_primaryHero.description}
              </p>
              <DoctorFilterSearch />
            </div>
          </PhotoHero>
        </Section>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <HorizontalDivider />
              <div className="self-stretch text-zinc-900 text-[52px] font-medium leading-[56px]">
                {c_locationHero.title}
              </div>
              <div className="self-stretch text-neutral-500 text-2xl font-normal leading-[33.99px]">
                {c_locationHero.description}
              </div>
              {c_locationHero.cta && (
                <a
                  className="px-8 py-4 bg-green-700 rounded-[999px] justify-center items-center gap-2 inline-flex"
                  href={c_locationHero.cta.link}
                >
                  <div className="text-center text-white text-base font-bold leading-normal">
                    {c_locationHero.cta?.label}
                  </div>
                </a>
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
                  <a
                    className="px-8 py-4 bg-green-700 rounded-[999px] justify-center items-center gap-2 inline-flex"
                    href={c_servicesHero.cta.link}
                  >
                    <div className="text-center text-white text-base font-bold leading-normal">
                      {c_servicesHero.cta?.label}
                    </div>
                  </a>
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
                <div className="self-stretch justify-start items-center gap-[98px] inline-flex">
                  <div className="grow shrink basis-0 h-[50px] pb-4 border-b border-stone-300 justify-start items-end gap-4 flex">
                    <div className="grow shrink basis-0 text-zinc-900 text-2xl font-medium underline leading-[33.99px]">
                      {item.name}
                    </div>
                    <div className="text-center text-green-700 text-base font-light">
                      +
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {c_featuredDirectory.cta && (
              <a
                className="px-8 py-4 bg-green-700 rounded-[999px] justify-center items-center gap-2 inline-flex"
                href={c_featuredDirectory.cta.link}
              >
                <div className="text-center text-white text-base font-bold leading-normal">
                  {c_featuredDirectory.cta.label}
                </div>
              </a>
            )}
          </div>
        </Section>
        <Section>
          <div className="py-8 bg-zinc-100 flex-col justify-center items-center gap-12 inline-flex">
            <div className="self-stretch h-14 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-center text-zinc-900 text-[52px] font-medium leading-[56px]">
                Featured Stories & Topics
              </div>
            </div>
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
            <div className="w-[1110px] justify-start items-start gap-12 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                <img
                  className="self-stretch h-[262px]"
                  src="https://via.placeholder.com/338x262"
                />
                <div className="self-stretch grow shrink basis-0 p-6 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch grow shrink basis-0 text-zinc-900 text-2xl font-normal leading-[33.99px]">
                      New Research: Benefits of Exercise for Health
                    </div>
                    <div className="w-[99px] pb-2 justify-start items-start gap-3 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-900 text-base font-bold leading-normal">
                        See More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                <img
                  className="self-stretch h-[262px]"
                  src="https://via.placeholder.com/338x262"
                />
                <div className="self-stretch h-[202px] p-6 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch grow shrink basis-0 text-zinc-900 text-2xl font-normal leading-[33.99px]">
                      Uncovering the Latest Advances in Medical Care
                    </div>
                    <div className="w-[99px] pb-2 justify-start items-start gap-3 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-900 text-base font-bold leading-normal">
                        See More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                <img
                  className="self-stretch h-[262px]"
                  src="https://via.placeholder.com/338x262"
                />
                <div className="self-stretch h-[202px] p-6 flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch grow shrink basis-0 text-zinc-900 text-2xl font-normal leading-[33.99px]">
                      How to Improve Your Wellbeing with Diet and Exercise
                    </div>
                    <div className="w-[99px] pb-2 justify-start items-start gap-3 inline-flex">
                      <div className="grow shrink basis-0 text-zinc-900 text-base font-bold leading-normal">
                        See More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 py-4 bg-green-700 rounded-[999px] justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-base font-bold leading-normal">
                Explore More
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Home;
