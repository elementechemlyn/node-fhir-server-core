module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		description: 'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  .',
	},
	CONTAINER: {
		name: 'container',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-container',
		description: 'E.g. box, vial, blister-pack.',
	},
	FORM: {
		name: 'form',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-form',
		description: 'powder | tablets | capsule +.',
	},
	INGREDIENT: {
		name: 'ingredient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient',
		description: 'The product contained.',
	},
	INGREDIENT_CODE: {
		name: 'ingredient-code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient-code',
		description: 'The product contained.',
	},
	MANUFACTURER: {
		name: 'manufacturer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-manufacturer',
		description: 'Manufacturer of the item.',
	},
	OVER_THE_COUNTER: {
		name: 'over-the-counter',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-over-the-counter',
		description: 'True if medication does not require a prescription.',
	},
	PACKAGE_ITEM: {
		name: 'package-item',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-package-item',
		description: 'The item in the package.',
	},
	PACKAGE_ITEM_CODE: {
		name: 'package-item-code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-package-item-code',
		description: 'The item in the package.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-status',
		description: 'active | inactive | entered-in-error.',
	},
};
