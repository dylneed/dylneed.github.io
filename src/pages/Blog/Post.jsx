import React, {useRef, useEffect, useMemo} from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import Header from './Header';
import useCompareSize from '../../hooks/useCompareSize.js';
import {getComponentHeight} from '../../utils/getComponentSize.js';

function initLinkedPost(post, right, ref) {
  if (!post) return;
  post.rightAlign = right;
  post.order = right ? "Next" : "Previous"
  post.ref = ref;
  return post;
}

function initLinkedPosts(prevPost, nextPost, prevRef, nextRef) {
  let _posts = [];
  prevPost && _posts.push(initLinkedPost(prevPost, false, prevRef));
  nextPost && _posts.push(initLinkedPost(nextPost, true, nextRef));
  return _posts;
}

const Post = ({post, blogPath, getPostPath, nextPost, prevPost}) => {
  post.ref = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  const linkedPosts = useMemo(() => initLinkedPosts(prevPost, nextPost, prevRef, nextRef), [prevPost,nextPost])

  const spacer = {ref: useRef(null)}
  spacer.getHeight = () => getComponentHeight(spacer.ref,24)

  const footlink = useMemo(() => {return {text: "Back to Blog"}}, [])
  footlink.ref = useRef();
  useEffect(() => {footlink.height = getComponentHeight(footlink.ref,19)},[footlink])

  const wideLinks = useCompareSize(post,linkedPosts,"width");

  const EndLink = ({linkedPost}) => 
    <Link
      className="endlink"
      to={getPostPath(linkedPost.url)}
      ref={linkedPost.ref}
      style={linkedPost.rightAlign ? {right:'0%'} : {left:'0%'}}
      id={`endlink${linkedPost.order}`}
      onClick={() => window && window.scroll(0,0)} // Scroll to top on link click
    >
      {wideLinks ? `${linkedPost.title}` : `${linkedPost.order}`}
    </Link>;

  return(
    <div id="blog">
      <div id="blogpost" ref={post.ref}>
        <main>
          <Header post={post} />
          <div id='content'>
            {post.content}
          </div>
        </main>
        <nav aria-label="other posts" id="endlinks">
          {linkedPosts.map((linkedPost,i) => 
            <EndLink linkedPost={linkedPost} rightAlign={linkedPost.rightAlign} key={i} />
          )}
        </nav>
        {post.sources && <aside aria-label="sources" id='sources'>
          <h3>{post.sources && post.sources.heading}</h3>
          {post.sources && post.sources.sources.map((entry,i) =>
            <p className="source-entry" key={i}>
              {entry.url
              ? <a href={entry.url} target="_blank" rel="noreferrer" className="source-entry">{entry.text}</a>
              : entry.text}
            </p>
          )}
        </aside>}
        <div id="spacer" style={{height:`max(${footlink.height*2}px,min(7vh, 56px))`}} ref={spacer.ref}></div>
      </div>
      <Link id="footlink" to={blogPath} ref={footlink.ref}>{footlink.text}</Link>
    </div>
  )
}
export default Post;