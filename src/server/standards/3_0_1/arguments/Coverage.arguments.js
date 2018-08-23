module.exports = {
	BENEFICIARY: {
		name: 'beneficiary',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-beneficiary',
		description: 'Covered party.',
	},
	CLASS: {
		name: 'class',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-class',
		description: 'Class identifier.',
	},
	DEPENDENT: {
		name: 'dependent',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-dependent',
		description: 'Dependent number.',
	},
	GROUP: {
		name: 'group',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-group',
		description: 'Group identifier.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-identifier',
		description: 'The primary identifier of the insured and the coverage.',
	},
	PAYOR: {
		name: 'payor',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-payor',
		description: 'The identity of the insurer or party paying for services.',
	},
	PLAN: {
		name: 'plan',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-plan',
		description: 'A plan or policy identifier.',
	},
	POLICY_HOLDER: {
		name: 'policy-holder',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-policy-holder',
		description: 'Reference to the policyholder.',
	},
	SEQUENCE: {
		name: 'sequence',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-sequence',
		description: 'Sequence number.',
	},
	SUBCLASS: {
		name: 'subclass',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subclass',
		description: 'Sub-class identifier.',
	},
	SUBGROUP: {
		name: 'subgroup',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subgroup',
		description: 'Sub-group identifier.',
	},
	SUBPLAN: {
		name: 'subplan',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subplan',
		description: 'Sub-plan identifier.',
	},
	SUBSCRIBER: {
		name: 'subscriber',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subscriber',
		description: 'Reference to the subscriber.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-type',
		description: 'The kind of coverage (health plan, auto, Workers Compensation).',
	},
};
