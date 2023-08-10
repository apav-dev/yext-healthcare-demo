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

export interface Intents {
	id: string,
	name: string,
	slug: string,
	primaryPhoto: ComplexImage,
}

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

export interface C_featuredArticles {
	name?: string,
	id?: string,
	photoGallery?: ComplexImage[],
}

export interface SiteEntity {
	c_featuredLocations: C_featuredLocations[],
	c_featuredSpecialties: C_featuredSpecialties[],
	c_featuredArticles: C_featuredArticles[],
}

export interface Taxonomy_relatedConditions {
	id?: string,
	name?: string,
	slug?: string,
}

export interface Taxonomy_relatedProcedures {
	id?: string,
	name?: string,
	slug?: string,
}

export interface Taxonomy_relatedReasonsForVisit {
	id?: string,
	name?: string,
	slug?: string,
}

export interface Taxonomy_subspecialties {
	id?: string,
	name?: string,
	slug?: string,
}

export interface C_specialtyFacilities {
	id?: string,
	name?: string,
	slug?: string,
}

export interface C_specialtyProfessionals {
	id?: string,
	name?: string,
	slug?: string,
	headshot?: Image,
	taxonomy_relatedSpecialties?: any,
}

export interface Specialties {
	id: string,
	name: string,
	slug: string,
	c_specialtyOverviewDescription: string,
	taxonomy_relatedConditions: Taxonomy_relatedConditions[],
	taxonomy_relatedProcedures: Taxonomy_relatedProcedures[],
	taxonomy_relatedReasonsForVisit: Taxonomy_relatedReasonsForVisit[],
	taxonomy_subspecialties: Taxonomy_subspecialties[],
	c_specialtyFacilities: C_specialtyFacilities[],
	c_specialtyProfessionals: C_specialtyProfessionals[],
}

export interface C_relatedSpecialties2 {
	taxonomy_relatedProcedures?: any,
	taxonomy_relatedProcedures?: any,
	name?: string,
	id?: string,
	slug?: string,
}

export interface Conditions {
	id: string,
	name: string,
	slug: string,
	description: string,
	c_relatedSpecialties2: C_relatedSpecialties2[],
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
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

export interface Interval {
	start: any,
	end: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export interface Taxonomy_relatedSpecialties_1 {
	id?: string,
	name?: string,
	slug?: string,
}

export interface C_relatedHealthcareProfessionals {
	id?: string,
	name?: string,
	headshot?: Image,
	taxonomy_relatedSpecialties?: any,
	slug?: string,
}

export interface Facilities {
	id: string,
	name: string,
	slug: string,
	address: Address,
	hours: Hours,
	mainPhone: any,
	yextDisplayCoordinate: Coordinate,
	c_facilityDescription: string,
	taxonomy_relatedSpecialties: Taxonomy_relatedSpecialties_1[],
	c_relatedHealthcareProfessionals: C_relatedHealthcareProfessionals[],
}

export interface Cta {
	label?: string,
	link?: string,
}

export interface C_primaryHero {
	title?: string,
	description?: string,
	image?: ComplexImage,
	cta?: Cta,
}

export interface C_locationHero {
	title?: string,
	description?: string,
	image?: ComplexImage,
	cta?: Cta,
}

export interface C_servicesHero {
	title?: string,
	description?: string,
	image?: ComplexImage,
	cta?: Cta,
}

export interface C_featuredDirectory {
	title?: string,
	directory?: any,
	directory?: any,
	cta?: string,
}

export interface Home {
	id: string,
	name: string,
	slug: string,
	c_primaryHero: C_primaryHero,
	c_locationHero: C_locationHero,
	c_servicesHero: C_servicesHero,
	c_featuredDirectory: C_featuredDirectory,
}
