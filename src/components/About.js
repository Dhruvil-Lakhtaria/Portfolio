import React from "react";

function About( {onClick}) {
  return (
    <div class="quote-wrapper" onClick={onClick}>
      <div className="text">
        <p>
          I am Dhruvil Lakhtaria, currently pursuing my Bachelor's in technology
          from National Institure of Technology Karnataka, Surathkal in
          Information Technolgy. My interest are inclined towards Competitive
          Programming and Full Stack Webdevlopment. I am an aspiring software
          engineer and look forward to learn more in this field.
        </p>
      </div>
    </div>
  );
}

export default About;
