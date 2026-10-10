const exhibits = [
  {
    id: 'texting', icon: '📱', wing: 'Texting & SMS', title: 'The Unli-Text Revolution',
    badge: 'UNLI-TEXT ERA', domain: 'COMMUNICATION', tag: 'Always connected', color: '#ff5fa2',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    alt: 'A person holding a phone while messaging',
    blurb: 'A keypad, a load card, and a barkada group chat that never slept.',
    intro: 'Before group chats lived in apps, Filipinos made connection a daily ritual with prepaid load, quick texts, and ingenious shorthand.',
    then: 'Prepaid SIMs and unlimited texting plans made SMS the country’s everyday social network. Text clans kept friends in constant touch.',
    now: 'Messaging apps carry group conversations, voice notes, photos, and calls over mobile data and fast 5G connections.',
    impact: 'Made mobile communication part of everyday Filipino life.', curator: 0,
    facts: ['The Philippines was widely known as the “texting capital of the world” in the early 2000s.', 'Load sharing and “pasaload” turned prepaid credit into a social currency.'],
    artifacts: [{ emoji: '📟', name: 'Nokia keypad phone', note: 'A pocket-sized lifeline with a famously resilient battery.' }, { emoji: '🎫', name: 'Prepaid load card', note: 'Scratch, reveal, and carefully type the code.' }],
    gallery: [{ src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85', caption: 'A message away', year: '2000s' }],
  },
  {
    id: 'friendster', icon: '💻', wing: 'Friendster & Web', title: 'Your Friendster Profile',
    badge: 'SOCIAL WEB', domain: 'ONLINE LIFE', tag: 'Testimonials & glitter', color: '#3aa7ff',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    alt: 'A laptop on a desk in a warm workspace',
    blurb: 'Custom layouts, profile songs, and testimonials made a page feel like home.',
    intro: 'The early social web was something you built yourself: a profile full of favorite songs, top friends, and messages from your barkada.',
    then: 'Friendster profiles were customized with HTML, glittery backgrounds, autoplay songs, and carefully written testimonials.',
    now: 'Social profiles are mobile-first streams where creators, communities, and friends share in real time.',
    impact: 'Made online identity personal, expressive, and unmistakably Filipino.', curator: 1,
    facts: ['Profile comments and testimonials made friendship visible on the page.', 'Many users learned basic HTML just to personalize a profile.'],
    artifacts: [{ emoji: '🖥️', name: 'Internet café login', note: 'A shared computer, a timed session, and a familiar blue profile page.' }, { emoji: '🎵', name: 'Profile song', note: 'One favorite track set the mood for every visitor.' }],
    gallery: [{ src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85', caption: 'The social web', year: '2007' }],
  },
  {
    id: 'opm', icon: '🎸', wing: 'OPM & Music', title: 'OPM on Repeat',
    badge: 'SOUNDTRACK', domain: 'MUSIC & MEDIA', tag: 'From radio to streaming', color: '#ffc93c',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85',
    alt: 'A singer performing with a microphone on stage',
    blurb: 'Rock anthems, radio dedications, and songs everyone knew by heart.',
    intro: 'Music moved between FM radio, burned CDs, music channels, and live gigs—soundtracking school, commutes, and late-night dedications.',
    then: 'OPM bands and pop-rock anthems filled radio countdowns, gig venues, music channels, and personal CD collections.',
    now: 'Streaming playlists, viral releases, and P-pop fandoms bring local music to listeners around the world.',
    impact: 'Kept local music at the center of shared Filipino memories.', curator: 2,
    facts: ['Radio dedications and music-video countdowns shaped how friends discovered new songs.', 'Burned mix CDs were a popular way to share a personal soundtrack.'],
    artifacts: [{ emoji: '💿', name: 'Burned mix CD', note: 'A hand-labeled collection made for a friend.' }, { emoji: '🎙️', name: 'Radio dedication', note: 'A song request sent out over the airwaves.' }],
    gallery: [{ src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85', caption: 'Live music, shared memories', year: '2000s' }],
  },
  {
    id: 'lan', icon: '🕹️', wing: 'LAN Shops & Games', title: 'One More Round',
    badge: 'AFTER-SCHOOL HUB', domain: 'GAMES & COMMUNITY', tag: 'Barkada at the LAN shop', color: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85',
    alt: 'A colorful gaming setup',
    blurb: 'Rows of monitors, shared strategies, and “last game na” after class.',
    intro: 'Internet cafés became neighborhood gathering places where classmates formed teams, shared computer time, and learned together.',
    then: 'LAN shops offered affordable access to multiplayer PC games, school research, and the wider web.',
    now: 'Gaming communities meet across consoles, PCs, mobile phones, and livestream platforms.',
    impact: 'Turned neighborhood internet cafés into social spaces and gaming hubs.', curator: 0,
    facts: ['LAN means local area network: nearby computers connected for multiplayer play.', 'Internet cafés served as both gaming venues and shared computer labs.'],
    artifacts: [{ emoji: '🖱️', name: 'Ball mouse', note: 'A well-used mouse on a borrowed computer.' }, { emoji: '⌛', name: 'One-hour session', note: 'A timer that made every match count.' }],
    gallery: [{ src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85', caption: 'The neighborhood LAN shop', year: '2000s' }],
  },
  {
    id: 'community', icon: '📰', wing: 'People & Community', title: 'A Nation in Conversation',
    badge: 'SHARED MOMENTS', domain: 'SOCIETY & CULTURE', tag: 'Stories that stay with us', color: '#ff8a3d',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85',
    alt: 'A crowd gathered in a public square',
    blurb: 'Public events, neighborhood stories, and a changing digital landscape.',
    intro: 'The decade connected major public events with everyday stories, showing how media and technology could bring people into conversation.',
    then: 'SMS chains, radio, television, and early online forums helped people follow and discuss the events shaping the country.',
    now: 'Social media and mobile reporting make information immediate, collaborative, and easier to share widely.',
    impact: 'Showed how communication technologies can amplify public participation.', curator: 1,
    facts: ['Mobile messaging became one of many ways people shared news and organized conversations.', 'Digital archives help preserve personal memories alongside major events.'],
    artifacts: [{ emoji: '📻', name: 'Portable radio', note: 'A familiar source for news, music, and community updates.' }, { emoji: '🗞️', name: 'Daily newspaper', note: 'Headlines read at home, on the commute, and around the neighborhood.' }],
    gallery: [{ src: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85', caption: 'A shared public moment', year: '2000s' }],
  },
]

const friendsterProfiles = [
  { name: 'Mika Santos', short: 'Mika', initials: 'MS', role: 'Text clan organizer', handle: 'mika_heartz_2007', quote: 'Keep smiling, keep texting!', status: 'Busy listening to OPM', memberSince: 'June 2006', hometown: 'Quezon City', about: 'Collecting songs, sending chain messages, and saving every barkada photo.', interests: ['OPM', 'text clans', 'karaoke'], testimonials: [{ from: 'Jessa', text: 'Always has the best songs and the fastest replies.' }, { from: 'Paolo', text: 'Our group chat before group chats existed.' }] },
  { name: 'Paolo Reyes', short: 'Paolo', initials: 'PR', role: 'LAN shop regular', handle: 'pao_lo_rocks', quote: 'One more round?', status: 'Gaming with friends', memberSince: 'February 2007', hometown: 'Manila', about: 'Usually at the computer shop after class. Message me for game night.', interests: ['PC games', 'basketball', 'rock'], testimonials: [{ from: 'Mika', text: 'Never misses a match or a meetup.' }, { from: 'Ingrid', text: 'Knows every shortcut at the computer shop.' }] },
  { name: 'Ingrid Dela Cruz', short: 'Ingrid', initials: 'ID', role: 'OPM playlist curator', handle: 'ingrid_on_repeat', quote: 'This song reminds me of us.', status: 'Making a mix CD', memberSince: 'October 2005', hometown: 'Cebu City', about: 'Radio countdowns, handwritten track lists, and music shared with friends.', interests: ['OPM', 'radio', 'mix CDs'], testimonials: [{ from: 'Paolo', text: 'The soundtrack to every road trip.' }, { from: 'Mika', text: 'Always knows what song to dedicate.' }] },
]

const beforeAfterPairs = [
  { tab: 'Communication', title: 'From keypad taps to pocket studios', caption: 'The ritual changed; staying close did not.', before: { label: 'Unli-text & keypad phones', emoji: '📱', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85' }, after: { label: 'Messaging & 5G', emoji: '📲', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85' } },
  { tab: 'Music', title: 'From radio dedications to streaming', caption: 'Local music travels instantly, while the shared soundtrack lives on.', before: { label: 'Radio & mix CDs', emoji: '💿', img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85' }, after: { label: 'P-pop & playlists', emoji: '🎧', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85' } },
]

const smsDefault = 'D2 na me, wer na u? txt bck asap! <3'
const smsData = {
  txt_clan: 'Text clan g? Load na, see u after class! :)',
  edsa2: 'Forward this to the barkada. Stay safe and keep in touch!',
  gm: 'GM! Have a great day everyone :) Txt bck!',
  jejemon: 'h3L0w p0wZ! m1zz nA k0wH sAuH inYoH! <3',
}

const playlistStations = [
  { tab: 'OPM Rock', title: 'OPM rock throwbacks', type: 'link', url: '' },
  { tab: 'P-pop', title: 'P-pop and modern hits', type: 'link', url: '' },
  { tab: '2000s Mix', title: 'Filipino 2000s favorites', type: 'link', url: '' },
]
const playlistSearch = {
  youtube: 'https://www.youtube.com/results?search_query=2000s+OPM+Filipino+music',
  music: 'https://music.youtube.com/search?q=2000s%20OPM%20Filipino%20music',
}

document.documentElement.dataset.museumDataLoaded = 'true'

// This preview dataset replaces the referenced js/data.js, which was not included with the attachments.
for (const exhibit of exhibits) {
  if (!Array.isArray(exhibit.facts) || !Array.isArray(exhibit.artifacts) || !Array.isArray(exhibit.gallery)) {
    throw new Error(`Incomplete exhibit data: ${exhibit.id}`)
  }
}
