import "./About.css";

function About() {
  const aboutData = [
    {
      title: "Fast Performance",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      description:
        "Vite provides lightning-fast development and optimized production builds.",
    },
    {
      title: "Lazy Loading",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      description:
        "Components load only when needed for better speed and performance.",
    },
    {
      title: "Responsive Design",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description:
        "Fully responsive layout for desktop, tablet, and mobile devices.",
    },
    {
      title: "Modern UI",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "Beautiful and modern user interface with smooth interactions.",
    },
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Platform</h1>

        <p>
          Our website is built using React.js and Vite to deliver
          high performance and modern user experience.
        </p>

        <div className="about-grid">
          {aboutData.map((item, index) => (
            <div className="about-card" key={index}>
              <img src={item.image} alt={item.title} />

              <h2>{item.title}</h2>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <button>Explore More</button>
      </div>
    </div>
  );
}

export default About;