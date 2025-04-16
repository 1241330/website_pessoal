'use client';

import { useState } from 'react';
import Head from 'next/head';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


export default function Home() {
    const [descriptionOpen1, setDescriptionOpen1] = useState(false);
    const [descriptionOpen2, setDescriptionOpen2] = useState(false);
    const [descriptionOpen3, setDescriptionOpen3] = useState(false);
    const [descriptionOpen4, setDescriptionOpen4] = useState(false);

    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Navbar />

            <main
                className="bg-black text-white min-h-screen font-mono transition-colors duration-500">
                {/* Hero */}
                <section className="text-center" id="start">
                    <h1 className="text-5xl font-bold mt-35 mb-4">Hello, I am Carlota!</h1>
                    <p className="text-xl mt-4 mb-4">First-year student of <span className="text-purple-400">Computer Engineering</span></p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://github.com/1241330"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border rounded hover:bg-purple-400 hover:text-black transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/carlotamlemos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border rounded hover:bg-blue-400 hover:text-black transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="/updated_cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border rounded hover:bg-green-400 hover:text-black transition"
                        >
                            CV
                        </a>
                    </div>
                </section>

                {/* About Me */}
                <section className="w-full max-w-4xl mx-auto px-4" id="about">
                    <h2 className="text-3xl font-semibold mt-0 mb-6 border-b pb-2">About Me</h2>
                    <p className="text-lg leading-relaxed text-justify">
                        Currently, I am a first-year student of Computer Engineering at the Higher Institute of Engineering of Porto.
                        From an early age, I developed a particular interest in <span className="text-purple-400 font-semibold">front-end</span> development,
                        a field where I found a perfect combination of creativity and technology. My involvement in the
                        <span className="font-semibold text-cyan-400"> Computer Engineering Students' Association of ISEP (NEI-ISEP)</span> was a valuable opportunity,
                        not only for allowing me to collaborate with peers on real projects but also for providing me with the learning
                        of a new programming language.
                        <br /><br />
                        I am constantly interested in expanding my technical horizons, which led me to discover the world of
                        <span className="text-blue-800 font-semibold"> cybersecurity</span> — a field that has sparked my curiosity, and one I plan to invest more in the future.
                        <br /><br />
                        Beyond the academic and technological aspect, <span className="font-semibold">sports</span> play an essential role in my life.
                        I was a federated athlete in the <span className="font-semibold">Portuguese Surf Federation</span> for about five years,
                        an experience that deeply marked me and strengthened my spirit of discipline and perseverance. Although I no longer compete, I continue to incorporate sports into my daily life,
                        making it an essential part of my lifestyle, with a particular interest in <span className="font-semibold">extreme sports</span>, which challenge me both physically and mentally.
                        <br /><br />
                        I am a <span className="text-green-400 font-semibold">proactive</span> person, with ease in <span className="text-green-400 font-semibold">working in teams</span>, and always looking to <span className="text-green-400 font-semibold">grow</span>. I believe in
                        the importance of collaboration, communication, and sharing knowledge as essential pillars for growing as a professional. I am excited about what the future holds and
                        open to opportunities that allow me to continue developing both technical and personal skills, especially in the areas of web development and cybersecurity.
                    </p>
                </section>

                {/* Hard Skills */}
                <section className="w-full max-w-4xl mx-auto mb-12 px-4" id="hard-skills">
                    <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Hard Skills</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        {[
                            'HTML',
                            'CSS',
                            'TypeScript',
                            'React',
                            'Next.js',
                            'Tailwind CSS',
                            'Python',
                            'Java',
                            'UML',
                            'GitHub',
                            'Scrum',
                            'WordPress',
                            'Latex',
                            'Microsoft Word',
                            'Microsoft Excel',
                            'Microsoft PowerPoint',
                            'macOS',
                            'Windows',
                        ].map((skill, i) => (
                            <li key={i} className="bg-gray-200 text-black rounded-xl p-4 shadow-md">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Languages */}
                <section className="w-full max-w-4xl mx-auto mb-12 px-4" id="languages">
                    <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Languages</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            {language: 'Portuguese', level: 'Native', colour: 'bg-green-200'},
                            {language: 'English', level: 'Advanced (B2)', colour: 'bg-blue-200'},
                            {language: 'Spanish', level: 'Basic (A2)', colour: 'bg-yellow-200'},
                        ].map((language, i) => (
                            <div
                                key={i}
                                className={`rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 ${language.colour} text-black`}
                            >
                                <h3 className="text-xl font-bold mb-2">{language.language}</h3>
                                <p className="text-md">{language.level}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline */}
                <section className="w-full max-w-4xl mx-auto px-4" id="timeline">
                    <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Timeline</h2>
                    <div className="relative border-l-4 border-neutral-700 pl-6 space-y-10">
                        {[
                            {
                                title: '11th April 2025 - 14th April 2025',
                                desc: 'Participation in the National Meeting of Computer Engineering Students',
                                loc: 'Higher Institute of Engineering of Porto & Faculty of Engineering of the University of Porto',
                                cert: true,
                                image: 'enei_logo.jpeg',
                            },
                            {
                                title: 'October 2024 - Present',
                                desc: 'Member of the "Núcleo de Estudantes de Informática do ISEP (NEI-ISEP)"',
                                loc: 'Instituto Superior de Engenharia do Porto',
                                image: 'nei_logo.png',
                            },
                            {
                                title: 'September 2024 - Present',
                                desc: 'Bachelor’s in Computer Engineering',
                                loc: 'Instituto Superior de Engenharia do Porto',
                                image: 'isep_logo.png',
                            },
                            {
                                title: 'September 2021 - June 2024',
                                desc: 'Secondary School in Economics',
                                loc: 'Escola Secundária de Santa Maria Maior',
                                grade: 'Final Grade: 17.8 / 20',
                                image: 'liceu_logo.png',
                            },
                        ].map((item, i) => (
                            <div key={i} className="relative pl-8">
                                {/* Image */}
                                <div className="absolute -left-[42px] top-[14px] flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt="Icon"
                                        className="w-8 h-8 rounded-full"
                                    />
                                </div>
                                {/* Card */}
                                <div className="bg-neutral-900 rounded-xl p-4 shadow-md">
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="text-base text-gray-200 mt-1">{item.desc}</p>
                                    <p className="text-sm text-gray-400 mt-2">{item.loc}</p>
                                    {item.grade && (
                                        <p className="text-sm text-gray-300 mt-2">{item.grade}</p>
                                    )}
                                    {item.cert && (
                                        <a href="#" className="text-sm text-blue-400 underline mt-2 inline-block">
                                            Participation Certificate
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="w-full max-w-4xl mx-auto mb-12 px-4" id="projects">
                    <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <Project
                            title="Patrícia Bacelar Psicologia Clínica Website"
                            period="April 2024 - Present"
                            open={descriptionOpen1}
                            setOpen={setDescriptionOpen1}
                            description="The website for the Patrícia Bacelar Psicologia Clínica is being developed with the goal of providing a clear and intuitive browsing experience, aligned with the clinic's visual identity. It offers users detailed information about the clinical psychology services, introduces Dr. Patrícia Bacelar, displays patient testimonials, and features a gallery that highlights the clinic’s welcoming physical environment."
                            github="https://github.com/1241330/website_patricia_bacelar_psicologia"
                        />

                        {/* Project 2 */}
                        <Project
                            title="NEI-ISEP Website"
                            period="December 2024 - January 2025"
                            open={descriptionOpen2}
                            setOpen={setDescriptionOpen2}
                            description="I am part of the team responsible for restructuring the website of the Núcleo de Estudantes de Engenharia do Porto. This project aims to enhance the user experience by focusing on improving navigation and accessibility while preserving the association’s visual identity."
                            github="https://github.com/1241330"
                        />

                        {/* Project 3 */}
                        <Project
                            title="Laboratory/Project I"
                            period="December 2024 - January 2025"
                            open={descriptionOpen3}
                            setOpen={setDescriptionOpen3}
                            description="As part of the Laboratory/Project I course, I, along with three colleagues, developed a Java application focused on the reconstruction and identification of images using the Eigenfaces technique. The project received the highest possible grade, 20 /20."
                            github="https://github.com/1241330/projeto_LAPR1"
                        />

                        {/* Project 4 */}
                        <Project
                            title="Integrator Project 2nd semester 2024/2025"
                            period="March 2024 - Present"
                            open={descriptionOpen4}
                            setOpen={setDescriptionOpen4}
                            description="A team project developed in the context of the LAPR2, ESOFT, PPROG, MATCP, and MDISC courses, aiming to create a solution that simulates the operation of railway networks."
                            github="https://github.com/1241330"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

// Project Component
function Project({ title, period, open, setOpen, description, github }: any) {
    return (
        <div className="bg-gray-200 text-black rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-m text-blue-600">{period}</p>
            {open && (
                <p className="text-gray-700 mt-2 text-sm">{description}</p>
            )}
            <button
                onClick={() => setOpen(!open)}
                className="mt-4 text-sm text-black font-bold underline"
            >
                {open ? 'Show Less' : 'Description'}
            </button>
            <div className="flex justify-start mt-4">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border rounded hover:bg-purple-400 hover:text-black transition text-sm"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}
