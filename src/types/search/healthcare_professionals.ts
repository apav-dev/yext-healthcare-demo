export enum Gender {
	UNSPECIFIED = "Unspecified",
	FEMALE = "Female",
	MALE = "Male",
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
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

export default interface HealthcareProfessional {
	landingPageUrl?: string,
	slug?: string,
	description?: string,
	name: string,
	firstName?: string,
	gender?: Gender,
	geocodedCoordinate?: Coordinate,
	headshot?: Image,
	insuranceAccepted?: string[],
	lastName?: string,
	mainPhone?: any,
}
