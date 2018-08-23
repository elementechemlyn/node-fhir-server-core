module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-category',
		description: 'Message category.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-encounter',
		description: 'Encounter leading to message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-identifier',
		description: 'Unique identifier.',
	},
	MEDIUM: {
		name: 'medium',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-medium',
		description: 'A channel of communication.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-patient',
		description: 'Focus of message.',
	},
	RECEIVED: {
		name: 'received',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-received',
		description: 'When received.',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-recipient',
		description: 'Message recipient.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-request',
		description: 'CommunicationRequest producing this message.',
	},
	SENDER: {
		name: 'sender',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-sender',
		description: 'Message sender.',
	},
	SENT: {
		name: 'sent',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-sent',
		description: 'When sent.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-status',
		description: 'in-progress | completed | suspended | rejected | failed.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Communication-subject',
		description: 'Focus of message.',
	},
};
