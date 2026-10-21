window.PF = {
  name: 'Filip Ćorić',
  role: 'UI/UX & Web Designer',
  email: 'filipnote4@gmail.com',
  phone: '063 / 7864 - 359',
  phoneHref: 'tel:+381637864359',
  ig: '@coric_filip7',
  igHref: 'https://instagram.com/coric_filip7',
  availability: 'Available for new projects',
  reply: 'I usually reply within 24 hours',
  portrait: 'assets/img/portrait.webp',
  projects: [
    {
      key: 'easyfly', name: 'EasyFly', kind: 'Private aviation · iOS app', caseUrl: 'https://filipcoric10.github.io/easyflycasestudy/',
      line: 'Booking a private jet in a few taps, from the first search to the boarding pass.',
      tags: ['UX design', 'UI design', 'Mobile app'],
      tint: '#141210', tintSoft: '#1d1a16', ink: '#f2e6cf', accent: '#c9a45c',
      cover: ['assets/img/work/easyfly-0.webp', 'assets/img/work/easyfly-4.webp', 'assets/img/work/easyfly-6.webp']
    },
    {
      key: 'velo', name: 'Velo', kind: 'Self-driving rides · iOS app', caseUrl: 'https://filipcoric10.github.io/velocasestudy/',
      line: 'Hailing a car with no driver, with every step of the ride made easy to trust.',
      tags: ['UX design', 'UI design', 'Mobile app'],
      tint: '#1f44e0', tintSoft: '#e8edfd', ink: '#ffffff', accent: '#1f44e0',
      cover: ['assets/img/work/velo-4.webp', 'assets/img/work/velo-43.webp', 'assets/img/work/velo-54.webp']
    },
    {
      key: 'fit', name: 'Fit Journey', kind: 'Fitness & nutrition · iOS app', caseUrl: 'https://filipcoric10.github.io/fitjourneycasestudy/',
      line: 'Workouts, meals and progress in one calm daily plan, with a coach in your pocket.',
      tags: ['UX design', 'UI design', 'Mobile app'],
      tint: '#15893f', tintSoft: '#e7f4ec', ink: '#ffffff', accent: '#15893f',
      cover: ['assets/img/work/fit-11.webp', 'assets/img/work/fit-28.webp', 'assets/img/work/fit-32.webp']
    }
  ],
  sites: [
    { name: 'Batika Tennis Club', line: 'Court booking online, instead of by phone.', url: 'https://batiktennisclub.online/', host: 'batiktennisclub.online' },
    { name: 'Team Vulkanizer TJ', line: 'A first website, with service packages priced by crew size.', url: 'https://filipcoric10.github.io/vulkanizertj/', host: 'vulkanizertj' },
    { name: 'Lokomoto Centar', line: 'A two-day training programme, 40% more attendees.', url: 'https://filipcoric10.github.io/lokomotocentar/', host: 'lokomotocentar' }
  ],
  quotes: [
    { text: 'Demand for the training programme rose by 40% once the site went live.', name: 'Ana Petrović', role: 'Physiotherapist, Lokomoto Centar', photo: 'assets/img/people/p-ana.webp' },
    { text: 'Elegant, and it put us ahead of the competition on bookings. The site even won site of the month.', name: 'Marko Jovanović', role: 'Club owner, Batika Tennis Club', photo: 'assets/img/people/p-marko.webp' },
    { text: 'A far closer relationship with our customers. The before and after transitions are what they talk about.', name: 'Timotije Josilović', role: 'Garage owner, Team Vulkanizer TJ', photo: 'assets/img/people/p-timotije.webp' }
  ],
  stats: [
    { n: '24–48h', l: 'to launch a website' },
    { n: '+40%', l: 'training attendance after launch, Lokomoto Centar' },
    { n: '1–2 mo', l: 'from idea to a finished app' }
  ]
};
window.dispatchEvent(new Event('pf-ready'));
