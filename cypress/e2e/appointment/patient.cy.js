import PatientPage from '../../support/page_object/PatientPage';
describe('patient', () => {
    it('create new patient', () => {
        const patientPage = new PatientPage();
        patientPage.open();
        patientPage.addPatientButton.click();
        patientPage.patientsForm.fill({
            name: 'John Dou',
            mobile: '1111111111',
            email: 'john.dou@email.com',
            symptoms: 'headache',
            bloodGroup: 'B+'
        });
        patientPage.patientsForm.submitButton.click();
        patientPage.patientRow(7).should('have.text', 'John Dou');
    });
});