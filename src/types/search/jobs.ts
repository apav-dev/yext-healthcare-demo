export enum EmploymentType {
	FULL_TIME = "Full Time",
	PART_TIME = "Part Time",
	CONTRACTOR = "Contractor",
	TEMPORARY = "Temporary",
	INTERN = "Intern",
	VOLUNTEER = "Volunteer",
	PER_DIEM = "Per Diem",
	OTHER = "Other",
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Location {
	existingLocation?: EntityReference,
	externalLocation?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface YextBoundingBox {
	southWest: Coordinate,
	northEast: Coordinate,
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

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export enum C_jobDepartment {
	ADMINISTRATIVE = "Administrative",
	BEHAVIORAL_HEALTH = "Behavioral Health",
	FACILITIES_MANAGEMENT = "Facilities Management",
	FINANCE = "Finance",
	HEALTH_INFORMATION_SERVICES = "Health Information Services",
	HUMAN_RESOURCES = "Human Resources",
	IT_DEPARTMENT = "IT Department",
	LABORATORY = "Laboratory",
	MARKETING = "Marketing",
	NURSING = "Nursing",
	PATIENT_SERVICES = "Patient Services",
	PRIMARY_CARE = "Primary Care",
	RADIOLOGY = "Radiology",
	REHABILITATION_SERVICES = "Rehabilitation Services",
	RESEARCH = "Research",
	REVENUE_CYCLE_MANAGEMENT = "Revenue Cycle Management",
	SOCIAL_SERVICES = "Social Services",
}

export enum C_jobGroup {
	ADMINISTRATIVE = "Administrative",
	CLINICAL = "Clinical",
	INFORMATION_TECHNOLOGY = "Information Technology",
	MARKETING = "Marketing",
	RESEARCH = "Research",
}

export default interface Job {
	applicationUrl?: string,
	datePosted?: string,
	employmentType?: EmploymentType,
	hiringOrganization?: string,
	jobLocation?: EntityReference,
	landingPageUrl?: string,
	location?: Location,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	slug?: string,
	validThrough?: any,
	workRemote?: boolean,
	yextBoundingBox?: YextBoundingBox,
	description?: string,
	logo?: ComplexImage,
	name: string,
	c_jobDepartment?: C_jobDepartment,
	c_jobGroup?: C_jobGroup,
	c_jobResponsibilities?: string,
	taxonomy_relatedSpecialties?: EntityReference[],
	displayCoordinate?: Coordinate,
	keywords?: string[],
	id: string,
	timezone?: any,
	yextDisplayCoordinate?: Coordinate,
}
