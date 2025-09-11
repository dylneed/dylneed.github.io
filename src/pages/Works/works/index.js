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
    piece.id = piece.id || piece.title.toLowerCase().replace(/[/\\ ]/g,"-");
    piece.workTypeUrl=type.url
    if (piece.page === undefined && piece.pdf) piece.page = true
  })
})

export default works
