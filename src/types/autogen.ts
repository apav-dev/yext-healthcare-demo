export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface C_featuredLocations {
	name?: string,
	slug?: string,
	address?: Address,
}

export interface C_featuredSpecialties {
	name?: string,
	slug?: string,
}

export interface SiteEntity {
	c_featuredLocations: C_featuredLocations[],
	c_featuredSpecialties: C_featuredSpecialties[],
}

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

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface C_insurances {
	label: string,
	image?: ComplexImage,
}

export enum Type {
	FELLOWSHIP = "Fellowship",
	RESIDENCY = "Residency",
	INTERNSHIP = "Internship",
	MEDICAL_SCHOOL = "Medical School",
}

export interface EducationList {
	type: Type,
	institutionName: string,
	yearCompleted: number,
}

export enum Gender {
	UNSPECIFIED = "Unspecified",
	FEMALE = "Female",
	MALE = "Male",
}

export interface Taxonomy_relatedSpecialties {
	name?: string,
}

export interface C_alsoLocatedAt {
	address?: Address,
	yextDisplayCoordinate?: Coordinate,
}

export interface C_faqs {
	question?: string,
	answer?: string,
}

export interface C_relatedHealthcareFacilities {
	name?: string,
}

export interface Doctors {
	id: string,
	name: string,
	slug: string,
	npi: string,
	c_providerBio: string,
	headshot: Image,
	address: Address,
	yextDisplayCoordinate: Coordinate,
	c_insurances: C_insurances[],
	insuranceAccepted: string[],
	educationList: EducationList[],
	certifications: string[],
	languages: string[],
	gender: Gender,
	taxonomy_relatedSpecialties: Taxonomy_relatedSpecialties[],
	c_alsoLocatedAt: C_alsoLocatedAt[],
	c_faqs: C_faqs[],
	c_relatedHealthcareFacilities: C_relatedHealthcareFacilities[],
}

export interface CTA {
	label?: string,
	link?: string,
}

export interface C_primaryHero {
	title?: string,
	description?: string,
	image?: ComplexImage,
	cTA?: CTA,
}

export interface C_locationHero {
	title?: string,
	description?: string,
	image?: ComplexImage,
	cTA?: CTA,
}

export interface C_servicesHero {
	title?: string,
	description?: string,
	image?: ComplexImage,
	cTA?: CTA,
}

export interface Home {
	id: string,
	name: string,
	slug: string,
	c_primaryHero: C_primaryHero,
	c_locationHero: C_locationHero,
	c_servicesHero: C_servicesHero,
}
