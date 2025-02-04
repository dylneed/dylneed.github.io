import './Home.css';
import './index.css';
import {postHeaders as posts} from './posts';
import {Link} from "react-router-dom";

import Header from './Header.jsx';

function Home() {
  return (
    <div id="blog">
      <div id="blog-main-header">
        <h1 className="header">Blog, Essays, and Reviews</h1>
      </div>
      <div id="blog-list">
        {posts.map((post, i) => {
          return (
            <Link
              className='post-link'
              to={`${post.url}`}
              onClick={() => window && window.scroll(0,0)}
              key={i}
            >
              <Header post={post}/>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;