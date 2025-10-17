const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('🚀 Hello, CI/CD World!'));

test('GET / should return greeting', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toContain('Hello, CI/CD World');
});
