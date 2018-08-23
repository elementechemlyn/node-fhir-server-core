module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-category',
		description: 'Message category.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-encounter',
		description: 'Encounter leading to message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-identifier',
		description: 'Unique identifier.',
	},
	MEDIUM: {
		name: 'medium',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-medium',
		description: 'A channel of communication.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-patient',
		description: 'Focus of message.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-priority',
		description: 'Message urgency.',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-recipient',
		description: 'Message recipient.',
	},
	REQUESTED: {
		name: 'requested',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-requested',
		description: 'When ordered or proposed.',
	},
	REQUESTER: {
		name: 'requester',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-requester',
		description: 'An individual who requested a communication.',
	},
	SENDER: {
		name: 'sender',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-sender',
		description: 'Message sender.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-status',
		description: 'proposed | planned | requested | received | accepted | in-progress | completed | suspended | rejected | failed.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-subject',
		description: 'Focus of message.',
	},
	TIME: {
		name: 'time',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/CommunicationRequest-time',
		description: 'When scheduled.',
	},
};
