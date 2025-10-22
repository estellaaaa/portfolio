// import viteLogo from '/vite.svg'
import { useState } from 'react'
import logo from './assets/logo.png'
import circle from './assets/circle.png'
import star1 from './assets/star_1.png'
import star2 from './assets/star_2.png'
import studyplanmaker from './assets/studyplanmaker.png'
import newsletter from './assets/newsletter.png'
import portfolioImg from './assets/portfolio.png'
import sketchy from './assets/sketchy.png'
import './App.css'

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <h1>
      {text.split('').map((letter, index) => (
        <span key={index} className="letter">
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
};

interface CardProps {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  longDescription: string;
  technologies: string[];
  link?: string;
}

const ExpandableCard = ({ title, shortDescription, image, longDescription, technologies, link }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`card ${isExpanded ? 'card-expanded' : ''}`}
      onClick={handleCardClick}
    >
      <div className="card-content">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-caption">
          <h3>{title}</h3>
          <p>{shortDescription}</p>
          
          {isExpanded && (
            <div className="card-details">
              <p className="long-description">{longDescription}</p>
              <div className="technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              {link && (
                <a href={link} className="project-link" onClick={(e) => e.stopPropagation()}>
                  View Project →
                </a>
              )}
            </div>
          )}
          
          <div className="expand-indicator">
            {isExpanded ? '▲ Click to collapse' : '▼ Click for details'}
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} className="nav-logo-img" alt="logo" />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Contact = () => {

  return (
    <section id="contact" className="contact-section">
      <h2>Let's Connect!</h2>
      <div className="contact-card expanded">
        <div className="contact-info">
          <h4>Let's work together!</h4>
          <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about web development and creative projects.</p>
          
          <div className="availability">
            <h5>📍 Location:</h5>
            <p>Available for remote work worldwide</p>
            
            <h5>⏰ Availability:</h5>
            <p>Open to new projects and collaborations</p>
            
            <h5>💼 Interests:</h5>
            <p>Frontend Development • UI/UX Design • Creative Web Experiences</p>
          </div>
        </div>

        <div className="contact-details">
          <div className="social-links">
            <h4>Find me online:</h4>
              <div className="social-grid">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <div className="social-icon">💼</div>
                  <div className="social-text">
                    <span className="social-name">LinkedIn</span>
                    <span className="social-desc">Professional network</span>
                  </div>
                </a>
                
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <div className="social-icon">🐙</div>
                  <div className="social-text">
                    <span className="social-name">GitHub</span>
                    <span className="social-desc">Code repositories</span>
                  </div>
                </a>
                
                <a href="mailto:your.email@example.com" className="social-link email">
                  <div className="social-icon">📧</div>
                  <div className="social-text">
                    <span className="social-name">Email</span>
                    <span className="social-desc">Direct contact</span>
                  </div>
                </a>
                
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                  <div className="social-icon">�</div>
                  <div className="social-text">
                    <span className="social-name">Twitter</span>
                    <span className="social-desc">Latest updates</span>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Study Plan Maker",
      shortDescription: "Django web application for creating and managing study schedules",
      image: studyplanmaker,
      longDescription: "A comprehensive Django web application that helps students create, organize, and track their study plans. Features include personalized study schedules, progress tracking, deadline management, and study session analytics. Built with a clean, intuitive interface for optimal productivity.",
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
      link: "https://github.com/estellaaaa/Study_Plan_Maker"
    },
    {
      id: 2,
      title: "Newsletter System",
      shortDescription: "Automated newsletter management and distribution system built with Python",
      image: newsletter,
      longDescription: "A comprehensive newsletter management system developed in Python that automates email campaign creation, subscriber management, and content distribution. Features include template customization, analytics tracking, subscription handling, and automated scheduling for efficient newsletter operations.",
      technologies: ["Python", "Flask", "SQLAlchemy", "SMTP", "HTML/CSS"],
      link: "https://github.com/estellaaaa/Newsletter"
    },
    {
      id: 3,
      title: "Design Portfolio",
      shortDescription: "Creative design showcase featuring UI/UX projects and visual designs",
      image: portfolioImg,
      longDescription: "A comprehensive design portfolio showcasing my creative work in UI/UX design, visual branding, and digital graphics. Features interactive prototypes, design case studies, brand identity projects, and user experience research. Demonstrates proficiency in modern design tools and methodologies.",
      technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"],
      link: "https://express.adobe.com/page/T7bGFle8ANkGF"
    },
    {
      id: 4,
      title: "this is sketchy!",
      shortDescription: "Interactive Unity game featuring creative drawing and puzzle mechanics",
      image: sketchy,
      longDescription: "An engaging Unity-based game that combines drawing mechanics with puzzle-solving elements. Players create sketches that come to life within the game world, featuring physics-based interactions, creative level design, and intuitive touch controls. Built with Unity's 2D tools and custom scripting for a unique gaming experience.",
      technologies: ["Unity", "C#", "Unity 2D", "Physics2D", "Animation System"],
      link: "https://github.com/estellaaaa/this-is-sketchy"
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      {/* Background Decorations */}
      <div className="background-decorations">
        <img src={circle} className="bg-decoration circle-1" alt="" />
        <img src={star1} className="bg-decoration star-1" alt="" />
        <img src={star2} className="bg-decoration star-2" alt="" />
        <img src={circle} className="bg-decoration circle-2" alt="" />
        <img src={star1} className="bg-decoration star-3" alt="" />
        <img src={star2} className="bg-decoration star-4" alt="" />
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <AnimatedText text="Portfolio" />
        <div className="caption">
          <h2>
            hi i am estella and here u can see my projects :]
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="caption">
            <h2>
              a undergraduate student majoring in international media computer science @ htw berlin with a passion for creativity and coding
              currently working @ siemens energy as a working student
            </h2>
          </div>
          
          <div className="skills-section">
            <div className="caption">
              <h2>My Skills</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">Java</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">4/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">C#</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">4/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Python</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">3/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Maya</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">4/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">GLSL</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">3/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Adobe After Effects</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">3/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Adobe Illustrator</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">4/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">3/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevProject}>
            ←
          </button>
          
          <div className="cards-container">
            {projects.map((project, index) => {
              const position = (index - currentProjectIndex + projects.length) % projects.length;
              return (
                <div
                  key={project.id}
                  className={`card-wrapper ${position === 0 ? 'active' : ''} ${position === 1 ? 'next' : ''} ${position === projects.length - 1 ? 'prev' : ''}`}
                  style={{ transform: `translateX(${(position - 1) * 100}%)` }}
                >
                  <ExpandableCard
                    id={project.id}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    image={project.image}
                    longDescription={project.longDescription}
                    technologies={project.technologies}
                    link={project.link}
                  />
                </div>
              );
            })}
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={nextProject}>
            →
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  )
}

export default App
