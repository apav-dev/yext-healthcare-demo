export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum LinkType {
	OTHER = "Other",
	URL = "URL",
	PHONE = "Phone",
	EMAIL = "Email",
}

export interface C_primaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface C_secondaryCTA {
	label?: string,
	linkType?: LinkType,
	link?: string,
}

export default interface Taxonomy_specialty {
	primaryPhoto?: ComplexImage,
	slug?: string,
	name: string,
	c_primaryCTA?: C_primaryCTA,
	taxonomy_relatedConditions?: EntityReference[],
	taxonomy_relatedProcedures?: EntityReference[],
	taxonomy_relatedReasonsForVisit?: EntityReference[],
	c_secondaryCTA?: C_secondaryCTA,
	c_specialtyOverviewDescription?: string,
	c_specialtyOverviewSectionTitle?: string,
	taxonomy_subspecialties?: EntityReference[],
	taxonomy_synonyms?: string[],
	id: string,
}
