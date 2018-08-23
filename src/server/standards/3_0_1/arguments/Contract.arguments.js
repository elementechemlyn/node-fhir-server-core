module.exports = {
	AGENT: {
		name: 'agent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-agent',
		description: 'Agent to the Contact.',
	},
	AUTHORITY: {
		name: 'authority',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-authority',
		description: 'The authority of the contract.',
	},
	DOMAIN: {
		name: 'domain',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-domain',
		description: 'The domain of the contract.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-identifier',
		description: 'The identity of the contract.',
	},
	ISSUED: {
		name: 'issued',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-issued',
		description: 'The date/time the contract was issued.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-patient',
		description: 'The identity of the subject of the contract (if a patient).',
	},
	SIGNER: {
		name: 'signer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-signer',
		description: 'Contract Signatory Party.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-subject',
		description: 'The identity of the subject of the contract.',
	},
	TERM_TOPIC: {
		name: 'term-topic',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Contract-term-topic',
		description: 'The identity of the topic of the contract terms.',
	},
};
