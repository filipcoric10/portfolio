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
      tint: '#14160f', tintSoft: '#1d2014', ink: '#ffffff', accent: '#c8f031',
      cover: ['assets/img/work/fitj-0.webp', 'assets/img/work/fitj-1.webp', 'assets/img/work/fitj-2.webp']
    }
  ],
  sites: [
    { name: 'Batika Tennis Club', line: 'Courts booked online, with no calls or trips to the club.', url: 'https://batiktennisclub.online/', host: 'batiktennisclub.online', shot: 'assets/img/work/site-batika.webp', panel: '#e8ecdf', alt: 'Batika Tennis Club homepage with an aerial view of the clay court' },
    { name: 'Team Vulkanizer TJ', line: 'A first website, with service packages priced by crew size.', url: 'https://filipcoric10.github.io/vulkanizertj/', host: 'vulkanizertj', shot: 'assets/img/work/site-vulkanizer.webp', panel: '#1c1c1e', alt: 'Team Vulkanizer TJ homepage with a black car in a dark garage' },
    { name: 'NULANULA', line: 'Independent publisher of books and magazines on culture and sport.', url: 'https://filipcoric10.github.io/nulanula/', host: 'nulanula', shot: 'assets/img/work/site-nulanula.webp', panel: '#f6dcdc', alt: 'NULANULA homepage with the 0:0 logo and three authors on a sofa' }
  ],
  quotes: [
    { text: 'The redesign gave our shop the presence it deserved. Readers now browse longer, open more titles and buy more, in print and online. I couldn\'t be happier with the result.', name: 'Uroš Jovičić', role: 'Owner, NULANULA', photo: 'assets/img/work/p-uros.webp', noPhoto: false },
    { text: 'Our league results used to live in a notebook. Now every player sees the score as soon as a match ends, and I update it in seconds from the admin panel. The players love it, and they\'ve never played with more passion.', name: 'Stefan Vukotić', role: 'Club owner, Tennis Club Zabrezje', photo: 'assets/img/work/p-stefan.webp', noPhoto: false },
    { text: 'Three of the most demanding briefs on the course, each with its own type, colour and character. Velo was the strongest app in the class.', name: 'Nauči Dizajn', role: 'Mentors, UI/UX course', photo: 'assets/img/work/p-naucidizajn.webp', noPhoto: false }
  ],
  stats: [
    { n: '3', l: 'websites live for local businesses' },
    { n: '+40%', l: 'training attendance after launch' },
    { n: '3', l: 'top course briefs at Nauči Dizajn' }
  ]
};
window.dispatchEvent(new Event('pf-ready'));
