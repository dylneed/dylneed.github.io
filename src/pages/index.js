import React, {} from "react";
import { Route, Link , Navigate } from "react-router-dom";

import About from './About';
import {Home as BlogHome, Post as BlogPost, posts as blogPosts, postTitles as blogPostTitles} from './Blog';
import Contact from './Contact';
import {Home as WorksHome, workTypes, Type as WorkType, Piece as WorkPiece} from './Works';

import TitleUpdater from "../components/TitleUpdater";
import ExternalNavigator from "../components/ExternalNavigator";


let about = {
  name: "About",
  title: "",
  path:"/about",
  element: <About />,
}

let blog = {
  name: "Blog",
  path:"/blog",
  element: <BlogHome/>,
}
blog.title = blog.name;
blog.route =  <Route path={blog.path} key="blog">
                {blogPosts.map((post, i) => {
                  return (
                    <Route
                      path={post.url}
                      element={
                        <>
                          <TitleUpdater pageTitle={`${post.title} | Blog`} />
                          <BlogPost
                            post={post}
                            blogPath={blog.path}
                            getPostPath={(url) => url && `${blog.path}/${url}`}
                            nextPost={blogPostTitles[i-1]}
                            prevPost={blogPostTitles[i+1]}
                          />
                        </>
                      }
                      key={i}
                    />
                  );
                })}
                <Route
                  path=""
                  element={<>
                            <TitleUpdater pageTitle={blog.title} />
                            <BlogHome />
                           </>}
                />
              </Route>
let works = {
  name: "Works",
  path:"/works",
  element: <WorksHome />,
}
works.title=works.name;
works.route = <Route path={works.path} key="works">
                {workTypes.map((type, i) => {
                  return (
                    <Route path={type.url} key={i} >
                      {type.works.map((piece,i) => {
                        return (
                          <Route
                            path={piece.id || piece.title.toLowerCase().replace(/[/\\ ]/g,"-")}
                            key={i}
                            element={<>
                                    <TitleUpdater pageTitle={`${piece.title} | Works`} />
                                    <WorkPiece piece={piece} />
                                    </>}
                          />);
                        })}
                        <Route
                          path=""
                          key={i}
                          element={<>
                                    <TitleUpdater pageTitle={type.title} />
                                    <WorkType workType={type} />
                                  </>}
                        />
                    </Route>);
                })}
                <Route
                  path=""
                  element={
                    <>
                      <TitleUpdater pageTitle={works.title} />
                      <WorksHome />
                    </>
                  }
                />
             </Route>

let contact = {
  name: "Contact",
  path:"/contact",
  element: <Contact />,
}

let home = {
  name: "Home",
  title: "",
  path:"/",
  element:  <div style={{minHeight:"85vh", backgroundColor:"rgb(0,0,0,0.5)"}}>
              <Navigate replace to={about.path}/>
            </div>,
  navbarDisplay: false,
  menuDisplay: false, 
}

let music = {
  name: "Music",
  title: "",
  path:"/music",
  element: <ExternalNavigator to="https://dylanneedleman.bandcamp.com/" replace />,
  navbarDisplay: false,
  menuDisplay: false,
}

let pages = [
  home,
  about,
  works,
  blog,
  contact,
  music
]

pages.forEach((page,i) => {
  if (page.title === undefined) page.title = page.name
  if (page.navbarDisplay == null) page.navbarDisplay = true;
  if (page.menuDisplay == null) page.menuDisplay = true;
  if (page.route == null) page.route =  <Route
                                          path={page.path}
                                          element={<>
                                                    <TitleUpdater pageTitle={page.title} />
                                                    {page.element}
                                                  </>}
                                          key={i}
                                        />;
  if (page.link == null) page.link = <Link to={page.path} className="navigation" key={i}>{page.name}</Link>;
})

export {pages, home, about, blog, contact, works} ;
