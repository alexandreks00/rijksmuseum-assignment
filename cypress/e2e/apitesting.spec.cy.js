/// <reference types="cypress" />

describe('API Test', () => {
  // List of author names
  const authorNames = ['Jacques Callot', 'Cornelis Vreedenburgh', 'Ed van der Elsken'];

  it('should retrieve data from the API with a random authorName', () => {
    // Get a random authorName from the list
    const randomAuthorName = authorNames[Math.floor(Math.random() * authorNames.length)];

    // Make a request to the API with the random authorName
    cy.request({
      method: 'GET',
      url: `https://www.rijksmuseum.nl/api/nl/collection?key=0fiuZFh4&involvedMaker=${encodeURIComponent(randomAuthorName)}`,
    }).then((response) => {
      // Assertions to ensure the response is successful
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('artObjects').and.to.be.an('array');

      // You can perform additional assertions or log information as needed
      cy.log(`API Response for ${randomAuthorName}:`, response.body);

      // For example, you can check if the artObjects array is not empty
      const artObjectsArray = response.body.artObjects;
      expect(artObjectsArray.length).to.be.greaterThan(0);
      cy.log(`Number of Art Objects: ${artObjectsArray.length}`);

    });
  });
});

/// <reference types="cypress" />

describe('API Test', () => {
  // List of author names
  const authorNames = ['Jacques Callot', 'Cornelis Vreedenburgh', 'Ed van der Elsken'];

  it('should retrieve data from the API with a random authorName and select a random objectNumber', () => {
    // Get a random authorName from the list
    const randomAuthorName = authorNames[Math.floor(Math.random() * authorNames.length)];

    // Make a request to the API with the random authorName
    cy.request({
      method: 'GET',
      url: `https://www.rijksmuseum.nl/api/nl/collection?key=0fiuZFh4&involvedMaker=${encodeURIComponent(randomAuthorName)}`,
    }).then((response) => {
      // Assertions to ensure the response is successful
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('artObjects').and.to.be.an('array');

      // You can perform additional assertions or log information as needed
      cy.log(`API Response for ${randomAuthorName}:`, response.body);

      // For example, select a random objectNumber from the artObjects array
      const artObjectsArray = response.body.artObjects;
      const randomArtObject = artObjectsArray[Math.floor(Math.random() * artObjectsArray.length)];
      const randomObjectNumber = randomArtObject.objectNumber;

      // Log the randomly selected objectNumber
      cy.log(`Randomly selected objectNumber: ${randomObjectNumber}`);
    });
  });
});

/// <reference types="cypress" />

describe('API Test', () => {
  // List of author names
  const authorNames = ['Jacques Callot', 'Cornelis Vreedenburgh', 'Ed van der Elsken'];

  it('should retrieve data from the API with a random authorName and select a random objectNumber', () => {
    // Get a random authorName from the list
    const randomAuthorName = authorNames[Math.floor(Math.random() * authorNames.length)];

    // Make a request to the API with the random authorName
    cy.request({
      method: 'GET',
      url: `https://www.rijksmuseum.nl/api/nl/collection?key=0fiuZFh4&involvedMaker=${encodeURIComponent(randomAuthorName)}`,
    }).then((response) => {
      // Assertions to ensure the response is successful
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('artObjects').and.to.be.an('array');

      // You can perform additional assertions or log information as needed
      cy.log(`API Response for ${randomAuthorName}:`, response.body);

      // Select a random objectNumber from the artObjects array
      const artObjectsArray = response.body.artObjects;
      const randomArtObject = artObjectsArray[Math.floor(Math.random() * artObjectsArray.length)];
      const randomObjectNumber = randomArtObject.objectNumber;

      // Log the randomly selected objectNumber
      cy.log(`Randomly selected objectNumber: ${randomObjectNumber}`);

      // Make a second request to the API using the randomly selected objectNumber
      cy.request({
        method: 'GET',
        url: `https://www.rijksmuseum.nl/api/nl/collection/${randomObjectNumber}?key=0fiuZFh4`,
      }).then((secondResponse) => {
        // Assertions for the second API call
        expect(secondResponse.status).to.equal(200);
        expect(secondResponse.body).to.have.property('artObject');
        
        // Log the response of the second API call
        cy.log(`API Response for objectNumber ${randomObjectNumber}:`, secondResponse.body);
      });
    });
  });
});


/// <reference types="cypress" />

describe('API Test', () => {
  // List of author names
  const authorNames = ['Jacques Callot', 'Cornelis Vreedenburgh', 'Ed van der Elsken'];

  it('should retrieve data from the API with a random authorName and select a random objectNumber', () => {
    // Get a random authorName from the list
    const randomAuthorName = authorNames[Math.floor(Math.random() * authorNames.length)];

    // Make a request to the API with the random authorName
    cy.request({
      method: 'GET',
      url: `https://www.rijksmuseum.nl/api/nl/collection?key=0fiuZFh4&involvedMaker=${encodeURIComponent(randomAuthorName)}`,
    }).then((response) => {
      // Assertions to ensure the response is successful
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('artObjects').and.to.be.an('array');

      // Select a random objectNumber from the artObjects array
      const artObjectsArray = response.body.artObjects;
      const randomArtObject = artObjectsArray[Math.floor(Math.random() * artObjectsArray.length)];
      const randomObjectNumber = randomArtObject.objectNumber;

      // Log the randomly selected objectNumber
      cy.log(`Randomly selected objectNumber: ${randomObjectNumber}`);

      // Make a request to the API with the randomObjectNumber
      cy.request({
        method: 'GET',
        url: `https://www.rijksmuseum.nl/api/nl/collection/${randomObjectNumber}?key=0fiuZFh4`,
      }).then((secondResponse) => {
        // Assertions for the second API call
        expect(secondResponse.status).to.equal(200);
        expect(secondResponse.body).to.have.property('artObject');
        cy.log(`API Response for objectNumber ${randomObjectNumber}:`, secondResponse.body);

        // Extract the title from the response
        const title = secondResponse.body.artObject.title;

        // Log the title to the console
        cy.log(`Title of the art object: ${title}`);
      });
    });
  });
});

// Assuming you have the Cypress library properly installed and set up

describe('API Test for Rijksmuseum - Level 0', () => {
  it('should retrieve level information from z0', () => {
      cy.request({
          method: 'GET',
          url: 'https://www.rijksmuseum.nl/api/nl/collection/BK-16676/tiles?key=0fiuZFh4',
      }).then((response) => {
          // Assert that the response status is 200 OK
          expect(response.status).to.eq(200);
          cy.log(response.body);
          // Extract level information from the response body
          const responseBody = JSON.parse(response.body);
        

          const firstLevel = responseBody.levels[0];
          cy.log(firstLevel.name, firstLevel.width, firstLevel.height);
         
      });
  });
});






