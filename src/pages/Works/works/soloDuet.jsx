import theSinkingCallPdf from "../../../assets/works/the-sinking-call.pdf"
import theSinkingCallMidiMp3 from "../../../assets/works/the-sinking-call-midi.mp3"
import faultingPdf from "../../../assets/works/faulting.pdf"
import faultingLamnthMp3 from "../../../assets/works/faulting-lamnth.mp3"
import thinTheVeilPdf from "../../../assets/works/thin-the-veil.pdf"
import thinTheVeil2020Mp3 from "../../../assets/works/thin-the-veil-2020.mp3"

const soloDuet = {
  title: "Solos and Duets",
  url: "solo-duet",
  works: [
    //     {
    //       title: "A House Without Kindness",
    //       year: 2025,
    //       ensemble: "solo Piano",
    //       performances :[{
    //         ensemble: "Dylan Needleman",
    //         year: 2025,
    //         url: ""
    //       }]
    //     },
    {
      title: "The Sinking Call",
      year: 2025,
      selected: false,
      pdf: theSinkingCallPdf,
      ensemble: "Tenor Saxophone, Baritone Saxophone, and Fixed Media",
      performances: [{
        midiRealization: true,
        mp3: theSinkingCallMidiMp3,
      }]
    },
    {
      title: "Faulting",
      year: 2025,
      ensemble: "Violin, Cimbalom, and Fixed Media",
      selected: true,
      pdf: faultingPdf,
      performances: [{
        ensemble:"the Lamnth Duo",
        year:2025,
        mp3: faultingLamnthMp3,
        bandcampUrl: "https://dylanneedleman.bandcamp.com/track/faulting"
      }]
    },
    {
      title:"Rest",
      year:2020,
      selected: false,
      ensemble:"Piano Four Hands"
    },
    {
      title: "Thin the Veil",
      year: 2020,
      ensemble: "Flute and Cello",
      selected: true,
      pdf: thinTheVeilPdf,
      performances: [{
        ensemble:"Christopher Story and Lori Beth Sussman",
        year:2020,
        mp3: thinTheVeil2020Mp3,
        bandcampUrl:"https://dylanneedleman.bandcamp.com/track/thin-the-veil",}]
    }
  ],
}

export default soloDuet
