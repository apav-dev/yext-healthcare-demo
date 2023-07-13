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

export interface EntityReference {
  entityId: string;
  name: string;
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

export interface Coordinate {
  latitude?: number;
  longitude?: number;
}

export interface C_locationsPracticingAt {
  address?: Address;
  geocodedCoordinate?: Coordinate;
}

export default interface Doctor {
  name: string;
  slug: string;
  npi: string;
  c_description: string;
  headshot: Image;
  c_specialty: EntityReference[];
  c_locationsPracticingAt: C_locationsPracticingAt[];
}
