import React from "react";


export default function Home() {
  return (
    <div className="main-container">
      <div className="top-container">
        {/* <img src="{picture}" alt="headshot" className="picture" /> */}
      </div>
      <div className="lower-containter">
        <article className="about-me">
          <br />
          <h2>Hi, I'm</h2>
          <h3>Anne Linger</h3>
          {/* make the title different colors */}
          <br />
          <p>Add in my intro statement here.</p>
          <br />
          <p>What else should I add?</p>
        </article>
      </div>
    </div>
  );
}
