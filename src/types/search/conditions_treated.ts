export interface EntityReference {
	entityId: string,
	name: string,
}

export default interface Taxonomy_conditionTreated {
	slug?: string,
	description?: string,
	name: string,
	c_diagnosticProcedures?: EntityReference[],
	taxonomy_synonyms?: string[],
	c_treatments?: EntityReference[],
	id: string,
}
