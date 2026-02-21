import './index.css';

function About() {
  return (
    <div id="about">
      <main id="textblock">
        {/* <h2>About</h2> */}
        <p style={{fontSize:"1.25rem"}}>
          Dylan Needleman is a composer, producer, and programmer originally from Northern New Jersey.
          He is currently working towards a Master of Fine Arts in Music Composition and Theory from Brandeis University,
          // He is currently working towards a Doctor of Musical Arts in Music Composition from Boston University
          // and has a Master of Fine Arts in Music Composition and Theory from Brandeis University
          and has a Bachelor of Arts in Computer Science from Vassar College with minors in Music Composition and Applied Mathematics.
        </p>
        <p>
          As a composer and producer, he creates music from many different genres, combining a large variety of influences, 
          including Hardcore Punk, Minimalism, and Harsh Noise.
          He has had pieces performed by the Lydian String Quartet, the LAMNTH duo, the TALEA Ensemble, and many others.
        </p>
        <p>
          As a programmer, he has experience in Web Development, using tools such as React and Razor Pages, 
          as well as with development in Android Studio and programming in Python, C, OCaml, and more.
          He is currently working towards developing music software, and will have plugins available soon.
        </p>
        {/* <p>
          Outside of programming and music, he has a Black Belt in Isshinryu Karate, an Eagle Scout Award, 
          and is a game master for multiple TTRPG systems, including Dungeons & Dragons and Call of Cthulhu.
        </p> */}
        <p>
          In his spare time, he is a game master for multiple TTRPG systems, including Dungeons & Dragons and Call of Cthulhu,
          and is an avid player of many board and card games. Among his favorites
          are <a href="https://boardgamegeek.com/boardgame/156129/deception-murder-in-hong-kong" target="_blank" rel="noreferrer">Deception: Murder in Hong Kong</a>
          , <a href="https://boardgamegeek.com/boardgame/82168/escape-from-the-aliens-in-outer-space" target="_blank" rel="noreferrer">Escape from the Aliens in Outer Space</a>
          , <a href="https://pi.math.cornell.edu/~mec/2006-2007/Probability/Cribbage.htm" target="_blank" rel="noreferrer">Cribbage</a>
          , and <a href="https://www.pagat.com/quartet/literature.html" target="_blank" rel="noreferrer">Fish</a>. 
        </p>
      </main>
    </div>
  );
}

export default About;
