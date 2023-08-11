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
import PhotoHero from "../components/PhotoHero";
import HorizontalDivider from "../components/HoriztontalDivider";
import { Image } from "@yext/sites-components";
import DirectoryRootGrid from "../components/directory/DirectoryRootGrid";
import DoctorFilterSearch from "../components/search/DoctorFilterSearch";

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
      featuredLocations={document._site.c_featuredLocations}
      featuredSpecialties={document._site.c_featuredSpecialties}
    >
      <Section containerClassname="p-0">
        <PhotoHero image={c_primaryHero.image}>
          <div className="flex flex-col gap-4 pt-14">
            <h1 className="text-white text-center text-[84px] font-extrabold leading-[108px]">
              {c_primaryHero.title}
            </h1>
            <p className="text-white text-xl font-normal">
              {c_primaryHero.description}
            </p>
          </div>
        </PhotoHero>
      </Section>
      <div className="centered-container">
        <div className="section space-y-14 px-10 mt-10 mb-32">
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
