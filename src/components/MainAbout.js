import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import "./MainAbout.css";
import me from "../assets/me.png";

function MainAbout() {
  const [currentImage, setCurrentImage] = useState(avatar);

  const handleClick = () => {
    setCurrentImage(currentImage === avatar ? me : avatar);
  };
  return (
    <main className="main">
      <div className="imageContainer imgRight" onClick={handleClick}>
        <div className="heroImg">
          <picture>
            <img
              src={currentImage}
              alt="avatar"
              height="250px"
              width="250px"
              className="hoverEffect"
            />
          </picture>
        </div>
      </div>
      <h2>About Me</h2>
      <p>
        Hi. I'm Chris, I'm 21 years old and I'm programming passionate. My first
        contact with coding was many years ago, when I was much younger. My real
        adventure started in the middle of 2022, when i started learning via
        Udemy platform.
      </p>
      <br />
      <h2>Hobbies</h2>
      <p>
        Passionate about psychology, personal development books, astronomy,
        photography, technology and fashion. Junior web developer with a diverse
        range of interests.
      </p>
      <br />
      <h2>Teamwork and Strategic Thinking</h2>
      <p>
        I have a strong background in effective communication and collaboration,
        honed through my experience as a semi-professional player in CS:GO. With
        a deep understanding of teamwork and strategic thinking, I bring these
        skills to the world of programming. In addition, my familiarity with the
        internet and computers further enhances my ability to navigate and
        utilize digital technologies effectively.
      </p>
      <br />
      <h2>Passionately Evolving</h2>
      <p>
        I am driven by my love for programming and the constant pursuit of
        growth. Each day, I embrace new challenges to enhance my skills and
        knowledge, pushing myself to become a better developer.
      </p>
      <br />
      <h2>Mantra</h2>
      <p>Don't dream about success, work hard for it.</p>
      <br />
      <a href="https://github.com/n1nis"><h2>Tech Stack</h2></a>
      <br />
    </main>
  );
}

export default MainAbout;
