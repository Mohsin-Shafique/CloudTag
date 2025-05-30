import { useRef } from "react";
import ScrollReveal from "./components/ScrollReveal";
import ScrollFloat from "./components/ScrollFloat";
import SplitText from "./components/SplitText";
import "./App.css";
import "./LandingPage.css";

function LandingPage() {
  const scrollContainerRef = useRef(null);

  return (
    <div ref={scrollContainerRef} className="landing-page-container">
      <nav className="navbar">
        <a href="/" className="nav-logo">
          WooCommerce Pro
        </a>
        <div className="nav-menu">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#contact" className="contact-btn">
            Get a Free Quote
          </a>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <ScrollFloat
              scrollContainerRef={scrollContainerRef}
              containerClassName="hero-title"
              textClassName="hero-text"
            >
              Expert WooCommerce Development Services
            </ScrollFloat>
            <SplitText
              text="Unlock the full potential of your online store with our custom WooCommerce solutions. We create powerful, scalable e-commerce websites that drive sales and growth."
              className="hero-subtitle"
              splitType="words"
              delay={100}
            />
            <div className="hero-cta">
              <button className="primary-btn">Get a Free Quote</button>
            </div>
          </div>
        </div>
      </header>

      <section className="intro-section">
        <ScrollReveal scrollContainerRef={scrollContainerRef}>
          <p className="intro-text">
            We specialize in WooCommerce development to help you build a successful online store. Whether you're starting from scratch or looking to enhance your existing WooCommerce site, our team of experienced developers and designers are here to provide you with tailored solutions that meet your business needs.
          </p>
        </ScrollReveal>
      </section>

      <section className="services-section" id="services">
        <div className="section-header">
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            containerClassName="section-title"
          >
            Our Services
          </ScrollReveal>
        </div>
        <div className="services-grid">
          {[
            {
              title: "Custom WooCommerce Development",
              desc: "Transform your vision into reality with our custom WooCommerce development services. We create unique, feature-rich online stores that provide an exceptional shopping experience.",
              features: [
                "Custom Theme Development",
                "Plugin Customization",
                "Advanced Functionality Integration",
                "User-Friendly Design"
              ]
            },
            {
              title: "WooCommerce Store Setup",
              desc: "Get your store up and running quickly and efficiently with our WooCommerce setup and configuration services. We handle everything from initial setup to configuring payment gateways and shipping options.",
              features: [
                "WooCommerce Installation",
                "Payment Gateway Integration",
                "Shipping Configuration",
                "Tax Setup"
              ]
            },
            {
              title: "WooCommerce Migration",
              desc: "Seamlessly migrate your existing e-commerce site to WooCommerce with minimal downtime and no data loss. Our migration services ensure a smooth transition and improved performance.",
              features: [
                "Data Migration",
                "Theme and Plugin Compatibility",
                "SEO Preservation",
                "Post-Migration Testing"
              ]
            },
            {
              title: "WooCommerce Optimization",
              desc: "Enhance your store's performance with our WooCommerce optimization services. We focus on speed, security, and usability to ensure your site provides the best user experience.",
              features: [
                "Performance Optimization",
                "Security Enhancements",
                "SEO Optimization",
                "User Experience Improvements"
              ]
            },
            {
              title: "Maintenance and Support",
              desc: "Keep your WooCommerce store running smoothly with our ongoing maintenance and support services. We provide regular updates, security monitoring, and technical support to address any issues.",
              features: [
                "Regular Updates",
                "Security Monitoring",
                "Performance Monitoring",
                "Technical Support"
              ]
            }
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <ScrollReveal scrollContainerRef={scrollContainerRef}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="feature-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="primary-btn">Learn More</button>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-header">
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            containerClassName="section-title"
          >
            Our Process
          </ScrollReveal>
        </div>
        <div className="process-grid">
          {[
            {
              title: "Discovery & Consultation",
              desc: "We begin with a comprehensive consultation to understand your business goals and requirements. This helps us tailor our WooCommerce solutions to meet your specific needs."
            },
            {
              title: "Planning & Strategy",
              desc: "Based on our initial discussions, we develop a detailed project plan that includes milestones, timelines, and deliverables. Our strategic planning ensures your project stays on track."
            },
            {
              title: "Design & Development",
              desc: "Our design and development teams work closely together to create a visually appealing and highly functional WooCommerce store. We provide regular updates and gather your feedback throughout the process."
            },
            {
              title: "Testing & Quality Assurance",
              desc: "Before launch, we conduct extensive testing to ensure your store is bug-free and performs flawlessly across all devices and browsers."
            },
            {
              title: "Launch & Deployment",
              desc: "With everything in place, we launch your WooCommerce store and monitor its performance to ensure a smooth transition. We provide post-launch support to address any immediate issues."
            },
            {
              title: "Ongoing Support",
              desc: "We offer ongoing support and maintenance services to keep your WooCommerce store updated, secure, and performing at its best."
            }
          ].map((step, index) => (
            <div className="process-card" key={index}>
              <ScrollReveal scrollContainerRef={scrollContainerRef}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <button className="secondary-btn">Learn More</button>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="work">
        <div className="section-header">
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            containerClassName="section-title"
          >
            Our Work
          </ScrollReveal>
        </div>
        <div className="portfolio-grid">
          {[
            {
              client: "ABC Fashion Boutique",
              project: "Custom WooCommerce Development",
              desc: "We developed a custom WooCommerce store for ABC Fashion Boutique, featuring a unique design and advanced functionality that enhanced the shopping experience and increased sales."
            },
            {
              client: "XYZ Electronics",
              project: "WooCommerce Migration",
              desc: "We successfully migrated XYZ Electronics' online store to WooCommerce, preserving SEO rankings and improving site performance."
            },
            {
              client: "123 Home Decor",
              project: "WooCommerce Optimization",
              desc: "We optimized the WooCommerce store for 123 Home Decor, resulting in faster load times, improved security, and a better user experience."
            }
          ].map((project, index) => (
            <div className="portfolio-item" key={index}>
              <ScrollReveal scrollContainerRef={scrollContainerRef}>
                <div className="portfolio-image"></div>
                <div className="portfolio-content">
                  <h3>{project.client}</h3>
                  <p>{project.desc}</p>
                  <button className="secondary-btn">View Case Study</button>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-header">
          <ScrollReveal
            scrollContainerRef={scrollContainerRef}
            containerClassName="section-title"
          >
            Let's Work Together
          </ScrollReveal>
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Tell us about your project"></textarea>
            <button className="primary-btn">Get a Free Quote</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;