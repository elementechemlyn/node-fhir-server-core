module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-author',
		description: 'The source of the decision.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-code',
		description: 'ok | transient-error | fatal-error.',
	},
	DESTINATION: {
		name: 'destination',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-destination',
		description: 'Name of system.',
	},
	DESTINATION_URI: {
		name: 'destination-uri',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-destination-uri',
		description: 'Actual destination address or id.',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-enterer',
		description: 'The source of the data entry.',
	},
	EVENT: {
		name: 'event',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-event',
		description: 'Code for the event this message represents.',
	},
	FOCUS: {
		name: 'focus',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-focus',
		description: 'The actual content of the message.',
	},
	RECEIVER: {
		name: 'receiver',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-receiver',
		description: 'Intended \'real-world\' recipient for the data.',
	},
	RESPONSE_ID: {
		name: 'response-id',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-response-id',
		description: 'Id of original message.',
	},
	RESPONSIBLE: {
		name: 'responsible',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-responsible',
		description: 'Final responsibility for event.',
	},
	SENDER: {
		name: 'sender',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-sender',
		description: 'Real world sender of the message.',
	},
	SOURCE: {
		name: 'source',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-source',
		description: 'Name of system.',
	},
	SOURCE_URI: {
		name: 'source-uri',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-source-uri',
		description: 'Actual message source address or id.',
	},
	TARGET: {
		name: 'target',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-target',
		description: 'Particular delivery destination within the destination.',
	},
	TIMESTAMP: {
		name: 'timestamp',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MessageHeader-timestamp',
		description: 'Time that the message was sent.',
	},
};
