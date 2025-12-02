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
            <button onClick={() => scrollToSection('about')} className="nav-link">About me</button>
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
          <p>I'm actively looking for an internship opportunity and always open to discussing new projects, collaborations, or just having a chat about web development, game development, or anything involving computer graphics.</p>
          
          <div className="availability">
            <h5>Availability:</h5>
            <p>Actively seeking internship opportunities</p>
          </div>
        </div>

        <div className="contact-details">
          <div className="social-links">
            <h4>Find me online:</h4>
              <div className="social-grid">
                <a href="https://www.linkedin.com/in/estella-kinzel" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <div className="social-icon">💼</div>
                  <div className="social-text">
                    <span className="social-name">LinkedIn</span>
                    <span className="social-desc">Professional network</span>
                  </div>
                </a>
                
                <a href="https://github.com/estellaaaa" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <div className="social-icon">🐙</div>
                  <div className="social-text">
                    <span className="social-name">GitHub</span>
                    <span className="social-desc">Code repositories</span>
                  </div>
                </a>
                
                <a href="mailto:estella.kinzel@gmail.com" className="social-link email">
                  <div className="social-icon">📧</div>
                  <div className="social-text">
                    <span className="social-name">Email</span>
                    <span className="social-desc">Direct contact</span>
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
      longDescription: "A Django web application that helps students organize their study plans efficiently. Students can add courses they want to study for, setting different options like study intensity and optional days. The application then automatically creates a fitting schedule that accommodates all courses. Through Google Calendar API integration, users can log in and directly add their generated study sessions to their personal calendar.",
      technologies: ["Django", "Python", "PostgreSQL", "Google Calendar API", "HTML/CSS", "JavaScript"],
      link: "https://github.com/estellaaaa/Study_Plan_Maker"
    },
    {
      id: 2,
      title: "Newsletter System",
      shortDescription: "Simple Python newsletter program with turtle-based UI",
      image: newsletter,
      longDescription: "A simple Python program that helps send newsletters to subscribers. Built with Python's turtle graphics for the user interface, it allows you to load subscriber email addresses from a CSV file and type your message in a text field to send to all subscribers. A straightforward tool that demonstrates basic file handling and email functionality.",
      technologies: ["Python", "Turtle Graphics", "CSV", "Email/SMTP", "File I/O"],
      link: "https://github.com/estellaaaa/Newsletter"
    },
    {
      id: 3,
      title: "Design Portfolio",
      shortDescription: "Creative design showcase featuring different design projects",
      image: portfolioImg,
      longDescription: "A collection of smaller creative projects including graphic design work, brand identity experiments, and social media content. This portfolio features various design explorations, video content creation, and visual materials developed for different platforms and purposes. Each project has been an opportunity to experiment with different design approaches and visual storytelling.",
      technologies: ["Adobe Creative Suite", "Procreate", "Video Editing", "Social Media Design"],
      link: "https://express.adobe.com/page/T7bGFle8ANkGF"
    },
    {
      id: 4,
      title: "this is sketchy!",
      shortDescription: "Unity RPG game project with creative design elements",
      image: sketchy,
      longDescription: "An ongoing small Unity RPG game project where I've been exploring game development. This project has been a great way to collect experiences in game development and learn about design workflows. The visual elements and character designs were created using Procreate, while I've been experimenting with RPG mechanics and interactions in Unity with C#.",
      technologies: ["Unity", "C#", "Procreate", "Game Design", "2D Graphics"],
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
                  <span className="skill-name">Java, C#, C++</span>
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
                  <span className="skill-name">Python, JS</span>
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
                  <span className="skill-name">SQL</span>
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
                  <span className="skill-name">Node, Django</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">3/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Git</span>
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
                  <span className="skill-name">Unity, Maya, Blender</span>
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
                  <span className="skill-name">Adobe Tools</span>
                  <div className="skill-scale">
                    <div className="scale-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <span className="skill-level">3/5</span>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Power Apps, Mendix, Snowflake</span>
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
