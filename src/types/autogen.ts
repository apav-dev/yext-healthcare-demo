export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface AddressType {
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

export interface Coordinate {
  latitude: number;
  longitude: number;
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

export interface C_alsoLocatedAt {
  address?: AddressType;
  yextDisplayCoordinate?: Coordinate;
}

export interface C_faqs {
  question?: string;
  answer?: string;
}

export interface C_relatedHealthcareFacilities {
  name?: string;
}

export interface Taxonomy_relatedSpecialties {
  name?: string;
}

export default interface Doctors {
  id: string;
  name: string;
  slug: string;
  npi: string;
  c_providerBio: string;
  headshot: ImageType;
  address: AddressType;
  yextDisplayCoordinate: Coordinate;
  insuranceAccepted: string[];
  educationList: EducationList[];
  certifications: string[];
  languages: string[];
  gender: Gender;
  c_alsoLocatedAt: C_alsoLocatedAt[];
  c_faqs: C_faqs[];
  c_relatedHealthcareFacilities: C_relatedHealthcareFacilities[];
  taxonomy_relatedSpecialties: Taxonomy_relatedSpecialties[];
}
