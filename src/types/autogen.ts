export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface Taxonomy_relatedSpecialties {
  name?: string;
  taxonomy_relatedConditions?: any;
  // taxonomy_relatedConditions?: any;
  // taxonomy_relatedConditions?: any;
  // taxonomy_relatedProcedures?: any;
  // taxonomy_relatedProcedures?: any;
  // taxonomy_relatedProcedures?: any;
  c_specialtyProfessionals?: any;
  // c_specialtyProfessionals?: any;
  // c_specialtyProfessionals?: any;
  // c_specialtyProfessionals?: any;
  // c_specialtyProfessionals?: any;
}

export interface C_directoryIntentPageLink {
  name?: string;
  slug?: string;
  dm_directoryChildren?: any;
  // dm_directoryChildren?: any;
  // dm_directoryChildren?: any;
  // dm_directoryChildren?: any;
  // dm_directoryChildren?: any;
}

export interface Intents {
  id: string;
  name: string;
  slug: string;
  primaryPhoto: ComplexImage;
  c_cityName: string;
  c_intentPageDescription: string;
  taxonomy_relatedSpecialties: Taxonomy_relatedSpecialties[];
  c_directoryIntentPageLink: C_directoryIntentPageLink[];
}

export interface C_relatedSpecialties2 {
  taxonomy_relatedProcedures?: any;
  // taxonomy_relatedProcedures?: any;
  name?: string;
  id?: string;
  slug?: string;
}

export interface Conditions {
  id: string;
  name: string;
  slug: string;
  description: string;
  c_relatedSpecialties2: C_relatedSpecialties2[];
}

export interface Cta {
  label?: string;
  link?: string;
}

export interface C_primaryHero {
  title?: string;
  description?: string;
  image?: ComplexImage;
  cta?: Cta;
}

export interface Dm_directoryParents {
  name?: string;
  slug?: string;
  meta?: string;
  c_addressRegionDisplayName?: string;
}

export interface Address {
  line1?: string;
  line2?: string;
  line3?: string;
  sublocality?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  extraDescription?: string;
  countryCode?: string;
}

export interface Dm_directoryChildren {
  name?: string;
  address?: Address;
  mainPhone?: any;
  slug?: string;
  id?: string;
  headshot?: Image;
  taxonomy_relatedSpecialties?: any;
}

export interface DirectoryCity {
  id: string;
  uid: string;
  meta: any;
  name: string;
  description: string;
  slug: string;
  c_addressRegionDisplayName: string;
  c_primaryHero: C_primaryHero;
  dm_directoryParents: Dm_directoryParents[];
  dm_directoryChildren: Dm_directoryChildren[];
}

export interface Interval {
  start: any;
  end: any;
}

export interface DayHour {
  openIntervals?: Interval[];
  isClosed?: boolean;
}

export interface HolidayHours {
  date: string;
  openIntervals?: Interval[];
  isClosed?: boolean;
  isRegularHours?: boolean;
}

export interface Hours {
  monday?: DayHour;
  tuesday?: DayHour;
  wednesday?: DayHour;
  thursday?: DayHour;
  friday?: DayHour;
  saturday?: DayHour;
  sunday?: DayHour;
  holidayHours?: HolidayHours[];
  reopenDate?: string;
}

export interface Coordinate {
  latitude?: number;
  longitude?: number;
}

export interface Taxonomy_relatedSpecialties_1 {
  id?: string;
  name?: string;
  slug?: string;
}

export interface C_relatedHealthcareProfessionals {
  id?: string;
  name?: string;
  headshot?: Image;
  taxonomy_relatedSpecialties?: any;
  slug?: string;
}

export interface Facilities {
  id: string;
  name: string;
  slug: string;
  address: Address;
  hours: Hours;
  mainPhone: any;
  yextDisplayCoordinate: Coordinate;
  c_facilityDescription: string;
  taxonomy_relatedSpecialties: Taxonomy_relatedSpecialties_1[];
  c_relatedHealthcareProfessionals: C_relatedHealthcareProfessionals[];
}

export interface C_insurances {
  label: string;
  image?: ComplexImage;
}

export enum Type {
  FELLOWSHIP = "Fellowship",
  RESIDENCY = "Residency",
  INTERNSHIP = "Internship",
  MEDICAL_SCHOOL = "Medical School",
}

export interface EducationList {
  type: Type;
  institutionName: string;
  yearCompleted: number;
}

export enum Gender {
  UNSPECIFIED = "Unspecified",
  FEMALE = "Female",
  MALE = "Male",
}

export interface C_relatedHealthcareFacilities {
  name?: string;
}

export interface Taxonomy_relatedSpecialties_2 {
  name?: string;
}

export interface C_alsoLocatedAt {
  address?: Address;
  yextDisplayCoordinate?: Coordinate;
}

export interface C_faqs {
  question?: string;
  answer?: string;
}

export interface Doctors {
  id: string;
  name: string;
  slug: string;
  npi: string;
  c_providerBio: string;
  headshot: Image;
  address: Address;
  yextDisplayCoordinate: Coordinate;
  c_insurances: C_insurances[];
  insuranceAccepted: string[];
  educationList: EducationList[];
  certifications: string[];
  languages: string[];
  gender: Gender;
  c_relatedHealthcareFacilities: C_relatedHealthcareFacilities[];
  taxonomy_relatedSpecialties: Taxonomy_relatedSpecialties_2[];
  c_alsoLocatedAt: C_alsoLocatedAt[];
  c_faqs: C_faqs[];
}

export interface Dm_directoryChildren_1 {
  name?: string;
  slug?: string;
  dm_childEntityIds?: string[];
}

export interface Dm_directoryParents_1 {
  name?: string;
  slug?: string;
  meta?: string;
}

export interface DirectoryState {
  id: string;
  uid: string;
  meta: any;
  name: string;
  description: string;
  slug: string;
  c_addressRegionDisplayName: string;
  dm_childEntityIds: string[];
  c_primaryHero: C_primaryHero;
  dm_directoryChildren: Dm_directoryChildren_1[];
  dm_directoryParents: Dm_directoryParents_1[];
}

export interface C_featuredLocations {
  name?: string;
  slug?: string;
  address?: Address;
}

export interface C_featuredSpecialties {
  name?: string;
  slug?: string;
}

export interface C_featuredArticles {
  name?: string;
  id?: string;
  photoGallery?: ComplexImage[];
}

export interface SiteEntity {
  c_featuredLocations: C_featuredLocations[];
  c_featuredSpecialties: C_featuredSpecialties[];
  c_featuredArticles: C_featuredArticles[];
}

export interface Taxonomy_relatedConditions {
  id?: string;
  name?: string;
  slug?: string;
}

export interface Taxonomy_relatedProcedures {
  id?: string;
  name?: string;
  slug?: string;
}

export interface Taxonomy_relatedReasonsForVisit {
  id?: string;
  name?: string;
  slug?: string;
}

export interface Taxonomy_subspecialties {
  id?: string;
  name?: string;
  slug?: string;
}

export interface C_specialtyFacilities {
  id?: string;
  name?: string;
  slug?: string;
}

export interface C_specialtyProfessionals {
  id?: string;
  name?: string;
  slug?: string;
  headshot?: Image;
  taxonomy_relatedSpecialties?: any;
}

export interface Specialties {
  id: string;
  name: string;
  slug: string;
  c_specialtyOverviewDescription: string;
  taxonomy_relatedConditions: Taxonomy_relatedConditions[];
  taxonomy_relatedProcedures: Taxonomy_relatedProcedures[];
  taxonomy_relatedReasonsForVisit: Taxonomy_relatedReasonsForVisit[];
  taxonomy_subspecialties: Taxonomy_subspecialties[];
  c_specialtyFacilities: C_specialtyFacilities[];
  c_specialtyProfessionals: C_specialtyProfessionals[];
}

export interface C_locationHero {
  title?: string;
  description?: string;
  image?: ComplexImage;
  cta?: Cta;
}

export interface C_servicesHero {
  title?: string;
  description?: string;
  image?: ComplexImage;
  cta?: Cta;
}

export interface C_featuredDirectory {
  title?: string;
  directory?: any;
  // directory?: any,
  cta?: string;
}

export interface C_featuredBlogs {
  blogs?: any;
  // blogs?: any,
  // blogs?: any,
  // blogs?: any,
  // blogs?: any,
  // blogs?: any,
  // blogs?: any,
}

export interface Home {
  id: string;
  name: string;
  slug: string;
  c_primaryHero: C_primaryHero;
  c_locationHero: C_locationHero;
  c_servicesHero: C_servicesHero;
  c_featuredDirectory: C_featuredDirectory;
  c_featuredBlogs: C_featuredBlogs;
}

export interface C_author {
  name?: string;
}

export interface Taxonomy_relatedSpecialties_3 {
  name?: string;
  id?: string;
}

export interface C_relatedBlogPosts {
  name?: string;
  c_blogPostContentSummary?: string;
  photoGallery?: ComplexImage[];
  slug?: string;
}

export interface Blogs {
  id: string;
  name: string;
  slug: string;
  c_datePosted: string;
  photoGallery: ComplexImage[];
  c_blogPostContentSummary: string;
  c_blogPostContentOriginal: any;
  c_author: C_author[];
  taxonomy_relatedSpecialties: Taxonomy_relatedSpecialties_3[];
  c_relatedBlogPosts: C_relatedBlogPosts[];
}

export interface Dm_directoryChildren_2 {
  name?: string;
  slug?: string;
  c_addressRegionDisplayName?: string;
  dm_childEntityIds?: string[];
}

export interface DirectoryRoot {
  id: string;
  uid: string;
  meta: any;
  name: string;
  slug: string;
  c_primaryHero: C_primaryHero;
  dm_directoryChildren: Dm_directoryChildren_2[];
}
