// Site-wide values. Edit here and they update everywhere.

export const site = {
  name: 'Adi Odhavji',
  title: 'Adi Odhavji',
  description:
    'Adi, an Architectural Engineering graduate in London, writing Ignition Cycles and building The Carer’s Compass.',

  // Footer: "Currently in: …"
  currentlyIn: 'London',

  substack: {
    publication: 'https://adiodh.substack.com/',
    subscribe: 'https://adiodh.substack.com/subscribe',
  },

  social: [
    { label: 'Substack', href: 'https://substack.com/@adiodh' },
    { label: 'X', href: 'https://x.com/adiodhX' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adi-odhavji-429517249/' },
  ],
} as const;
