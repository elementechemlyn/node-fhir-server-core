module.exports = {
	ACTION: {
		name: 'action',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessRequest-action',
		description: 'The action requested by this resource.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessRequest-identifier',
		description: 'The business identifier of the ProcessRequest.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessRequest-organization',
		description: 'The organization who generated this request.',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessRequest-provider',
		description: 'The provider who regenerated this request.',
	},
};
