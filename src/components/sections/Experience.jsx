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
                            Graduate with an AAS: of Computer Programming,
                            well versed with Java, Python, JavaScript, React, PHP and MySQL.
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
                            <ul className="list-disc list0inside text-gray-300 space-y-3">
                                <li>
                                    <strong>A.A.S in Computer Technology of Programming </strong> - Westmoreland County Community College(2024-2026)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Web Development, Mobile Development
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">📈 Work Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Dispatch and Operation Manager at UPS (2015-2022) </h4>
                                    <p> Led high-volume distribution hub logistics by synchronizing yard control, trailer workflows, and package handler operations. 
                                        Driven by a commitment to efficiency, I restructured communication channels between hub staff and drivers to eliminate transit delays, maximizing daily throughput while maintaining a strict culture of safety compliance and emergency response readiness. 
                                        This role relied entirely on cohesive teamwork; by fostering cross-departmental collaboration, we ensured complex logistical data was translated into seamless, accident-free daily operations.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Team Leader at FedEx Ground (2022-present) </h4>
                                    <p>
                                        Executed critical, time-sensitive physical logistics within a high-volume warehouse environment, ensuring the accurate sorting and loading of diverse shipments. 
                                        This role required peak physical conditioning, sharp spatial awareness, and a steadfast dedication to safety protocols to prevent workplace hazards. 
                                        Operating as a core member of a fast-moving terminal team, I relied on seamless, real-time collaboration with colleagues to maintain an efficient, uninterrupted supply chain pipeline under demanding deadlines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </RevealOnScroll>
        </section>

    );

}