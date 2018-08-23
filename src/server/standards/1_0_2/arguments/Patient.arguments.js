module.exports = {
	ACTIVE: {
		name: 'active',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-active',
		description: 'Whether the patient record is active.',
	},
	ADDRESS: {
		name: 'address',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-address',
		description: 'An address in any kind of address/part of the patient.',
	},
	ADDRESS_CITY: {
		name: 'address-city',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-address-city',
		description: 'A city specified in an address.',
	},
	ADDRESS_COUNTRY: {
		name: 'address-country',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-address-country',
		description: 'A country specified in an address.',
	},
	ADDRESS_POSTALCODE: {
		name: 'address-postalcode',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-address-postalcode',
		description: 'A postalCode specified in an address.',
	},
	ADDRESS_STATE: {
		name: 'address-state',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-address-state',
		description: 'A state specified in an address.',
	},
	ADDRESS_USE: {
		name: 'address-use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-address-use',
		description: 'A use code specified in an address.',
	},
	ANIMAL_BREED: {
		name: 'animal-breed',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-animal-breed',
		description: 'The breed for animal patients.',
	},
	ANIMAL_SPECIES: {
		name: 'animal-species',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-animal-species',
		description: 'The species for animal patients.',
	},
	BIRTHDATE: {
		name: 'birthdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-birthdate',
		description: 'The patient\'s date of birth.',
	},
	CAREPROVIDER: {
		name: 'careprovider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-careprovider',
		description: 'Patient\'s nominated care provider, could be a care manager, not the organization that manages the record.',
	},
	DEATHDATE: {
		name: 'deathdate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-deathdate',
		description: 'The date of death has been provided and satisfies this search value.',
	},
	DECEASED: {
		name: 'deceased',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-deceased',
		description: 'This patient has been marked as deceased, or as a death date entered.',
	},
	EMAIL: {
		name: 'email',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-email',
		description: 'A value in an email contact.',
	},
	FAMILY: {
		name: 'family',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-family',
		description: 'A portion of the family name of the patient.',
	},
	GENDER: {
		name: 'gender',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-gender',
		description: 'Gender of the patient.',
	},
	GIVEN: {
		name: 'given',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-given',
		description: 'A portion of the given name of the patient.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-identifier',
		description: 'A patient identifier.',
	},
	LANGUAGE: {
		name: 'language',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-language',
		description: 'Language code (irrespective of use value).',
	},
	LINK: {
		name: 'link',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-link',
		description: 'All patients linked to the given patient.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-name',
		description: 'A portion of either family or given name of the patient.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-organization',
		description: 'The organization at which this person is a patient.',
	},
	PHONE: {
		name: 'phone',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-phone',
		description: 'A value in a phone contact.',
	},
	PHONETIC: {
		name: 'phonetic',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-phonetic',
		description: 'A portion of either family or given name using some kind of phonetic matching algorithm.',
	},
	TELECOM: {
		name: 'telecom',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Patient-telecom',
		description: 'The value in any kind of telecom details of the patient.',
	},
	RACE: {
		name: 'race',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/us-core-Patient-race',
		description: 'Returns patients with a race extension matching the specified code.',
	},
	ETHNICITY: {
		name: 'ethnicity',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/us-core-Patient-ethnicity',
		description: 'Returns patients with an ethnicity extension matching the specified code.',
	},
};
