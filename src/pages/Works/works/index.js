import chamber from "./chamber"
import soloDuet from "./soloDuet"
import large from "./large"
import electronic from "./electronic"
import albums from "./albums"

const works = [
  chamber,
  soloDuet,
  large,
  electronic,
  albums,
]

works.forEach((type) => {
  type.works.forEach((piece) => {
    piece.id = piece.id || piece.title.toLowerCase().replace(/[/\\ ]/g,"-");
    piece.workTypeUrl = type.url
    if (piece.page === undefined && piece.pdf) piece.page = true
    piece.internalUrl = piece.internalUrl || `/works/${piece.workTypeUrl}/${piece.id}`
  })
})

export default works
