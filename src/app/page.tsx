'use client';

import { useState } from 'react';
import Head from 'next/head';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Componente principal da Home
export default function Home() {
    const [descriptionOpen1, setDescriptionOpen1] = useState(false);
    const [descriptionOpen2, setDescriptionOpen2] = useState(false);
    const [descriptionOpen3, setDescriptionOpen3] = useState(false);
    const [descriptionOpen4, setDescriptionOpen4] = useState(false);

    return (
        <>
            <Head>
                <title>Portfólio</title>
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
                <section className="text-center mb-12" id="inicio">
                    <h1 className="text-5xl font-bold mt-30 mb-4">Olá, eu sou a Carlota!</h1>
                    <p className="text-xl mt-4 mb-4">Estudante do 1º ano da licenciatura de<span className="text-purple-400"> Engenharia
                        Informática</span></p>
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
                            href="/cv_atualizado.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border rounded hover:bg-green-400 hover:text-black transition"
                        >
                            CV
                        </a>
                    </div>
                </section>

                {/* Sobre mim */}
                <section className="w-full max-w-4xl mx-auto mb-12 px-4" id="sobre">
                    <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Sobre mim</h2>
                    <p className="text-lg leading-relaxed text-justify">
                        Atualmente, sou estudante do 1º ano da licenciatura de Engenharia Informática no Instituto Superior de Engenharia do Porto.
                        Desde cedo, desenvolvi um gosto particular pelo desenvolvimento <span className="text-purple-400 font-semibold">front-end</span>,
                        área onde encontrei uma combinação perfeita entre criatividade e tecnologia. A minha integração no
                        <span className="font-semibold text-cyan-400"> Núcleo de Estudantes de Engenharia Informática do ISEP (NEI-ISEP)</span> representou uma oportunidade valiosa,
                        não só por me permitir colaborar com colegas em projetos reais, mas também por me ter proporcionado a aprendizagem
                        de uma nova linguagem de programação.
                        <br /><br />
                        Tenho um interesse constante em expandir os meus horizontes técnicos, o que me levou a descobrir o universo da
                        <span className="text-blue-800 font-semibold"> cibersegurança</span> — uma área que tem despertado a minha curiosidade e na qual pretendo investir mais no futuro.
                        <br /><br />
                        Para além da vertente académica e tecnológica, o <span className="font-semibold">desporto</span> ocupa um lugar fundamental na minha vida.
                        Fui atleta federada na <span className="font-semibold">Federação Portuguesa de Surf</span> durante cerca de cinco anos,
                        experiência que me marcou profundamente e fortaleceu o meu espírito de disciplina e superação. Apesar de já não competir, continuo a integrar o desporto no meu dia a dia,
                        sendo algo essencial no meu estilo de vida, com especial interesse por <span className="font-semibold">desportos radicais</span>, que me desafiam física e mentalmente.
                        <br /><br />
                        Sou uma pessoa <span className="text-green-400 font-semibold">proativa</span>, com facilidade em <span className="text-green-400 font-semibold"> trabalhar em equipa</span>, e que procura
                        sempre <span className="text-green-400 font-semibold"> evoluir</span>. Acredito na
                        importância da colaboração, da comunicação e da partilha de conhecimento como pilares essenciais para crescer enquanto profissional. Estou entusiasmada com o que o futuro reserva e
                        aberta a oportunidades que me permitam continuar a desenvolver competências técnicas e pessoais, especialmente nas áreas de desenvolvimento web e cibersegurança.
                    </p>
                </section>

                {/* Skills */}
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
                            'Wordpress',
                            'Latex',
                            'Microsoft Word',
                            'Mircrosoft Exel',
                            'Microsoft Powerpoint',
                            'macOS',
                            'Windows',
                        ].map((skill, i) => (
                            <li key={i} className="bg-gray-200 text-black rounded-xl p-4 shadow-md">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Línguas */}
                <section className="w-full max-w-4xl mx-auto mb-12 px-4" id="linguas">
                    <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Línguas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            {idioma: 'Português', nivel: 'Nativo', cor: 'bg-green-200'},
                            {idioma: 'Inglês', nivel: 'Avançado (B2)', cor: 'bg-blue-200'},
                            {idioma: 'Espanhol', nivel: 'Básico (A2)', cor: 'bg-yellow-200'},
                        ].map((lingua, i) => (
                            <div
                                key={i}
                                className={`rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105 ${lingua.cor} text-black`}
                            >
                                <h3 className="text-xl font-bold mb-2">{lingua.idioma}</h3>
                                <p className="text-md">{lingua.nivel}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline */}
                <section className="w-full max-w-4xl mx-auto mb-12 px-4" id="timeline">
                    <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Timeline</h2>
                    <div className="relative border-l-4 border-neutral-700 pl-6 space-y-10">
                        {[
                            {
                                title: '11 de abril de 2025 - 14 de abril de 2025',
                                desc: 'Participação no Encontro Nacional de Estudantes de Engenharia Informática',
                                loc: 'Instituto Superior de Engenharia do Porto & Faculdade de Engenharia da Universidade do Porto',
                                city: 'Porto, Portugal',
                                cert: true,
                                image: 'enei_logo.jpeg',
                            },
                            {
                                title: 'out de 2024 - presente',
                                desc: 'Membro do Núcleo de Estudantes de Informática do ISEP (NEI-ISEP)',
                                loc: 'Instituto Superior de Engenharia do Porto',
                                city: 'Porto, Portugal',
                                image: 'nei_logo.png',
                            },
                            {
                                title: 'set de 2024 - presente',
                                desc: 'Licenciatura de Engenharia Informática',
                                loc: 'Instituto Superior de Engenharia do Porto',
                                city: 'Porto, Portugal',
                                grade: 'Média Atual: 14 / 20',
                                image: 'isep_logo.png',
                            },
                            {
                                title: 'set de 2021 - jun de 2024',
                                desc: 'Ensino Secundário na área de Economia',
                                loc: 'Escola Secundária de Santa Maria Maior',
                                city: 'Viana do Castelo, Portugal',
                                grade: 'Nota final: 17.8 / 20',
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
                                    <p className="text-sm text-gray-400">{item.city}</p>
                                    {item.grade && (
                                        <p className="text-sm text-gray-300 mt-2">{item.grade}</p>
                                    )}
                                    {item.cert && (
                                        <a href="#" className="text-sm text-blue-400 underline mt-2 inline-block">
                                            Certificado de Participação
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projetos */}
                <section className="w-full max-w-4xl mx-auto mb-12 px-4" id="projetos">
                    <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Projetos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Projeto 1 */}
                        <Projeto
                            title="Website Patrícia Bacelar Psicologia Clínica"
                            period="abr de 2024 - presente"
                            open={descriptionOpen1}
                            setOpen={setDescriptionOpen1}
                            description="O website da clínica Patrícia Bacelar Psicologia Clínica está a ser desenvolvido com o objetivo de oferecer uma experiência de navegação clara e intuitiva, alinhada à identidade visual da clínica. Nele, os utilizadores encontram informações detalhadas sobre os serviços de psicologia clínica oferecidos, apresentação da Doutora Patrícia Bacelar, depoimentos de pacientes, além de uma galeria de imagens que evidencia o ambiente acolhedor do espaço físico da clínica."
                            github="https://github.com/1241330/website_patricia_bacelar_psicologia"
                        />

                        {/* Projeto 2 */}
                        <Projeto
                            title="Website NEI-ISEP"
                            period="dez de 2024 - jan de 2025"
                            open={descriptionOpen2}
                            setOpen={setDescriptionOpen2}
                            description="Integro a equipa responsável pela reestruturação do site do Núcleo de Estudantes de Informática do ISEP. O objetivo deste projeto é melhorar a experiência do utilizador, focando-se na otimização da navegação e da acessibilidade, enquanto se preserva a identidade visual do núcleo."
                            github="https://github.com/1241330"
                        />

                        {/* Projeto 3 */}
                        <Projeto
                            title="Projeto de Laboratório/Projeto I"
                            period="dez de 2024 - jan de 2025"
                            open={descriptionOpen3}
                            setOpen={setDescriptionOpen3}
                            description="No contexto da unidade curricular Laboratório/Projeto I, desenvolvi, juntamente com uma equipa de três colegas, uma aplicação em Java centrada na reconstrução e identificação de imagens através da técnica de Eigenfaces.
                            O projeto teve como classificação final, a nota máxima, 20 /20."
                            github="https://github.com/1241330/projeto_LAPR1"
                        />

                        {/* Projeto 4 */}
                        <Projeto
                            title="Projeto Integrador do 2º semestre 2024/2025"
                            period="mar de 2024 - presente"
                            open={descriptionOpen4}
                            setOpen={setDescriptionOpen4}
                            description="Projeto desenvolvido em equipa no âmbito das unidades curriculares LAPR2, ESOFT, PPROG, MATCP e MDISC, com o objetivo de criar uma solução que simula o funcionamento de redes ferroviárias."
                            github="https://github.com/1241330"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

// Componente Projeto
function Projeto({ title, period, open, setOpen, description, github }: any) {
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
                {open ? 'Mostrar Menos' : 'Descrição'}
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
