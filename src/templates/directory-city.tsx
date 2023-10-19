/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Pages system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

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
import PageLayout from "../components/PageLayout";
// import EditTool from "../components/EditTool";
import Breadcrumbs from "../components/Breadcrumbs";
import DirectoryBreadcrumbs from "../components/directory/DirectoryBreadcrumbs";
import DirectoryCityGrid from "../components/directory/DirectoryCityGrid";
import Section from "../components/atoms/Section";
import PhotoHero from "../components/PhotoHero";
import Button from "../components/facility/Button";

export const config: TemplateConfig = {
  stream: {
    $id: "directory-city",
    filter: {
      entityTypes: ["ce_city"],
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
      "dm_directoryParents.c_addressRegionDisplayName",
      "dm_directoryChildren.name",
      "dm_directoryChildren.address",
      "dm_directoryChildren.mainPhone",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.id",
      "dm_directoryChildren.headshot",
      "dm_directoryChildren.taxonomy_relatedSpecialties.name",
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

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const {
    name,
    description,
    siteDomain,
    dm_directoryParents,
    dm_directoryChildren,
    c_primaryHero,
  } = document;

  return (
    <>
      <PageLayout
        headerLogoURL={document._site.c_headerLogo?.url}
        featuredLocations={document._site.c_featuredLocations}
        featuredSpecialties={document._site.c_featuredSpecialties}
      >
        <Section containerClassname="p-0">
          <PhotoHero image={c_primaryHero.image}>
            <div className="flex flex-col gap-4 pt-14">
              <h1 className="text-white text-center text-[64px] font-extrabold leading-[108px]">
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
          <div className="flex flex-col my-4">
            <div className="self-center mb-4 text-zinc-900 text-2xl font-bold">
              Find out more about our expertise in {c_primaryHero.title}
            </div>
            <div className="flex flex-row gap-4 place-content-center">
              <Button color="primary" href={`/${document.slug}/cardiology`}>
                <span>Cardiology</span>
              </Button>
              <Button color="primary" href={`/${document.slug}/dermatology`}>
                <span>Dermatology</span>
              </Button>
              <Button color="primary" href={`/${document.slug}/oncology`}>
                <span>Oncology</span>
              </Button>
            </div>
          </div>
          <DirectoryCityGrid
            description={description}
            cityName={c_primaryHero.title}
            providerHeader={`Providers in ${document.c_cityName}`}
            directoryChildren={dm_directoryChildren}
            locations={dm_directoryChildren}
            providers={dm_directoryChildren}
            relativePrefixToRoot={relativePrefixToRoot}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default City;
