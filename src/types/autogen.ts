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

export interface C_insurances {
	image?: ComplexImage,
	label: string,
}

export interface C_specialty {
	name?: string,
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

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface C_locationsPracticingAt {
	address?: Address,
	geocodedCoordinate?: Coordinate,
}

export interface C_faqs {
	question?: string,
	answer?: string,
}

export default interface Doctors {
	name: string,
	slug: string,
	npi: string,
	c_description: string,
	headshot: Image,
	c_insurances: C_insurances[],
	c_education: string[],
	c_boardCertifications: string[],
	c_practiceNames: string[],
	c_languagesSpoken: string[],
	c_gender: string,
	c_specialty: C_specialty[],
	c_locationsPracticingAt: C_locationsPracticingAt[],
	c_faqs: C_faqs[],
}
