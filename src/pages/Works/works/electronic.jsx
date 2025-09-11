import henToPanMp3 from "../../../assets/works/hen-to-pan.mp3"
import sanguineDreamsMp3 from "../../../assets/works/sanguine-dreams.mp3"
import sonatinaForPaulMp3 from "../../../assets/works/sonatina-for-paul.mp3"
import euthanizedInGnomeRegaliaMp3 from "../../../assets/works/euthanized-in-gnome-regalia.mp3"
import dianaItsMichelleMp3 from "../../../assets/works/diana-its-michelle.mp3"
import westMp3 from "../../../assets/works/west.mp3"
import theWhalefallMp3 from "../../../assets/works/the-whalefall.mp3"
import songOfTheVoidMp3 from "../../../assets/works/song-of-the-void.mp3"

const electronic = {
  title: "Electronic Works",
  url: "electronic",
  works: [
    //     {
    //       title: "All//One",
    //       year: 2025,
    //       ensemble: "Digital Sound Installation",
    //       ensemblePrefix: "\b",
    //       url: ""
    //     },
    {
      title: "Hen To Pan",
      year:2025,
      selected:true,
      id: "hen-to-pan",
      mp3: henToPanMp3,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/track/hen-to-p-n"
    },
    {
      title: "Sanguine Dreams",
      year: 2024,
      mp3:sanguineDreamsMp3,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/track/sanguine-dreams"
    },
    {
      title: "Sonatina for Paul (Passing Through)",
      year: 2024,
      selected:true,
      id: "sonatina-for-paul",
      mp3: sonatinaForPaulMp3,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/track/sonatina-for-paul-passing-through"
    },
    {
      title: "Euthanized in Gnome Regalia",
      year: 2024,
      mp3:euthanizedInGnomeRegaliaMp3,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/track/euthanized-in-gnome-regalia"
    },
    {
      title: "Diana, It's Michelle",
      year: 2024,
      id:"diana-its-michelle",
      mp3: dianaItsMichelleMp3,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/track/diana-its-michelle"
    },
    {
      title: "West",
      year: 2023,
      mp3: westMp3,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/track/west"
    },
    {
      title: "The Whalefall",
      year: 2022,
//       ensemble: "Electronic Instruments and Recorded Voice and Instruments",
      selected: true,
      mp3: theWhalefallMp3,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/track/the-whalefall"
    },
    {
      title: "Song of the Void",
      year: 2021,
//       ensemble: "Electronic Instruments and Recorded Voice and Instruments",
      selected: true,
      mp3:songOfTheVoidMp3,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/track/song-of-the-void"
    }
  ],
}

export default electronic
