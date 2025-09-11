import wellBeingForAllPdf from "../../../assets/works/well-being-for-all.pdf"
import wellBeingForAllMidiMp3 from "../../../assets/works/well-being-for-all-midi.mp3"
import ozymandiasPdf from "../../../assets/works/ozymandias.pdf"
import ozymandiasVccMp3 from "../../../assets/works/ozymandias-vcc.mp3"


const large = {
  title: "Large Ensembles",
  url: "large",
  works: [
    {
      title: "Well Being For All",
      year: 2025,
      ensemble: "SATB Choir",
      text: {
        work: "The Conquest of Bread",
        author: "Peter Kropotkin",
      },
      selected: false,
      pdf: wellBeingForAllPdf,
      performances: [{
        midiRealization: true,
        performedOveride: "\b",
        mp3: wellBeingForAllMidiMp3,
      }]
    },
    {
      title: "Ozymandias",
      year: 2022,
      ensemble: "SATB Choir",
      text: {
        work: "Ozymandias",
        author: "Percy Bysshe Shelley",
      },
      selected: true,
      pdf: ozymandiasPdf,
      performances: [{
        ensemble:"the Vassar College Choir",
        year:2023,
        bandcampUrl:"https://dylanneedleman.bandcamp.com/track/ozymandias",
        performedOveride: "read by",
        mp3:ozymandiasVccMp3,
      },],
    }
  ],
}

export default large
