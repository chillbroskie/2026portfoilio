import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {


    return (

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center"> 
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Movie search
                            </h3>
                            <p className="text-gray-400 mb-3">
                            Similar site to IMDB used to search movie title names of old forgetten movies that your sorta remember the name for! 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {["React", "API", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 mx-1 py-1 px-3 
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                        >
                                            {tech}        
                                        </span>
                                ))}
                            </div>
                            <div className="flex justifiy-between items-center gap-6">
                                <a href="https://movelandpractice.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡️</a>
                                <a href="https://github.com/chillbroskie/react-jsm-movie-practice" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                            
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                React Budget Expense Tracker
                            </h3>
                            <p className="text-gray-400 mb-3">
                            Using custom hooks to add and store new /current expense's with the bootstrap pillbox styling. The application includes separation by category and a default uncategorized. 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {["React", "Hooks", "Custom Hooks", "BootStrap"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 mx-1 py-1 px-3 
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                        >
                                            {tech}        
                                        </span>
                                ))}
                            </div>
                            <div className="flex justifiy-between items-center gap-6">
                                <a href="https://react-budget-app-practice.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡️</a>
                                <a href="https://github.com/chillbroskie/react-crud-app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                            
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Worlde Game Clone
                            </h3>
                            <p className="text-gray-400 mb-3">
                            The game that took the internet by storm, in this cloned version we make use of Grid and CSS animation through JavaScript. 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {["HTML", "JavaScript", "CSS", "Grid"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 mx-1 py-1 px-3 
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                        >
                                            {tech}        
                                        </span>
                                ))}
                            </div>
                            <div className="flex justifiy-between items-center gap-6">
                                <a href="https://wordle-clone-yt.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡️</a>
                                <a href="https://github.com/chillbroskie/wordle-clone" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                            
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Flappy Bird Web Clone
                            </h3>
                            <p className="text-gray-400 mb-3">
                            Cloned web version of the once world-wide popular phone game Flappy Bird. This simple cloned version makes use of a cleanup to remove appended 'pipes' for self cleanup of the code. 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {["HTML", "JavaScript", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 mx-1 py-1 px-3 
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                        >
                                            {tech}        
                                        </span>
                                ))}
                            </div>
                            <div className="flex justifiy-between items-center gap-6">
                                <a href="https://flappybirdpractice.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡️</a>
                                <a href="https://github.com/chillbroskie/flappyBird-JS" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                            
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                CSS-Carousel Animation
                            </h3>
                            <p className="text-gray-400 mb-3">
                            Practice creating a simple and pleasant fading animation for a carousel. 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {["HTML", "JavaScript", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 mx-1 py-1 px-3 
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                        >
                                            {tech}        
                                        </span>
                                ))}
                            </div>
                            <div className="flex justifiy-between items-center gap-6">
                                <a href="https://css-carousel-practice.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡️</a>
                                <a href="https://github.com/chillbroskie/css-carousel" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                            
                        </div>
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Todo List
                            </h3>
                            <p className="text-gray-400 mb-3">
                            JavaScript Todo list that allows you to create, read, update, and delete a appended div. 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {["HTML", "JavaScript", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 mx-1 py-1 px-3 
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                        >
                                            {tech}        
                                        </span>
                                ))}
                            </div>
                            <div className="flex justifiy-between items-center gap-6">
                                <a href="https://js-basic-todo-list.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ➡️</a>
                                <a href="https://github.com/chillbroskie/js-todo-list" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    <FaGithub size={24} />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>

    );


}