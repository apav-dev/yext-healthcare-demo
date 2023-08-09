export interface EntityReference {
	entityId: string,
	name: string,
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

export default interface Ce_blogPost {
	landingPageUrl?: string,
	slug?: string,
	name: string,
	c_author?: EntityReference[],
	c_blogPostContentOriginal?: any,
	c_blogPostContentSummary?: string,
	c_datePosted?: string,
	c_relatedBlogPosts?: EntityReference[],
	taxonomy_relatedSpecialties?: EntityReference[],
	photoGallery?: ComplexImage[],
	id: string,
}
