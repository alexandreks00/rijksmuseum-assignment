/// <reference types="cypress" />

describe('API Test', () => {
  const authorNames = ['Jacques Callot', 'Cornelis Vreedenburgh', 'Ed van der Elsken'];

  it('Get the number of artObjects from a randomAuthor', () => {
    const randomAuthorName = authorNames[Math.floor(Math.random() * authorNames.length)];

    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseURL')}?key=0fiuZFh4&involvedMaker=${encodeURIComponent(randomAuthorName)}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('artObjects').and.to.be.an('array');

      cy.log(`API Response for ${randomAuthorName}:`, response.body);

      const artObjectsArray = response.body.artObjects;
      expect(artObjectsArray.length).to.be.greaterThan(0);
      cy.log(`Number of Art Objects: ${artObjectsArray.length}`);
    });
  });

  it('Randomly select an objectNumber to be passed as a query param in the next request', () => {
    const randomAuthorName = authorNames[Math.floor(Math.random() * authorNames.length)];

    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseURL')}?key=0fiuZFh4&involvedMaker=${encodeURIComponent(randomAuthorName)}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('artObjects').and.to.be.an('array');

      cy.log(`API Response for ${randomAuthorName}:`, response.body);

      const artObjectsArray = response.body.artObjects;
      const randomArtObject = artObjectsArray[Math.floor(Math.random() * artObjectsArray.length)];
      const randomObjectNumber = randomArtObject.objectNumber;

      cy.log(`Randomly selected objectNumber: ${randomObjectNumber}`);
    });
  });

  it('Get the title from the randomly selected artObject', () => {
    const randomAuthorName = authorNames[Math.floor(Math.random() * authorNames.length)];

    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseURL')}?key=0fiuZFh4&involvedMaker=${encodeURIComponent(randomAuthorName)}`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('artObjects').and.to.be.an('array');

      cy.log(`API Response for ${randomAuthorName}:`, response.body);

      const artObjectsArray = response.body.artObjects;
      const randomArtObject = artObjectsArray[Math.floor(Math.random() * artObjectsArray.length)];
      const randomObjectNumber = randomArtObject.objectNumber;

      cy.log(`Randomly selected objectNumber: ${randomObjectNumber}`);

      cy.request({
        method: 'GET',
        url: `${Cypress.env('baseURL')}/${randomObjectNumber}?key=0fiuZFh4`,
      }).then((secondResponse) => {
        expect(secondResponse.status).to.equal(200);
        expect(secondResponse.body).to.have.property('artObject');
        cy.log(`API Response for objectNumber ${randomObjectNumber}:`, secondResponse.body);

        const title = secondResponse.body.artObject.title;
        cy.log(`Title of the art object: ${title}`);
      });
    });
  });
});

describe('API Test for Rijksmuseum - Level 0', () => {
  it('should retrieve level information from z0', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseURL')}/BK-16676/tiles?key=0fiuZFh4`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body);

      const responseBody = JSON.parse(response.body);
      const firstLevel = responseBody.levels[0];
      cy.log(firstLevel.name, firstLevel.width, firstLevel.height);
    });
  });
});
