import React, { useState } from "react";
import "./Main.css";
import avatar from "../assets/avatar.png";
import me from "../assets/me.png";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function Main() {
  const [currentImage, setCurrentImage] = useState(avatar);

  const handleClick = () => {
    setCurrentImage(currentImage === avatar ? me : avatar);
  };

  return (
    <main>
      <div className="container">
        <div className="textContainer">
          <div className="authorContainer">
            <h1>
              <span className="letter">C</span>
              <span className="letter">h</span>
              <span className="letter">r</span>
              <span className="letter">i</span>
              <span className="letter">s</span>
              <span>&nbsp;</span>
              <br></br>
              <span className="letter">R</span>
              <span className="letter">u</span>
              <span className="letter">c</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">s</span>
              <span className="letter">k</span>
              <span className="letter">i</span>
            </h1>
          </div>
          <div className="role">
            My name is <span>Krzysztof</span> and welcome to my Portfolio
            Website!
          </div>
        </div>

        <div className="imageContainer">
          <CSSTransition
            in={currentImage === me}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <img className="image topImage" src={me} alt="me" />
          </CSSTransition>
          <CSSTransition
            in={currentImage === avatar}
            timeout={500}
            classNames="fade"
            unmountOnExit
          >
            <img className="image bottomImage" src={avatar} alt="avatar" />
          </CSSTransition>
          <div className="heroImg" onClick={handleClick} />
        </div>
      </div>
      <section className="projects">
        <h2>Featured Projects:</h2>
        <ul>
          <li>
            <Link to="https://n1nis.github.io/Genius-Clone/">
              <h3>Genius clone</h3>
            </Link>
            <p>Site that is built on the 'genius.com' pattern.</p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Colorful-board/">
              <h3>Colorful board</h3>
            </Link>
            <p>Project that allowed me to learn more about JavaScript.</p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Bootstrap-Website/">
              <h3>Bootstrap Project #1</h3>
            </Link>
            <p>
              Responsive website design for gamers which I’ve made in bootstrap.
            </p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Bootstrap-Website-2/">
              <h3>Bootstrap Project #2</h3>
            </Link>
            <p>Second website built in bootstrap.</p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Weather-App/">
              <h3>Weather app</h3>
            </Link>
            <p>Weather app with API.</p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Wallet/">
              <h3>Wallet app</h3>
            </Link>
            <p>
              Wallet for financial management. You can calculate your income and
              expenses.
            </p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Solar-system/">
              <h3>Solar system</h3>
            </Link>
            <p>Simulation of the solar system made in pure CSS.</p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Stoper/">
              <h3>Stoper app</h3>
            </Link>
            <p>
              A neat-looking stopwatch with the ability to measure times and
              archive them.
            </p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Todo-List/">
              <h3>Todo list</h3>
            </Link>
            <p>Todo list.</p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/My-notes/">
              <h3>Notes app</h3>
            </Link>
            <p>An application that saves notes and categorizes them.</p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Tip-Calculator/">
              <h3>Bill splitter</h3>
            </Link>
            <p>
              Calculator which will count the bill for us and include the tip.
            </p>
          </li>
          <li>
            <Link to="https://n1nis.github.io/Exchange-Rate-App/">
              <h3>Exchange rate app</h3>
            </Link>
            <p>
              App for calculating at current exchange rates and currency
              conversion. Also connected to the API.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
