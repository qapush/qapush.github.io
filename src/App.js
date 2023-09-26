import './App.css';

function App() {
  return (
    <>
    <header>
        <button className="hamburger hamburger--collapse" type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
        <div className="menu--mobile">
            <nav>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="menu--desktop">
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </header>
    <main>
      <section id="hero" className="full-width noborder">
              <span className="title">Michael K.</span>
              <span className="subtitle">Web developer</span>
          </section>
          <section id="about" className="noborder">
              <h2 className="section__title">About</h2>
              <div className="about__content">
                  <dotlottie-player className="lottie" renderer="svg" data-bm-renderer="svg" autoplay loop mode="normal"
                      src="./assets/img/michael.lottie">
                  </dotlottie-player>
                  <div className="about__description">

                      <p>
                          My area of interest are front-end technologies like JavaScript, React, React Redux as well as
                          tools like Git and CLI.
                      </p>
                      <p>
                          My previous expirience includes Wordpress, Bootstrap, Sass and virtual tours development with<a
                              href="https://krpano.com/home/" target="_blank">Krpano.</a>
                      </p>
                      <div className="technologies">
                          <img src="./assets/img/logo-js.png" alt="Javascript logo"/>
                          <img src="./assets/img/logo-react.png" alt="React logo"/>
                          <img src="./assets/img/logo-git.png" alt="Git logo"/>
                          <img src="./assets/img/logo-krpano.png" alt="Krpano logo"/>
                      </div>
                  </div>
              </div>
          </section>
          <section id="projects" className="full-width">
            <h2 className="section__title">Projects</h2>

            <div className="projects--wrapper">

                <a href="https://qapush.github.io/codecademy-website-flex/" target="_blank">
                    <div className="project">
                        <div className="project--cover">
                            <img src="./assets/img/portfolio/project-1.jpg" alt=""/>
                        </div>
                        <div className="project--description">
                            <h3>Company homepage</h3>
                            <div className="project-keywords">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>


                <a href="https://qapush.github.io/codecademy-club/" target="_blank">
                    <div className="project">
                        <div className="project--cover">
                            <img src="./assets/img/portfolio/project-2.jpg" alt=""/>
                        </div>
                        <div className="project--description">
                            <h3>Responsive Club Website</h3>
                            <div className="project-keywords">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://qapush-movies.netlify.app/" target="_blank">
                    <div className="project">
                        <div className="project--cover">
                            <img src="./assets/img/portfolio/project-3.jpg" alt=""/>
                        </div>
                        <div className="project--description">
                            <h3>Private movies database</h3>
                            <div className="project-keywords">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>React</li>
                                    <li>API</li>
                                    <li>Netlify</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://qapush-jammming.netlify.app/" target="_blank">
                    <div className="project">
                        <div className="project--cover">
                            <img src="./assets/img/portfolio/project-7.jpg" alt=""/>
                        </div>
                        <div className="project--description">
                            <h3>Jammming with Spotify</h3>
                            <div className="project-keywords">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>React</li>
                                    <li>API</li>
                                    <li>Netlify</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://fortmokotow.pl/fm_spacer/index.html" target="_blank">
                    <div className="project">
                        <div className="project--cover">
                            <img src="./assets/img/portfolio/project-4.jpg" alt=""/>
                        </div>
                        <div className="project--description">
                            <h3>Virtual tour</h3>
                            <div className="project-keywords">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Krpano</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://super-cool-site-by-qapush.netlify.app/" target="_blank">
                    <div className="project">
                        <div className="project--cover">
                            <img src="./assets/img/portfolio/project-6.jpg" alt=""/>
                        </div>
                        <div className="project--description">
                            <h3>Weather app</h3>
                            <div className="project-keywords">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>React</li>
                                    <li>API</li>
                                    <li>Netlify</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://domofoniastudio.pl/" target="_blank">
                    <div className="project">
                        <div className="project--cover">
                            <img src="./assets/img/portfolio/project-5.jpg" alt=""/>
                        </div>
                        <div className="project--description">
                            <h3>Recording studio webpage</h3>
                            <div className="project-keywords">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Wordpress</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>




            </div>

        </section>
        <section id="contact">
            <h2 className="section__title">
                Contact
            </h2>
            <p>
                Will be happy if you reach me out to cooperate or just to say hello 👋
            </p>
            <a href="mailto:mihail.kapush@gmail.com">mihail.kapush@gmail.com</a>
            <div className="contact__icons">
                <a href="https://github.com/qapush" className="contact__icon" target="_blank">
                    <img src="./assets/img/github-mark.svg" alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/qapush/" className="contact__icon" target="_blank">
                    <img src="./assets/img/linkedin-icon.svg" alt=""/>
                </a>
                <a href="https://www.facebook.com/qapush" className="contact__icon" target="_blank">
                    <img src="./assets/img/fb-icon.svg" alt=""/>  
                </a>
            </div>
        </section>
    </main>
    <footer>
        <img src="./assets/img/dice.svg" alt="Game button" id="game-open"/>
        <div id="game">
            <div className="game-panel">
                <div className="game-buttons">
                    <button id="game-hide">
                        Back to site
                    </button>
                    <button id="game-newgame">
                        Start new game
                    </button>
                </div>
                <div id="game-message">
                    <p>
                        You've found all the matches in <span id="game-time"></span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    
    </>
  );
}

export default App;
