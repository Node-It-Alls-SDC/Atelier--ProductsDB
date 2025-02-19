module.exports = {
  config: {
    target: 'http://127.0.0.1:3000',
    phases: [
      {
        duration: 20,
        arrivalRate: 5,
        rampTo: 10,
        name: 'warm-up'
      },
      {
        duration: 30,
        arrivalRate: 10,
        rampTo: 20,
        name: 'ramp to peak'
      },
      {
        duration: 120,
        arrivalRate: 20,
        name: 'sustain peak load'
      },
      {
        duration: 30,
        arrivalRate: 20,
        rampTo: 30,
        name: 'stress API'
      }
    ],
  },
  scenarios: [
    {
      flow: [
        {
          loop: [
            { get: { url: '/products' } },
            { get: { url: '/products/900000' } },
            { get: { url: '/products/900000/styles' } },
            { get: { url: '/products/900000/related' } }
          ],
          count: 50
        },
      ],
    },
  ],
}
