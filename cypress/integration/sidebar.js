
const navigateViaSidebar = ({label, title}) => {
  it(`should change pages when clicking on ${label} sidebar link`, () => {
    const target = cy.get(`.sidebar-link.${label.toLowerCase()} > a`);
    target.click();
    target.should('have.class', 'active');
    cy.get('.sidebar--nav').find('.active')
      .should('have.length', 1);
    cy.get('.content-container--title')
      .should('contain', title);
  });
};

describe('sidebar navigation', () => {

  before(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should initially load the events page', () => {
    cy.get('.sidebar-link.events > a')
      .should('have.class', 'active');
    cy.get('.sidebar--nav').find('.active')
      .should('have.length', 1);
    cy.get('.content-container--title')
      .should('contain', 'Create Event');
  });

  [
    {
      label: 'Dashboard',
      title: 'Dashboard',
    },{
      label: 'Sessions',
      title: 'Sessions',
    },{
      label: 'Files',
      title: 'Files',
    },{
      label: 'Conversations',
      title: 'Conversations',
    },{
      label: 'Settings',
      title: 'Settings',
    }
  ].forEach(navigateViaSidebar);

});
