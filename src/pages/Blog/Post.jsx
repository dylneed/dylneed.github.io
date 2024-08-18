import React, {useRef, useState, useEffect, useMemo} from 'react';
import './Post.css';
import {Link} from 'react-router-dom';
import Header from './Header';
import useWindowSize from '../../hooks/useWindowSize.js';
import {getComponentWidth, getComponentHeight} from '../../utils/getComponentSize.js';


function Post({post, blogPath, getPostPath, nextPost, prevPost}) {
  const windowSize = useWindowSize();

  const [wideLinks, setWideLinks] = useState(true);

  post.ref = useRef(null);

  if (!prevPost) prevPost = {blank:true}
  prevPost.ref = useRef(null);
  prevPost.order = "Previous";
  prevPost.rightAlign = false;


  if (!nextPost) nextPost = {blank: true}
  nextPost.ref = useRef(null);
  nextPost.order = "Next";
  nextPost.rightAlign = true;

  const spacer = {ref: useRef(null)}
  spacer.getHeight = () => getComponentHeight(spacer.ref,24)
  
  const linkedPosts = useMemo(() => {
    let _posts = []
    prevPost.blank || _posts.push(prevPost);
    nextPost.blank || _posts.push(nextPost);
    return _posts;
  }, [prevPost,nextPost])

  const footlink = useMemo(() => {return {text: "Back to Blog"}}, [])
  footlink.ref = useRef();
  useEffect(() => {footlink.height = getComponentHeight(footlink.ref,19)},[footlink])

  // Update post.width
  useEffect(() => {post.width = getComponentWidth(post.ref,920)},[windowSize, post]);

  // Calculate wideLinks
  useEffect(() => {
    let totalWidth = 0;
    linkedPosts.forEach((linkedPost) => totalWidth += linkedPost.width);
    setWideLinks(post.width >= totalWidth);
  },[windowSize, post.width, linkedPosts])

  // get linkedPosts size
  useEffect(() => {wideLinks && linkedPosts.forEach((linkedPost) => {
    linkedPost.width = getComponentWidth(linkedPost.ref);
    linkedPost.height = getComponentHeight(linkedPost.ref,19);
  })},[wideLinks, linkedPosts])

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