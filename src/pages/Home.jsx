import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const banners = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  ];

  const services = [
    {
      title: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Modern and scalable web applications using React and Vite.",
    },
    {
      title: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description:
        "Beautiful and responsive user interfaces with modern design.",
    },
    {
      title: "Performance Optimization",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description:
        "Optimized applications using lazy loading and code splitting.",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyWebsite</div>

        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#gallery">Gallery</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="nav-btn">Login</button>
      </nav>

      {/* Banner Section */}
      <div
        className="banner"
        style={{
          backgroundImage: `url(${banners[currentBanner]})`,
        }}
      >
        <div className="overlay">
          <h2>Welcome to Our Website</h2>

          <p>Build blazing fast applications with React.js and Vite.</p>

          <button>Get Started</button>
        </div>

        <button
          className="prev-btn"
          onClick={() =>
            setCurrentBanner((prev) =>
              prev === 0 ? banners.length - 1 : prev - 1,
            )
          }
        >
          ❮
        </button>

        <button
          className="next-btn"
          onClick={() =>
            setCurrentBanner((prev) =>
              prev === banners.length - 1 ? 0 : prev + 1,
            )
          }
        >
          ❯
        </button>

        <div className="dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={currentBanner === index ? "dot active" : "dot"}
              onClick={() => setCurrentBanner(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="home-about" id="about">
        <div className="home-about-content">
          <div className="about-text">
            <h2>Who We Are</h2>

            <p>
              We create modern, scalable, and high-performance web applications
              using React.js and Vite.
            </p>

            <p>
              Our mission is to build fast, responsive, and beautiful user
              experiences for modern websites.
            </p>

            <button>Read More</button>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="About"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <h2>Our Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <h2>Our Gallery</h2>

        <div className="gallery-grid">
          {banners.map((image, index) => (
            <img key={index} src={image} alt="Gallery" />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact Us</h2>

        <p>Have questions? We'd love to hear from you.</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Our Office</h3>

            <p>Lucknow, Uttar Pradesh, India</p>

            <p>Email: info@mywebsite.com</p>

            <p>Phone: +91 9876543210</p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea rows="5" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Home;
