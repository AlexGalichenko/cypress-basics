describe('patient', () => {
    it('create new patient', () => {
        cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');
        cy.get('.patient-operations > .e-control').click();
        cy.get('input[name=Name]').type('Jonh Dou');
        cy.get('#BloodGroup > .e-float-input').click();
        cy.get('[data-value="B+"]').click();
        cy.get('input[name=Email]').type('johh.dou@email.com');
        cy.get('input[name=Symptoms]').type('headache');
        cy.get('#PatientMobile').type('1111111111');
        cy.get('.new-patient-dialog button.e-primary').click();
        cy.get('[aria-rowindex="7"] > .e-templatecell').should('have.text', 'Jonh Dou');
    });
});