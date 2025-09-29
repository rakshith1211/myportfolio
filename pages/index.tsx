import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Home() {
  const skills = [
    'Python', 'Java', 'C (Basic)', 'JavaScript (Basic)', 'R Programming',
    'HTML', 'CSS', 'MySQL',
    'Jupyter Notebook', 'VS Code', 'Burp Suite', 'Wireshark'
  ]

  const [repos, setRepos] = useState([])

  
  useEffect(() => {
    fetch('https://api.github.com/users/rakshith1211/repos')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        setRepos(filtered)
      })
  }, [])

  return (
    <Layout>
      <Header />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-white to-blue-100"
      >
        <div className="absolute inset-0 bg-grid-slate-200/50 -z-10"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mx-auto md:mx-0">
              <Image 
                src="/profile.jpg" 
                alt="Samala Rakshith Babu" 
                width={176} 
                height={176} 
                className="object-cover"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Samala Rakshith Babu</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
              Final-year <span className="font-semibold text-blue-600">B.Tech Data Science student</span> passionate 
              about Machine Learning, Python, and building impactful projects.  
              I love turning data into meaningful insights and developing modern web applications.
            </p>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-colors"
            >
              View My Work
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">GitHub Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <div 
                key={repo.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{repo.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      GitHub →
                    </a>
                    {repo.homepage && (
                      <a 
                        href={repo.homepage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 font-medium hover:text-green-800 transition-colors"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div 
                key={skill} 
                className="px-6 py-3 bg-white text-gray-800 rounded-xl shadow hover:bg-blue-600 hover:text-white transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing <span className="text-blue-400">internships</span>, 
            <span className="text-blue-400"> job opportunities</span>, or collaborating on exciting projects.
          </p>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samalarakshithbabu2005@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/samala-rakshith-babu-9374ab281/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/rakshith1211" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-950 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Samala Rakshith Babu. Built with ❤️ using Next.js & TailwindCSS.</p>
      </footer>
    </Layout>
  )
}
