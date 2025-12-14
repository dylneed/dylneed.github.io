
import theWhalefallMp3 from "../../../assets/works/the-whalefall.mp3"
import songOfTheVoidMp3 from "../../../assets/works/song-of-the-void.mp3"

const albums = {
  title: "Albums and EPs",
  url: "albums",
  works: [
//    {
//      title: "Music To Knit To",
//      year:,
//      selected: true,
//      bandcampUrl: "",
//      songs: [
//      {title: "", mp3: undefined}
//      ]
//    },
    {
      title: "A History",
      year: 2022,
      selected: true,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/album/a-history",
      songs: [
        {title: "Your Town", mp3: undefined,},
        {title: "It's Flying Through the Night", mp3: undefined,},
        {title: "Forever is a Long Time", mp3: undefined,},
        {title: "The Night", mp3: undefined,},
        {title: "The Adventures of Hammerboy and His Trusty Sidekick Jake", mp3: undefined,},
        {title: "Kudzu", mp3: undefined,},
        {title: "The Ghost (Run Away)", mp3: undefined,},
        {title: "The Whalefall", mp3: theWhalefallMp3,},
        {title: "Way Down", mp3: undefined,},
        {title: "Meditations", mp3: undefined,},
        {title: "Great Unknown", mp3: undefined,},
        {title: "Ballad of the Trash Panda", mp3: undefined,},
        {title: "Song of the Void", mp3: songOfTheVoidMp3,},
      ]
    },
    {
      title: "Chant",
      year: 2021,
      selected: false,
      bandcampUrl: "https://dylanneedleman.bandcamp.com/album/chant-ep",
      songs: [
        {title: "Chant", mp3: undefined},
        {title: "Get Away", mp3: undefined},
        {title: "The Lady of the Void", mp3: undefined},
        {title: "Rune", mp3: undefined},
      ]
    }
  ]
}

export default albums
