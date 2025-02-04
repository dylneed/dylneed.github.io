import {montero} from './Montero';
import {onAnalog} from './OnAnalog';
// import {harshNoiseWall} from './HarshNoiseWall';

const posts = [
  // harshNoise`Wall,
  onAnalog,
  montero,
]

const postHeaders = posts.map(({title, subtitle, author, date, editedDate, url}) => (
  {title, subtitle, author, date, editedDate, url}
));

const postTitles = posts.map(({title, url}) => (
  {title, url}
));

export { posts, postHeaders, postTitles } ;
