const image = (name) => `/images/portfolio/${name}`

export const portfolios = {
  Weddings: {
    description: 'Love stories, traditional ceremonies, bridal portraits, and the details that make each celebration personal.',
    images: [
      { src: image('weddings/couple-kiss.jpeg'), alt: 'Couple sharing a kiss in a studio portrait' },
      { src: image('weddings/couple-embrace.jpeg'), alt: 'Couple embracing in formal attire' },
      { src: image('weddings/couple-studio.jpeg'), alt: 'Couple in an elegant studio portrait' },
      { src: image('weddings/traditional-closeup.jpeg'), alt: 'Traditional wedding couple close-up' },
      { src: image('weddings/traditional-embrace.jpeg'), alt: 'Traditional wedding couple embracing' },
      { src: image('weddings/bridal-profile.jpeg'), alt: 'Bride in green traditional attire' },
      { src: image('weddings/bridal-seat.jpeg'), alt: 'Bridal portrait seated in traditional attire' },
      { src: image('weddings/bridal-green.jpeg'), alt: 'Bride wearing a green traditional look' },
      { src: image('weddings/bridal-details.jpeg'), alt: 'Close-up bridal accessories and jewellery' },
      { src: image('weddings/bridal-story.jpeg'), alt: 'Bridal fashion story collage' },
      { src: image('weddings/brown-traditional.jpeg'), alt: 'Couple in brown traditional wedding attire' },
      { src: image('weddings/black-traditional.jpeg'), alt: 'Couple in black traditional wedding attire' },
    ],
  },
  Corporate: {
    description: 'Polished portraits and personal branding with presence.',
    images: [
      { src: image('corporate-yellow.jpeg'), alt: 'Professional studio portrait in yellow jacket' },
      { src: image('corporate-blue.jpeg'), alt: 'Professional fashion portrait in blue suit' },
      { src: image('corporate-portrait.jpeg'), alt: 'Professional portrait in a neutral suit' },
      { src: image('corporate-suit.jpeg'), alt: 'Professional full length suit portrait' },
    ],
  },
  Birthdays: {
    description: 'Portraits full of personality for every milestone worth remembering.',
    images: [
      { src: image('birthday-phone.jpeg'), alt: 'Birthday portrait holding a phone' },
      { src: image('birthday-floral.jpeg'), alt: 'Birthday portrait in a floral dress' },
      { src: image('birthday-full.jpeg'), alt: 'Full length birthday portrait' },
      { src: image('birthday-editorial.jpeg'), alt: 'Editorial birthday portrait' },
    ],
  },
  Events: {
    description: 'Portraits, colour, and the atmosphere that make an occasion memorable.',
    galleryUrl: 'https://benwalkerphotography20.pixieset.com/eyesofwalker-1/',
    images: [
      { src: image('events/blue-portrait.jpeg'), alt: 'Guest in blue traditional attire outdoors' },
      { src: image('events/blue-and-gold.jpeg'), alt: 'Two guests in colourful traditional attire' },
      { src: image('events/blue-garden.jpeg'), alt: 'Guest in blue traditional attire in a garden' },
      { src: image('events/red-garden-profile.jpeg'), alt: 'Guest in red traditional attire by a tree' },
      { src: image('events/red-garden-detail.jpeg'), alt: 'Guest in red traditional attire outdoors' },
      { src: image('events/red-garden-smile.jpeg'), alt: 'Smiling guest in red traditional attire' },
    ],
  },
}
