const request = require('supertest');
const app = require('../index');

describe('Pruebas de la aplicación', () => {
  test('Debe responder con mensaje de inicio', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('App funcionando');
    //expect(res.text).toContain('Fallo intencional'); // Esto hará que el test falle
  });

  test('Debe sumar correctamente dos números', async () => {
    const res = await request(app).get('/suma?a=2&b=3');
    expect(res.body.resultado).toBe(5);
    //expect(res.body.resultado).toBe(10); // Fallará porque la suma real es 5
  });
});
