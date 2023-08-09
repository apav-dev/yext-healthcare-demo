export interface EntityReference {
	entityId: string,
	name: string,
}

export default interface Taxonomy_subspecialty {
	name: string,
	taxonomy_relatedConditions?: EntityReference[],
	taxonomy_relatedProcedures?: EntityReference[],
	taxonomy_relatedReasonsForVisit?: EntityReference[],
	taxonomy_synonyms?: string[],
	id: string,
}
