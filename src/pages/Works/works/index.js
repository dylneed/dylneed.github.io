import chamber from "./chamber"
import soloDuet from "./soloDuet"
import large from "./large"
import electronic from "./electronic"

const works = [
  chamber,
  soloDuet,
  large,
  electronic,
]

works.forEach((type) => {
  type.works.forEach((piece) => {
    piece.id = piece.id || piece.title.toLowerCase().replace(/[/\\ ]/g,"-")
  })
})

export default works
