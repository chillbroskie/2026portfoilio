import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {


    const frontendSkills = ["React", "TailwindCSS", "HTML", "CSS", "TypeScript"];
    const backendSkills = ["Python", "Java", "MySQL", "PHP", "Node.js"];

    return (

        <section id="experience" className="min-h-screen items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm a Full-Stack Developer with a background in software development, operations, and team leadership. 
                            I recently earned an Associate of Applied Science in Computer Technology – Programming, where I developed a strong foundation in software development, databases, object-oriented programming, and modern web technologies.

                            Before transitioning into software development, I spent years working in logistics and operations leadership at UPS and FedEx Ground. 
                            These experiences strengthened my problem-solving, communication, leadership, and teamwork skills while teaching me how to manage complex workflows, make decisions under pressure, and work effectively in fast-paced environments.

                            I combine that professional experience with my passion for technology to build responsive, user-focused web applications. 
                            I work with technologies including React, JavaScript, Python, Java, PHP, MySQL, C++, HTML, and CSS, and I enjoy continuously learning new tools and technologies to improve my development skills.

                            Whether I'm building a website, developing an application, or solving a technical problem, I bring the same focus on efficiency, collaboration, and delivering a quality result.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                                        >
                                            {tech}        
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                                rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                                        >
                                            {tech}        
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>

                            <ul className="list-disc list-inside text-gray-300 space-y-3">
                                <li>
                                    <span className="font-semibold text-blue-400">
                                        A.A.S. in Computer Technology – Programming
                                    </span>
                                    <br />
                                    Westmoreland County Community College (2024–2026)
                                </li>

                                <li>
                                    <span className="font-semibold text-blue-400">
                                        Relevant Coursework:
                                    </span>
                                    <br />
                                    Data Structures, Web Development, Mobile Development
                                </li>
                            </ul>

                            <div className="mt-6">
                                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                                    📜 Certifications
                                </h4>

                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Responsive Web Design – freeCodeCamp</li>
                                    <li>JavaScript Algorithms & Data Structures – freeCodeCamp</li>
                                    <li>Currently pursuing additional React and Full-Stack certifications.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6">

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-2">💻 Freelance Developer</h3>
                                <p className="text-blue-400 text-sm mb-4">
                                    Self-Employed • 2025–Present
                                </p>

                                <p className="text-gray-300">
                                    Develop personal and freelance web applications using React, JavaScript,
                                    HTML, CSS, and Node.js. Work directly with clients to understand project
                                    requirements, build responsive user interfaces, and deploy modern websites
                                    while continuously expanding my full-stack development skills.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-2">🚚 FedEx Ground</h3>
                                <p className="text-blue-400 text-sm mb-4">
                                    Team Leader • 2022–Present
                                </p>

                                <p className="text-gray-300">
                                    Executed critical, time-sensitive physical logistics within a
                                    high-volume warehouse environment, ensuring the accurate sorting
                                    and loading of diverse shipments. This role required peak physical
                                    conditioning, sharp spatial awareness, and a steadfast dedication
                                    to safety protocols to prevent workplace hazards. Operating as a
                                    core member of a fast-moving terminal team, I relied on seamless,
                                    real-time collaboration with colleagues to maintain an efficient,
                                    uninterrupted supply chain pipeline under demanding deadlines.
                                </p>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-2">📈 UPS</h3>
                                <p className="text-blue-400 text-sm mb-4">
                                    Dispatch & Operations Manager • 2015–2022
                                </p>

                                <p className="text-gray-300">
                                    Led high-volume distribution hub logistics by synchronizing yard control,
                                    trailer workflows, and package handler operations. Driven by a commitment
                                    to efficiency, I restructured communication channels between hub staff
                                    and drivers to eliminate transit delays, maximizing daily throughput
                                    while maintaining a strict culture of safety compliance and emergency
                                    response readiness. This role relied entirely on cohesive teamwork;
                                    by fostering cross-departmental collaboration, we ensured complex
                                    logistical data was translated into seamless, accident-free daily operations.
                                </p>
                            </div>


                        </div>
                    </div>


                </div>
            </RevealOnScroll>
        </section>

    );

}