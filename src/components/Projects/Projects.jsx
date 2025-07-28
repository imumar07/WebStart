import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projectsImage from "../../assets/serv.jpg"; // replace with your actual image

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A professional portfolio built with WordPress, optimized for SEO and branding, with a custom domain and reliable hosting setup.",
tech: ["WordPress", "Domain", "Hosting", "SEO", "Branding"],

      link: "https://drkhalidhakeem.com/",
    },
    {
      title: "Portfolio Website",
      description: "A professional portfolio built with WordPress, featuring SEO optimization, strong branding, custom domain, reliable hosting, and integrated social media presence.",
tech: ["WordPress", "Domain", "Hosting", "SEO", "Branding", "Social Media"],

      link: "https://learnwithibrar.com/",
    },
    {
      title: "College Website",
      description: "A responsive college website built with HTML, CSS, JavaScript, jQuery, and Bootstrap, featuring clean UI, smooth navigation, and informative content sections.",
      tech: ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap",],
      link: "https://srivasaviengg.ac.in/",
    },
    // {
    //   title: "Streamlit Dashboard",
    //   description: "Interactive GitHub repo dashboard built using Python and Streamlit.",
    //   tech: ["Python", "Streamlit"],
    //   link: "#",
    // },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950 font-body" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16 mt-24 mb-24">


        {/* Section Heading */}
        <div data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Recent Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of work that reflects my experience in full-stack development, UI design, and automation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 text-left"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-heading">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
