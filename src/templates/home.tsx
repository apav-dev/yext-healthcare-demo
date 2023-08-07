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
  const { id, name, slug, c_primaryHero, c_locationHero, c_servicesHero } =
    document as HomeType;

  return (
    <PageLayout
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
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
          <div className="w-[616px] h-[388px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[88px] h-3 bg-green-700"></div>
            <div className="self-stretch text-zinc-900 text-[52px] font-medium leading-[56px]">
              800+ Locations Nationwide
            </div>
            <div className="self-stretch text-neutral-500 text-2xl font-normal leading-[33.99px]">
              We understand that your healthcare needs don't always fit into a
              9-5 schedule. That's why we've made it easier than ever to access
              quality care with over 800 locations nationwide.{" "}
            </div>
            <div className="px-8 py-4 bg-green-700 rounded-[999px] justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-base font-bold leading-normal">
                Find a Location
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-[616px] h-[388px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[88px] h-3 bg-green-700"></div>
            <div className="self-stretch text-zinc-900 text-[52px] font-medium leading-[56px]">
              800+ Locations Nationwide
            </div>
            <div className="self-stretch text-neutral-500 text-2xl font-normal leading-[33.99px]">
              We understand that your healthcare needs don't always fit into a
              9-5 schedule. That's why we've made it easier than ever to access
              quality care with over 800 locations nationwide.{" "}
            </div>
            <div className="px-8 py-4 bg-green-700 rounded-[999px] justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-base font-bold leading-normal">
                Find a Location
              </div>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Home;
