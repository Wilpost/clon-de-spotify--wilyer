const colors = {
  slateblue: '#1b0e40',
  sky: '#4fb3cd',
  verane: '#9d6b5c',
  aura: '#73c9',
  saura: '#62438f',
  morgan: '#984',
  trini: '#a9cd',
  redFly: '#7dc3',
  crrilight: '#c8a2',
  veranno: '#a42'
}

export const playlist = [
  {
    id: '1',
    albumId: 1,
    title: '',
    color: colors.verane,
    cover:
      'https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353',
    artists: ['NoSpirit', 'Casiio']
  },
  {
    id: '2',
    albumId: 2,
    title: 'Lo-Fi Chill Session',
    color: colors.green,
    cover:
      'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    artists: ['Kupla', 'Blue Fox']
  },
  {
    id: '3',
    albumId: 3,
    title: 'Study Session',
    color: colors.crrilight,
    cover: 'https://f4.bcbits.com/img/a1435058381_65.jpg',
    artists: ['Tenno', 'xander', 'Team Astro']
  },
  {
    id: '4',
    albumId: 4,
    title: 'Blue Note Study Time',
    color: colors.morgan,
    cover: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    artists: ['Raimu', 'Yasumu']
  },
  {
    id: '5',
    albumId: 5,
    title: 'Chau Saura Session',
    color: colors.sky,
    cover: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    artists: ['Chau Saura', 'amies', 'kyu']
  },
  {
    id: '6',
    albumId: 6,
    title: 'Like a Necessity',
    color: colors.redFly,
    cover: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    artists: ['WFS', 'Nadav Cohen']
  }
]

export const songs = [
  {
    id: '1',
    albumId: 1,
    title: 'Chill Lo-Fi Music',
    color: colors.verane,
    cover:
      'https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353',
    sound: '../public/musics/audio1.mp3',
    artists: ['NoSpirit', 'Casiio']
  },
  {
    id: '2',
    albumId: 2,
    title: 'Lo-Fi Chill Session',
    color: colors.slateblue,
    cover:
      'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    sound: '../public/musics/audio2.mp3',
    artists: ['Kupla', 'Blue Fox']
  },
  {
    id: '3',
    albumId: 3,
    title: 'Study Session',
    color: colors.morgan,
    cover: 'https://f4.bcbits.com/img/a1435058381_65.jpg',
    sound: '../public/musics/audio3.mp3',
    artists: ['Tenno', 'xander', 'Team Astro']
  },
  {
    id: '4',
    albumId: 4,
    title: 'Blue Note Study Time',
    color: colors.sky,
    cover: 'https://f4.bcbits.com/img/a1962013209_16.jpg',
    sound: '../public/musics/audio4.mp3',
    artists: ['Raimu', 'Yasumu']
  },
  {
    id: '5',
    albumId: 5,
    title: 'Chau Saura Session',
    color: colors.saura,
    cover: 'https://f4.bcbits.com/img/a2793859494_16.jpg',
    sound: '../public/musics/audio5.mp3',
    artists: ['Chau Saura', 'amies', 'kyu']
  },
  {
    id: '6',
    albumId: 6,
    title: 'Like a Necessity',
    color: colors.crrilight,
    cover: 'https://f4.bcbits.com/img/a0363730459_16.jpg',
    sound: '../public/musics/audio6.mp3',
    artists: ['WFS', 'Nadav Cohen']
  }
]
