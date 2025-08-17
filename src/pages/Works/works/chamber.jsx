const chamber = {
  title: "Chamber Music",
  url: "chamber",
  works: [
    {
      title: "Down Two Flights",
      year: 2025,
      ensemble: "Alto Flute, Oboe, Bass Clarinet, Marimba, and Piano",
      selected: false,
    },
    {
      title: "The All Is One",
      year: 2025,
      ensemble: "Flute, Bass Clarinet, Bassoon, Piano, Violin, Viola, and Cello",
      selected: true,
      performances: [{
        ensemble:"the Talea Ensemble",
        year:2025,
        url: "https://dylanneedleman.bandcamp.com/track/the-all-is-one",
      }]
    },
    {
      title: "A Shard",
      year: 2024,
      ensemble: "String Quartet",
      selected: true,
      performances:[{
        ensemble:"the Lydian String Quartet",
        year:2024,
        url:"https://dylanneedleman.bandcamp.com/track/a-shard"
      }]
    },
    {
      title: "The Chambers of the Sea",
      year: 2023,
      selected: true,
      text: {
        work: "The Love Song of J. Alfred Prufrock",
        author: "T.S. Eliot",
      },
      ensemble: "Harmonica, Baritone, and Live Electronics",
      url: "https://dylanneedleman.bandcamp.com/track/the-chambers-of-the-sea"
    },
    {
      title: "The Valley of Nis",
      year: 2022,
      ensemble: "Clarinet, Trombone, Harp, Double Bass, and Percussion",
      selected: false,
    },
    {
      title: "Cycle",
      year: 2021,
      ensemble: "String Quartet",
      selected: true,
      performances:[{
        ensemble:"Robin Zeh, Rachel Handman, Marka Gustavsson, and Yavi Bond",
        year:2021,
        url:"https://dylanneedleman.bandcamp.com/track/cycle"
      }]
    },
    {
      title: "The Bells",
      year: 2021,
      text: {
        work: "The Bells",
        author: "Edgar Allan Poe",
      },
      ensemble: "three Bass Voices",
      selected: true,
      url: "https://dylanneedleman.bandcamp.com/track/the-bells",
    }
  ]
}

export default chamber
