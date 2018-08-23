module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-code',
		description: 'A code defined in the value set.',
	},
	CONTEXT: {
		name: 'context',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-context',
		description: 'A use context assigned to the value set.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-date',
		description: 'The value set publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-description',
		description: 'Text search in the description of the value set.',
	},
	EXPANSION: {
		name: 'expansion',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-expansion',
		description: 'Uniquely identifies this expansion.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-identifier',
		description: 'The identifier for the value set.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-name',
		description: 'The name of the value set.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-publisher',
		description: 'Name of the publisher of the value set.',
	},
	REFERENCE: {
		name: 'reference',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-reference',
		description: 'A code system included or excluded in the value set or an imported value set.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-status',
		description: 'The status of the value set.',
	},
	SYSTEM: {
		name: 'system',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-system',
		description: 'The system for any codes defined by this value set.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-url',
		description: 'The logical URL for the value set.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ValueSet-version',
		description: 'The version identifier of the value set.',
	},
};
