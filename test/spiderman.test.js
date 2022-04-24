// Prueba 1 del ejercicio 2 de la weekly mission 3

const Spiderman = require('./../app/spiderman');

describe("unit test for spiderman class", () => {
    test('1) create an spiderman object', () => {
      const tobbyMaguire = new Spiderman('Peter Parker', 45, 'Tobias Vincent Maguire', ['Spiderman', 'Spiderman 2', 'Spiderman 3'], 'Sony');
      expect(tobbyMaguire.name).toBe('Peter Parker');
      expect(tobbyMaguire.age).toBe(45);
      expect(tobbyMaguire.actor).toBe('Tobias Vincent Maguire');
      expect(tobbyMaguire.movies).toEqual(expect.arrayContaining(tobbyMaguire.movies));
      expect(tobbyMaguire.studio).toBe('Sony');
    });
    test('2) getInfo method', () => {
        const tobbyMaguire = new Spiderman('Peter Parker', 45, 'Tobias Vincent Maguire', ['Spiderman', 'Spiderman 2', 'Spiderman 3'], 'Sony');
        expect(tobbyMaguire.getInfo()).toBe("Hey, I'm Tobias Vincent Maguire from Sony studios.");
    })
  });