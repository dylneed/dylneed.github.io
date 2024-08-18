import './Home.css';
import './index.css';
import {postHeaders as posts} from './posts';
import {Link} from "react-router-dom";

import Header from './Header.jsx';

function Home() {
  return (
    <div id="blog">
      <div id="blog-list">
        {posts.map((post, i) => {
          return (
            <Link className='post-link' to={`${post.url}`} key={i}>
              <Header post={post}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;