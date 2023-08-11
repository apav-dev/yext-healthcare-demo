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
  // import Facility from "../types/autogen";
  import PageLayout from "../components/PageLayout";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import IntentHero from "../components/intent/IntentHero";
import InfoGridBanner from "../components/condition/InfoGridBanner";
import Breadcrumbs from "../components/Breadcrumbs";
import IntentContent from "../components/intent/IntentContent";
  
  export const config: TemplateConfig = {
    stream: {
      $id: "intents",
      localization: { locales: ["en"], primary: false },
      fields: [
        "id",
        "name",
        "slug",
        "primaryPhoto",
        "c_cityName",
        "c_intentPageDescription",
        "taxonomy_relatedSpecialties.name",
        "c_directoryIntentPageLink.name",
        "c_directoryIntentPageLink.slug",
        "c_directoryIntentPageLink.dm_directoryChildren.name",
        "c_directoryIntentPageLink.dm_directoryChildren.id",
        "c_directoryIntentPageLink.dm_directoryChildren.slug",
        "c_directoryIntentPageLink.dm_directoryChildren.headshot",
        "c_directoryIntentPageLink.dm_directoryChildren.taxonomy_relatedSpecialties.name",
        "taxonomy_relatedSpecialties.taxonomy_relatedConditions.id",
        "taxonomy_relatedSpecialties.taxonomy_relatedConditions.name",
        "taxonomy_relatedSpecialties.taxonomy_relatedConditions.slug",
        "taxonomy_relatedSpecialties.taxonomy_relatedProcedures.name",
        "taxonomy_relatedSpecialties.taxonomy_relatedProcedures.id",
        "taxonomy_relatedSpecialties.taxonomy_relatedProcedures.slug",
        "taxonomy_relatedSpecialties.c_specialtyProfessionals.name",
        "taxonomy_relatedSpecialties.c_specialtyProfessionals.id",
        "taxonomy_relatedSpecialties.c_specialtyProfessionals.slug",
        "taxonomy_relatedSpecialties.c_specialtyProfessionals.headshot",
        "taxonomy_relatedSpecialties.c_specialtyProfessionals.taxonomy_relatedSpecialties.name",
      ],
      filter: { entityTypes: ["ce_directoryIntentPage"] },
    },
  };
  
  export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return `${document.slug}`;
  };
  
  export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
    document,
  }): HeadConfig => {
    const facility = document;
    return {
      title: facility.name,
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
    };
  };
  
  const queryClient = new QueryClient();
  
  const Intent: Template<TemplateRenderProps> = ({
    document,
  }: TemplateProps) => {

    let stateSlug = `/${document.slug.substring(0,2)}`;

    return (
      <QueryClientProvider client={queryClient}>
        <PageLayout
          featuredLocations={document._site.c_featuredLocations}
          featuredSpecialties={document._site.c_featuredSpecialties}
        >
        <div className="mt-32">
          <Breadcrumbs
            breadcrumbs={[
              { label: "Home", link: "/" },
              { label: "All Locations", link: "/root.html" },
              {label: stateSlug.substring(1,3).toUpperCase(), link: stateSlug},
              {label: document.c_directoryIntentPageLink[0].name, link: `/${document.c_directoryIntentPageLink[0].slug}`},
              { label: document.name },
            ]}
          />
        </div>
        <IntentHero name={document.name} primaryPhoto={document.primaryPhoto.image.url} />
        <IntentContent
        name={document.name}
        cityName={document.c_cityName}
        providerHeader={`Providers in ${document.c_cityName}`}
        description={document.c_intentPageDescription}
        locations={document.c_directoryIntentPageLink[0].dm_directoryChildren}
        providers={document.c_directoryIntentPageLink[0].dm_directoryChildren}
        conditions={document.taxonomy_relatedSpecialties[0].taxonomy_relatedConditions}
        procedures={document.taxonomy_relatedSpecialties[0].taxonomy_relatedProcedures}
      />
        </PageLayout>
      </QueryClientProvider>
    );
  };
  
  export default Intent;
  
  