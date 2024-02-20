import { http, HttpResponse, delay } from 'msw';

// Describe the network
export const handlers = [
  http.get('http://localhost:3000/endpoint', async () => {
    return HttpResponse.json([
      { name: 'Chocolate', imagePath: '/images/chocolate.png' },
      { name: 'Vanilla', imagePath: '/images/vanilla.png' },
    ]);
  }),
  http.post('http://localhost:3000/order', async () => {
    await delay(400); // wait for 400ms to simulate a real server
    return HttpResponse.json({ orderNumber: 12345 }, { status: 201 });
  }),
];
