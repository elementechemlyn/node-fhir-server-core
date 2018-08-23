module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
		description: 'Multiple Resources:     * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Procedure](procedure.html): A code to identify a  procedure  * [List](list.html): What the purpose of this list is  * [ProcedureRequest](procedurerequest.html): What is being requested/ordered  * [Observation](observation.html): The code of the observation type  * [DiagnosticReport](diagnosticreport.html): The code for the report as a whole, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [Condition](condition.html): Code for the condition  .',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-identifier',
		description: 'Multiple Resources:     * [DocumentManifest](documentmanifest.html): Unique Identifier for the set of documents  * [Goal](goal.html): External Ids for this goal  * [Consent](consent.html): Identifier for this record (external references)  * [DocumentReference](documentreference.html): Master Version Specific Identifier  * [SupplyRequest](supplyrequest.html): Unique identifier  * [RiskAssessment](riskassessment.html): Unique identifier for the assessment  * [CareTeam](careteam.html): External Ids for this team  * [ImagingStudy](imagingstudy.html): Other identifiers for the Study  * [FamilyMemberHistory](familymemberhistory.html): A search by a record identifier  * [Encounter](encounter.html): Identifier(s) by which this encounter is known  * [DeviceRequest](devicerequest.html): Business identifier for request/order  * [AllergyIntolerance](allergyintolerance.html): External ids for this item  * [CarePlan](careplan.html): External Ids for this plan  * [EpisodeOfCare](episodeofcare.html): Business Identifier(s) relevant for this EpisodeOfCare  * [Procedure](procedure.html): A unique identifier for a procedure  * [List](list.html): Business identifier  * [Immunization](immunization.html): Business identifier  * [VisionPrescription](visionprescription.html): Return prescriptions with this external identifier  * [ProcedureRequest](procedurerequest.html): Identifiers assigned to this order  * [Observation](observation.html): The unique id for a particular observation  * [DiagnosticReport](diagnosticreport.html): An identifier for the report  * [NutritionOrder](nutritionorder.html): Return nutrition orders with this external identifier  * [Condition](condition.html): A unique identifier of the condition record  * [Composition](composition.html): Logical identifier of composition (version-independent)  * [DetectedIssue](detectedissue.html): Unique id for the detected issue  * [SupplyDelivery](supplydelivery.html): External identifier  .',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
		description: 'Multiple Resources:     * [ReferralRequest](referralrequest.html): Who the referral is about  * [DocumentManifest](documentmanifest.html): The subject of the set of documents  * [Goal](goal.html): Who this goal is intended for  * [Consent](consent.html): Who the consent applies to  * [DocumentReference](documentreference.html): Who/what is the subject of the document  * [ImagingManifest](imagingmanifest.html): Subject of the ImagingManifest (or a DICOM Key Object Selection which it represents)  * [RiskAssessment](riskassessment.html): Who/what does assessment apply to?  * [CareTeam](careteam.html): Who care team is for  * [ImagingStudy](imagingstudy.html): Who the study is about  * [FamilyMemberHistory](familymemberhistory.html): The identity of a subject to list family member history items for  * [Encounter](encounter.html): The patient ro group present at the encounter  * [DeviceUseStatement](deviceusestatement.html): Search by subject - a patient  * [DeviceRequest](devicerequest.html): Individual the service is ordered for  * [AllergyIntolerance](allergyintolerance.html): Who the sensitivity is for  * [CarePlan](careplan.html): Who care plan is for  * [EpisodeOfCare](episodeofcare.html): The patient who is the focus of this episode of care  * [Procedure](procedure.html): Search by subject - a patient  * [List](list.html): If all resources have the same subject  * [Immunization](immunization.html): The patient for the vaccination record  * [VisionPrescription](visionprescription.html): The identity of a patient to list dispenses for  * [ProcedureRequest](procedurerequest.html): Search by subject - a patient  * [Flag](flag.html): The identity of a subject to list flags for  * [Observation](observation.html): The subject that the observation is about (if patient)  * [DiagnosticReport](diagnosticreport.html): The subject of the report if a patient  * [NutritionOrder](nutritionorder.html): The identity of the person who requires the diet, formula or nutritional supplement  * [Condition](condition.html): Who has the condition?  * [Composition](composition.html): Who and/or what the composition is about  * [DetectedIssue](detectedissue.html): Associated patient  * [SupplyDelivery](supplydelivery.html): Patient for whom the item is supplied  * [ClinicalImpression](clinicalimpression.html): Patient or group assessed  .',
	},
	ABATEMENT_AGE: {
		name: 'abatement-age',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-abatement-age',
		description: 'Abatement as age or age range.',
	},
	ABATEMENT_BOOLEAN: {
		name: 'abatement-boolean',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-abatement-boolean',
		description: 'Abatement boolean (boolean is true or non-boolean values are present).',
	},
	ABATEMENT_DATE: {
		name: 'abatement-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-abatement-date',
		description: 'Date-related abatements (dateTime and period).',
	},
	ABATEMENT_STRING: {
		name: 'abatement-string',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-abatement-string',
		description: 'Abatement as a string.',
	},
	ASSERTED_DATE: {
		name: 'asserted-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-asserted-date',
		description: 'Date record was believed accurate.',
	},
	ASSERTER: {
		name: 'asserter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-asserter',
		description: 'Person who asserts this condition.',
	},
	BODY_SITE: {
		name: 'body-site',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-body-site',
		description: 'Anatomical location, if relevant.',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-category',
		description: 'The category of the condition.',
	},
	CLINICAL_STATUS: {
		name: 'clinical-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-clinical-status',
		description: 'The clinical status of the condition.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-context',
		description: 'Encounter or episode when condition first asserted.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-encounter',
		description: 'Encounter when condition first asserted.',
	},
	EVIDENCE: {
		name: 'evidence',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-evidence',
		description: 'Manifestation/symptom.',
	},
	EVIDENCE_DETAIL: {
		name: 'evidence-detail',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-evidence-detail',
		description: 'Supporting information found elsewhere.',
	},
	ONSET_AGE: {
		name: 'onset-age',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-onset-age',
		description: 'Onsets as age or age range.',
	},
	ONSET_DATE: {
		name: 'onset-date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-onset-date',
		description: 'Date related onsets (dateTime and Period).',
	},
	ONSET_INFO: {
		name: 'onset-info',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-onset-info',
		description: 'Onsets as a string.',
	},
	SEVERITY: {
		name: 'severity',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-severity',
		description: 'The severity of the condition.',
	},
	STAGE: {
		name: 'stage',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-stage',
		description: 'Simple summary (disease specific).',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-subject',
		description: 'Who has the condition?.',
	},
	VERIFICATION_STATUS: {
		name: 'verification-status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-verification-status',
		description: 'provisional | differential | confirmed | refuted | entered-in-error | unknown.',
	},
};
