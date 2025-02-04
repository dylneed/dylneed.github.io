function Content() {
  return(
    <>
      <p>
        I think my biggest draw to analog equipment is the chaos factor of it. With digital tools, 
        there is a baked-in way it works, but with analog gear, 
        there's always a degree of randomness introduced by hardware being potentially slightly flawed. 
        I recently got my hands on an analog mixer for no-input mixing and messing around with that 
        and with a few guitar pedals I have lying around lets me have some of the most engaging time I have ever had making music.
        Little tweaks of a knob here and there lead to drastic changes, and while I can try to predict what will happen, 
        it's never fully accurate to the sounds that get produced. 
        A lot of digital equipment has the goal of accuracy and reproducibility, and that's very useful. 
        I do love my fair share of highly usable digital tools, 
        but the idea of trying to build a patch that could have sounded completely different 
        if one knob was turned 1 millimeter to the left is one that I love.
      </p>
      <p>
        On the subject of analog vs digital, 
        I don't think that musical progress necessarily has to come from the realm of the digital. 
        While it is probably a great deal faster for an expert to code up a new VST 
        than it is for someone of the same proficiency to build a new pedal or module, there is still progress. 
        I also don't think that rapid progress is always necessary. 
        Being forced to slow down, not stop, not go backward, just slow down a little, 
        is something I think there is value in.
      </p>
      <p>
        On a much more subjective level, I find the sounds that are made with analog means sound better to me. 
        When I was at Vassar, they had a Eurorack modular synth that I would spend a lot of time experimenting with. 
        I also have VCV Rack, which I experiment with as well, but there was always a big difference between 
        what I captured from the physical synth and the sounds I produced from VCV Rack. 
        At times, I've even tried to 1 to 1 recreate what I did on the synth, 
        and I get something completely different, and something that I like a lot less.
      </p>
      <p>
        There is also the factor of the physical buttons, switches, cables, sliders, and knobs. 
        I know that there is MIDI equipment that allows you to turn physical knobs on digital tools, 
        but I find them to be more tiresome than useful and have a worse feel than using those interactive pieces 
        designed to interface with the tools they were built for. 
        On that synth at Vassar, there was nothing quite like actually turning the knobs or physically moving the patch cables myself. 
        It really feels like music-making in a way that an all-digital workflow just can't to me.
      </p>
      <p>
        I do have a computer science background, so I am still very interested in the realm of digital tools 
        and am planning on teaching myself how to make them over the next few months, 
        but I think that digital tools work best when they are enhancing analog sources 
        (including the original analog sources, i.e. ourselves and our instruments). 
        I would also love to learn how to make my own analog tools. 
        Building things with my hands is something I don't do as often as I would like, and 
        learning how to make my own musical tools is something that I think I would really enjoy, 
        both in the process of making it, but also in the level of customizability that I would have.
      </p>
      <p>
        But back in the realm of the analog, I want to briefly talk about the album 
        <a href="https://linguaignota.bandcamp.com/album/saved" target="_blank" rel="noreferrer"> SAVED! by Reverend Kristen Michael Hayter</a>. 
        The album was originally recorded in "high fidelity" (I assume digitally) and then committed to a 4 track recorder. 
        The tape was then heavily degraded leading to a incredibly unique sound that I had never really heard before. 
        If you haven't heard it and are curious, my favorite song is
        <a href="https://linguaignota.bandcamp.com/track/idumea" target="_blank" rel="noreferrer"> IDUMEA</a>. 
        She's posted some <a href="https://twitter.com/LINGUA_IGNOTA_/status/1715359026534404302" target="_blank" rel="noreferrer">notes </a>
        on <a href="https://twitter.com/LINGUA_IGNOTA_/status/1716059449800990962" target="_blank" rel="noreferrer">Twitter </a>
        about the making of the album and it's fascinating. 
        She really managed to used tape as a medium for composition and production, on top of just for documentation,
        and I think the album is a shining example of the kind of chaos analog techniques can allow for.
      </p>
    </>
  )
}

const onAnalog = {
  title: "On Analog Electronic Music",
  subtitle: "A Response to an Email",
  // author: "Dylan Needleman",
  date: new Date("Dec 4 2023"),
  editedDate: new Date("Dec 29 2023"),
  url:"on-analog",
  content: <Content />,
  sources: null,

}

export { onAnalog };