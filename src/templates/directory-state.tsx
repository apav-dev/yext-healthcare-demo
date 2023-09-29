import * as React from "react";
import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  TransformProps,
} from "@yext/pages";
import { isProduction } from "@yext/pages/util";
import "../index.css";
import PageLayout from "../PageLayout";
import DirectoryBreadcrumbs from "../directory/DirectoryBreadcrumbs";
import DirectoryStateGrid from "../directory/DirectoryStateGrid";
import Section from "../atoms/Section";
import PhotoHero from "../PhotoHero";

export const config: TemplateConfig = {
  stream: {
    $id: "directory-state",
    filter: {
      entityTypes: ["ce_state"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "c_addressRegionDisplayName",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_childEntityIds",
      "dm_childEntityIds",
      "c_primaryHero",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug.toString()}`;
};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`alias/${document.locale}/${document.id.toString()}`];
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const transformProps: TransformProps<any> = async (data) => {
  const { dm_directoryParents, name } = data.document;

  (dm_directoryParents || []).push({ name: name, slug: "" });

  return {
    ...data,
    document: {
      ...data.document,
      dm_directoryParents: dm_directoryParents,
    },
  };
};

const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const {
    name,
    description,
    siteDomain,
    c_addressRegionDisplayName,
    dm_directoryParents,
    dm_directoryChildren,
    c_primaryHero,
  } = document;

  return (
    <>
      <PageLayout
        featuredLocations={document._site.c_featuredLocations}
        featuredSpecialties={document._site.c_featuredSpecialties}
      >
        {/* <div className="centered-container">
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
              <DirectoryBreadcrumbs
                breadcrumbs={dm_directoryParents}
                baseUrl={relativePrefixToRoot}
              />
              <DirectoryStateGrid
                name={`Veridian in ${c_primaryHero.title}`}
                description={description}
                directoryChildren={dm_directoryChildren}
                relativePrefixToRoot={relativePrefixToRoot}
              />
            </div>
          </div>
        </div> */}
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
        <div className="centered-container pt-4 mb-32">
          <div className="px-4">
            <DirectoryBreadcrumbs
              breadcrumbs={dm_directoryParents}
              baseUrl={relativePrefixToRoot}
            />
          </div>

          <DirectoryStateGrid
            name={`Veridian facilities and providers in ${c_primaryHero.title}`}
            description={description}
            directoryChildren={dm_directoryChildren}
            relativePrefixToRoot={relativePrefixToRoot}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default State;
