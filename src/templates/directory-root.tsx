import PageLayout from "../components/PageLayout";
import "../index.css";
import {
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateRenderProps,
  TemplateConfig,
  TemplateProps,
} from "@yext/pages";
import { Home as HomeType } from "../types/autogen";
import Section from "../components/atoms/Section";
import HorizontalDivider from "../components/HoriztontalDivider";
import { Image } from "@yext/sites-components";
import DirectoryRootGrid from "../components/directory/DirectoryRootGrid";
import DoctorFilterSearch from "../components/search/DoctorFilterSearch";
import DirectoryHero from "../components/DirectoryHero";

export const config: TemplateConfig = {
  stream: {
    $id: "directory-root",
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.c_addressRegionDisplayName",
      "dm_directoryChildren.dm_childEntityIds",
      "c_primaryHero",
    ],
    filter: { entityIds: ["us-directory"] },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "All Locations",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const DirectoryRoot = ({
  document,
  relativePrefixToRoot,
}: TemplateRenderProps) => {
  const { id, name, slug, c_primaryHero } = document;

  return (
    <PageLayout
      headerLogoURL={document._site.c_headerLogo?.url}
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <DirectoryHero image={c_primaryHero.image}>
        <div className="flex flex-col gap-2 m-14 p-14 bg-white items-center max-w-4xl">
          <h1 className="text-center text-[69px] font-extrabold leading-[108px]">
            {c_primaryHero.title}
          </h1>
          <div className="w-fit">
            <div className="w-[288px] h-3 bg-primary-green"></div>
          </div>
          <p className="text-xl font-normal mt-4">{c_primaryHero.description}</p>
        </div>
      </DirectoryHero>
      <div className="centered-container">
        <div className="section space-y-14 px-10 mt-10 mb-72">
          <DirectoryRootGrid
            name={"States"}
            directoryChildren={document.dm_directoryChildren}
            relativePrefixToRoot={relativePrefixToRoot}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default DirectoryRoot;
