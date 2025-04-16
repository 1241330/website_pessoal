'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);
    const [descriptionOpen1, setDescriptionOpen1] = useState(false);
    const [descriptionOpen2, setDescriptionOpen2] = useState(false);
    const [descriptionOpen3, setDescriptionOpen3] = useState(false);
    const [descriptionOpen4, setDescriptionOpen4] = useState(false);

    return (
        <>
            <Head>
                <title>Meu Portfólio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main
                className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen font-mono transition-colors duration-500`}>
                {/* Toggle Tema */}
                <div className="p-4 flex justify-end">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="rounded-full border p-2 hover:scale-110 transition"
                        aria-label="Alternar modo claro/escuro"
                    >
                        {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
                    </button>
                </div>

                {/* Hero */}
                <section className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">Olá, eu sou a Carlota!</h1>
                    <p className="text-xl mb-4">Estudante do 1º ano da licenciatura de Engenharia Informática</p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://github.com/1241330"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border rounded hover:bg-gray-200 hover:text-black transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/carlotamlemos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border rounded hover:bg-gray-200 hover:text-black transition"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>

                {/* Skills */}
                <section className="w-full max-w-4xl mx-auto mb-12 px-4">
                    <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Hard Skills</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        {[
                            'HTML',
                            'CSS',
                            'React',
                            'Next.js',
                            'Tailwind CSS',
                            'Python',
                            'Java',
                            'GitHub',
                            'Scrum',
                            'Wordpress',
                        ].map((skill, i) => (
                            <li key={i} className="bg-gray-200 text-black rounded-xl p-4 shadow-md">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Línguas */}

                <section className="w-full max-w-4xl mx-auto mb-12 px-4">
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
                <section className="w-full max-w-4xl mx-auto mb-12 px-4">
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
                <section className="w-full max-w-4xl mx-auto mb-12 px-4">
                    <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Projetos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Projeto 1 */}
                        <Projeto
                            title="Website Patrícia Bacelar Psicologia Clínica"
                            period="abr de 2024 - presente"
                            open={descriptionOpen1}
                            setOpen={setDescriptionOpen1}
                            description="O website da clínica Patrícia Bacelar Psicologia Clínica foi desenvolvido com o objetivo de oferecer uma experiência de navegação clara, intuitiva e humanizada, alinhada à identidade visual da clínica. Nele, os utilizadores encontram informações detalhadas sobre os serviços de psicologia clínica oferecidos, apresentação da Doutora Patrícia Bacelar, depoimentos de pacientes, além de uma galeria de imagens que evidencia o ambiente acolhedor do espaço físico da clínica.
                            Do ponto de vista técnico, o site foi construído com tecnologias modernas e responsivas, garantindo desempenho otimizado em diferentes dispositivos e navegadores."
                        />

                        {/* Projeto 2 */}
                        <Projeto
                            title="Projeto de Laboratório/Projeto I"
                            period="dez de 2024 - jan de 2025"
                            open={descriptionOpen2}
                            setOpen={setDescriptionOpen2}
                            description="No contexto da unidade curricular Laboratório/Projeto I, desenvolvi, juntamente com uma equipa de três colegas, uma aplicação centrada na reconstrução e identificação de imagens através da técnica de Eigenfaces. O projeto visou explorar métodos de decomposição de matrizes e aplicar algoritmos de reconhecimento de padrões em imagens digitais.
                            A aplicação inclui funcionalidades como a decomposição própria de matrizes simétricas, reconstrução de imagens com diferentes números de eigenfaces e identificação da imagem mais semelhante dentro de uma base de dados, com exportação dos resultados em CSV e JPG."
                            extra="Classificação final: 20 / 20"
                        />

                        {/* Projeto 3 */}
                        <Projeto
                            title="Website Núcleo de Estudantes de Informática do ISEP"
                            period="abr de 2024 - presente"
                            open={descriptionOpen3}
                            setOpen={setDescriptionOpen3}
                            description="Integro a equipa responsável pela reestruturação do site do NEI-ISEP. O objetivo deste projeto é melhorar a experiência do utilizador, focando-se na otimização da navegação e da acessibilidade, enquanto se preserva a identidade visual do núcleo."
                        />

                        {/* Projeto 4 */}
                        <Projeto
                            title="Projeto Integrador do 2º semestre 2024/2025"
                            period="mar de 2024 - presente"
                            open={descriptionOpen4}
                            setOpen={setDescriptionOpen4}
                            description="Projeto desenvolvido em equipa no âmbito das unidades curriculares LAPR2, ESOFT, PPROG, MATCP e MDISC, com o objetivo de criar uma solução que simula o funcionamento de redes ferroviárias. A aplicação permite editar mapas com cidades e indústrias, definir cenários com restrições históricas e tecnológicas, e simular o transporte de mercadorias e passageiros através de estações, linhas e comboios.
                            O projeto é desenvolvido com foco em boas práticas de engenharia de software, utilizando conceitos como TDD (Test-Driven Development), modularização e documentação. Também inclui um módulo de análise estatística, desenvolvido em Python utilizando Jupyter Notebook, permitindo avaliar o desempenho da rede ferroviária com base em dados reais."
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

function Projeto({title, period, open, setOpen, description, extra}: any) {
    return (
        <div className="bg-gray-200 text-black rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-m text-blue-400">{period}</p>
            {open && (
                <>
                    <p className="mt-2">{description}</p>
                    {extra && <p className="text-m text-blue-900 mt-2">{extra}</p>}
                </>
            )}
            <button
                onClick={() => setOpen(!open)}
                className="text-black mt-2"
                aria-expanded={open}
            >
                {open ? 'Fechar descrição' : 'Abrir descrição'}
            </button>
        </div>
    );
}
