const request = require('supertest');
const app = require('../index');

describe('Pruebas de la aplicación', () => {
  test('Debe responder con mensaje de inicio', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('App funcionando');
  });

  test('Debe sumar correctamente dos números', async () => {
    const res = await request(app).get('/suma?a=2&b=3');
    expect(res.body.resultado).toBe(5);
  });
});
