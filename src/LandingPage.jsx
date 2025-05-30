import { useRef } from "react";
import ScrollReveal from "./components/ScrollReveal";
import ScrollFloat from "./components/ScrollFloat";
import SplitText from "./components/splitText";
import "./App.css";
import "./LandingPage.css";

function LandingPage() {
  const scrollContainerRef = useRef(null);

  return (
    <div ref={scrollContainerRef} className='landing-page-container hero-bg'>
      <header className='hero-section'>
        <nav className='navbar'>
          <a href='/' className='nav-logo'>
            CloudTag✶
          </a>
          <div className='nav-menu'>
            <a href='#services'>Services</a>
            <a href='#work'>Our Work</a>
            <a href='#about'>About</a>
            <a href='#contact' className='contact-btn'>
              Let's Talk
            </a>
          </div>
        </nav>

        <div className='hero-content'>
          <div className='hero-text-container'>
            <ScrollFloat
              scrollContainerRef={scrollContainerRef}
              containerClassName='hero-title'
              textClassName='hero-text'
            >
              Transform your ideas into digital reality
            </ScrollFloat>
            <SplitText
              text='We craft innovative solutions that drive results'
              className='hero-subtitle'
              splitType='words'
              delay={100}
            />
            <div className='hero-cta'>
              <button className='primary-btn'>Start a Project</button>
              <button className='secondary-btn'>View Work</button>
            </div>
          </div>
        </div>
      </header>

      <section className='services-section' id='services'>
        <div className='section-header'>
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            containerClassName='section-title'
          >
            Our Services
          </ScrollReveal>
        </div>
        <div className='services-grid'>
          {[
            {
              title: "Web Development",
              desc: "Modern, responsive websites built with cutting-edge technology",
            },
            {
              title: "Mobile Apps",
              desc: "Native and cross-platform mobile applications",
            },
            {
              title: "UI/UX Design",
              desc: "User-centered design that delivers exceptional experiences",
            },
            {
              title: "Digital Strategy",
              desc: "Strategic solutions to drive your digital success",
            },
          ].map((service, index) => (
            <div className='service-card' key={index}>
              <ScrollReveal
                scrollContainerRef={scrollContainerRef}
                containerClassName='service-content'
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className='portfolio-section' id='work'>
        <div className='section-header'>
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            containerClassName='section-title'
          >
            Featured Work
          </ScrollReveal>
        </div>
        <div className='portfolio-grid'>
          {[1, 2, 3].map((item) => (
            <div className='portfolio-item' key={item}>
              <ScrollReveal
                scrollContainerRef={scrollContainerRef}
                containerClassName='portfolio-content'
              >
                <div className='portfolio-image'></div>
                <h3>Project {item}</h3>
                <p>Description of project {item}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className='contact-section' id='contact'>
        <div className='section-header'>
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            containerClassName='section-title'
          >
            Let's Work Together
          </ScrollReveal>
        </div>
        <div className='contact-content'>
          <div className='contact-form'>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button className='primary-btn'>Send Message</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
