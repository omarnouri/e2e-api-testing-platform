describe('Tests API simples', () => {
  
  it('GET - Récupérer les utilisateurs', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.gt(0);
        cy.log(`${response.body.length} utilisateurs récupérés`);
      });
  });

  it('POST - Créer un utilisateur', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/users', {
      name: 'Jean Dupont',
      email: 'jean@test.com'
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      cy.log(`Utilisateur créé avec ID: ${response.body.id}`);
    });
  });

  it('GET - Vérifier un utilisateur spécifique', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name');
        cy.log(`Utilisateur trouvé: ${response.body.name}`);
      });
  });
});