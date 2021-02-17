import React from 'react';
import Layout from "../components/Layout"

const Sample2 = () => {
    return(
        <Layout>
        <div className="header-wrapper" id="home">
      <section className="hero is-large">
        <nav className="navbar is-transparent is-hidden-desktop">
          <div className="navbar-brand">
            <div className="navbar-burger burger" data-target="mobile-nav">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="mobile-nav" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <a className="navbar-item" href="#home">
                  Home
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#about-me">
                  About Me
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#services">
                  Services
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#skills">
                  Skills
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#my-work">
                  My Work
                </a>
              </div>
              <div className="navbar-item">
                <a className="navbar-item" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="subtitle">Hey there, I'm</h1>
            <h2 className="title">Ashley</h2>
            <h1 className="subtitle profession">A UI/UX Designer</h1>
          </div>
        </div>
        <div className="hero-foot ">
          <div className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li className="is-active">
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about-me">About Me</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#my-work">My Work</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="main-content">
      <div className="section-light about-me" id="about-me">
        <div className="container">
          <div className="column is-12 about-me">
            <h1 className="title has-text-centered section-title">About Me</h1>
          </div>
          <div className="columns is-multiline">
            <div
              className="column is-6 has-vertically-aligned-content"
              data-aos="fade-right"
            >
              <p className="is-larger">
                &emsp;&emsp;<strong
                  >Showcase is a modern, beautiful personal website template to
                  showcase who you are, as well as projects you've worked on in
                  the past.</strong
                >
              </p>
              <br />
              <p>
                Showcase was built from the ground up with Bulma to be fast and
                responsive out of the box with all source files well documented
                for easy to customization. The Showcase template gives you a
                personal space to share what you are all about as a creative
                designer, developer, photographer, and more!
              </p>
              <br />
              <div className="is-divider"></div>
              <div className="columns about-links">
                <div className="column">
                  <p className="heading">
                    <strong>Give me a ring</strong>
                  </p>
                  <p className="subheading">
                    123-456-7890
                  </p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>Email Me</strong>
                  </p>
                  <p className="subheading">
                    hello@example.com
                  </p>
                </div>
                <div className="column">
                  <p className="heading">
                    <strong>View my portfolio</strong>
                  </p>
                  <p className="subheading">
                    example.com
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-6 right-image " data-aos="fade-left">
              <img
                className="is-rounded"
                src="https://picsum.photos/id/366/600/375"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-dark resume">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                View My Resume
              </h1>
            </div>
            <div className="column is-10 has-text-centered is-offset-1">
              <h2 className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et doloremagna aliqua
              </h2>
              <form action="example.docs">
                <button className="button">
                  Download Resume&emsp;<i className="fad fa-download fa-lg"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="section-color services" id="services">
        <div className="container">
          <div className="columns is-multiline">
            <div
              className="column is-12 about-me"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1 className="title has-text-centered section-title">Services</h1>

              <h2 className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
              <br />
            </div>
            <div className="columns is-12">
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fad fa-meteor fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-paint-brush fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-rocket fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
            </div>
            <hr />
            <div className="columns is-12">
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-upload fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-bus fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
              <div
                className="column is-4 has-text-centered"
                data-aos="fade-in"
                data-aos-easing="linear"
              >
                <i className="fas fa-code fa-3x"></i>
                <hr />
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-light skills" id="skills">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">Skills</h1>
            </div>
            <div
              className="column is-6"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1>Adobe Experience Design</h1>
              <progress className="progress" value="70" max="100">30%</progress>
              <h1>Adobe After Effects</h1>
              <progress className="progress" value="65" max="100">30%</progress>
              <h1>Visual Studio Code</h1>
              <progress className="progress" value="58" max="100">45%</progress>
              <h1>Sketch</h1>
              <progress className="progress" value="90" max="100">60%</progress>
            </div>
            <div
              className="column is-6"
              data-aos="fade-in"
              data-aos-easing="linear"
            >
              <h1>HTML</h1>
              <progress className="progress" value="85" max="100">30%</progress>
              <h1>CSS</h1>
              <progress className="progress" value="95" max="100">30%</progress>
              <h1>VueJS</h1>
              <progress className="progress" value="70" max="100">45%</progress>
              <h1>React</h1>
              <progress className="progress" value="60" max="100">60%</progress>
            </div>
          </div>
        </div>
      </div>
      <div className="section-dark my-work" id="my-work">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in"
            data-aos-easing="linear"
          >
            <div className="column is-12">
              <h1 className="title has-text-centered section-title">My Work</h1>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{backgroundImage: "url('https://picsum.photos/320/180?image=0');"}}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{backgroundImage: "url('https://picsum.photos/320/180?image=10');"}}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{backgroundImage: "url('https://picsum.photos/320/180?image=20');"}}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{backgroundImage: "url('https://picsum.photos/320/180?image=30');"}}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{backgroundImage: "url('https://picsum.photos/320/180?image=40');"}}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{backgroundImage: "url('https://picsum.photos/320/180?image=50');"}}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{backgroundImage: "url('https://picsum.photos/320/180?image=60');"}}
                ></figure>
              </a>
            </div>
            <div className="column is-3">
              <a href="#">
                <figure
                  className="image is-2by1 work-item"
                  style={{backgroundImage: "url('https://picsum.photos/320/180?image=70');"}}
                ></figure>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-light contact" id="contact">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in-up"
            data-aos-easing="linear"
          >
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                Get in touch
              </h1>
            </div>
            <div className="column is-8 is-offset-2">
              <form
                action="https://formspree.io/email@example.com"
                method="POST"
              >
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Ex. Jane Smith"
                      name="Name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      placeholder="Ex. hello@arctheme.com"
                      name="Email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Textarea"
                      name="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control ">
                    <button className="button submit-button">
                      Submit&nbsp;&nbsp;
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer">
      <p>
        <strong className="white">Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>.
        The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
    </Layout>
    );
}

export default Sample2