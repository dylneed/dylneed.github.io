import downTwoFlightsPdf from "../../../assets/works/down-two-flights.pdf"
import downTwoFlightsMidiMp3 from "../../../assets/works/down-two-flights-midi.mp3"
import theAllIsOnePdf from "../../../assets/works/the-all-is-one.pdf"
import theAllIsOneTaleaMp3 from "../../../assets/works/the-all-is-one-talea.mp3"
import aShardPdf from "../../../assets/works/a-shard.pdf"
import aShardLydianMp3 from "../../../assets/works/a-shard-lydian.mp3"
import theChambersOfTheSeaPdf from "../../../assets/works/the-chambers-of-the-sea.pdf"
import theChambersOfTheSeaSelfMp3 from "../../../assets/works/the-chambers-of-the-sea-self.mp3"
import theValleyOfNisPdf from "../../../assets/works/the-valley-of-nis.pdf"
import theValleyOfNisMidiMp3 from "../../../assets/works/the-valley-of-nis-midi.mp3"
import cyclePdf from "../../../assets/works/cycle.pdf"
import cycle2021Mp3 from "../../../assets/works/cycle-2021.mp3"
import theBellsPdf from "../../../assets/works/the-bells.pdf"
import theBellsSelfMp3 from "../../../assets/works/the-bells-self.mp3"
import fillARoomWithSoundPdf from "../../../assets/works/you-have-to-fill-a-room-with-sound.pdf"
import fillARoomWithSoundLydianMp3 from "../../../assets/works/you-have-to-fill-a-room-with-sound-lydian.mp3"
import somethingWasSmallPdf from "../../../assets/works/something-was-small.pdf"
// import somethingWasSmallHingeMp3 from "../../../assets/works/something-was-small-hinge.mp3"
// import lesPontPdf from "../../../assets/works/les-ponts.pdf"
// import lesPontsTelemaqueMp3 from "../../../assets/works/les-ponts-telemaque.mp3"


const chamber = {
  title: "Chamber Music",
  url: "chamber",
  works: [
//     {
//       title: "Les Ponts",
//       year: 2026,
//       ensemble: "Chamber Ensemble",
//       selected: true,
//       pdf: lesPontsPdf,
//       text: {
//         work: "Les Ponts",
//         author: "Arthur Rimbaud",
//       },
//       performances: [{
//         ensemble: "Ensemble Télémaque",
//         year: 2026,
// //         mp3: lesPontsTelemaqueMp3,
// //        bandcampUrl: "https://dylanneedleman.bandcamp.com/track/les-ponts"
//       }]
//     },
    {
      title: "Something Was Small",
      year: 2026,
      ensemble: "Baritone Saxophone, Electric Guitar, Percussion, and Piano",
      selected:true,
      pdf: somethingWasSmallPdf,
      performances: [
//         {
//         ensemble: "the HINGE Quartet",
//         year: 2026,
//         mp3: somethingWasSmallHingeMp3,
//         bandcampUrl: "https://dylanneedleman.bandcamp.com/track/something-was-small"
//       }
      ]
    },
    {
      title: "You Have to Fill a Room with Sound",
      year: 2025,
      ensemble: "String Quartet",
      selected: true,
      pdf: fillARoomWithSoundPdf,
      performances: [{
        ensemble:"the Lydian String Quartet",
        year:2025,
        mp3: fillARoomWithSoundLydianMp3,
        bandcampUrl: "https://dylanneedleman.bandcamp.com/track/you-have-to-fill-a-room-with-sound",
      }]
    },
    {
      title: "Down Two Flights",
      year: 2025,
      ensemble: "Alto Flute, Oboe, Bass Clarinet, Marimba, and Piano",
      selected: false,
      pdf: downTwoFlightsPdf,
      performances:[{
        midiRealization:true,
        mp3:downTwoFlightsMidiMp3,
      }]
    },
    {
      title: "The All Is One",
      year: 2025,
      ensemble: "Flute, Bass Clarinet, Bassoon, Piano, Violin, Viola, and Cello",
      selected: true,
      pdf: theAllIsOnePdf,
      performances: [{
        ensemble:"the Talea Ensemble",
        year:2025,
        mp3: theAllIsOneTaleaMp3,
        bandcampUrl: "https://dylanneedleman.bandcamp.com/track/the-all-is-one",
      }]
    },
    {
      title: "A Shard",
      year: 2024,
      ensemble: "String Quartet",
      selected: true,
      pdf: aShardPdf,
      performances:[{
        ensemble:"the Lydian String Quartet",
        year:2024,
        mp3: aShardLydianMp3,
        bandcampUrl:"https://dylanneedleman.bandcamp.com/track/a-shard"
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
      pdf: theChambersOfTheSeaPdf,
      performances:[{
        ensemble:"Dylan Needleman",
        year: 2023,
        mp3: theChambersOfTheSeaSelfMp3,
        bandcampUrl: "https://dylanneedleman.bandcamp.com/track/the-chambers-of-the-sea",
      }]
    },
    {
      title: "The Valley of Nis",
      year: 2022,
      ensemble: "Clarinet, Trombone, Harp, Double Bass, and Percussion",
      selected: false,
      pdf: theValleyOfNisPdf,
      performances:[{
        midiRealization:true,
        mp3:theValleyOfNisMidiMp3,
      }]
    },
    {
      title: "Cycle",
      year: 2021,
      ensemble: "String Quartet",
      selected: true,
      pdf: cyclePdf,
      performances:[{
        ensemble:"Robin Zeh, Rachel Handman, Marka Gustavsson, and Yavi Bond",
        year:2021,
        mp3:cycle2021Mp3,
        bandcampUrl:"https://dylanneedleman.bandcamp.com/track/cycle"
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
      pdf: theBellsPdf,
      url: "https://dylanneedleman.bandcamp.com/track/the-bells",
      performances:[{
        ensemble:"Dylan Needleman",
        year:2021,
        mp3: theBellsSelfMp3,
        bandcampUrl:"https://dylanneedleman.bandcamp.com/track/the-bells"
      }]
    }
  ]
}

export default chamber
