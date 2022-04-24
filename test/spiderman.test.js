// Prueba 1 del ejercicio 2 de la weekly mission 3

const Spiderman = require('./../app/spiderman');

describe("unit test for spiderman class", () => {
    test('1) create an spiderman object', () => {
      const tobbyMaguire = new Spiderman('Peter Parker', 45, 'Tobias Vincent Maguire', ['Spiderman', 'Spiderman 2', 'Spiderman 3'], 'Sony');
      expect(tobbyMaguire.name).toBe('Peter Parker');
    });
  })