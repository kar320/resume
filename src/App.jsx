// All of your previous React code from 'kara_ireland_portfolio.jsx' goes here.
// I have copied it for you.
import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// --- SVG Icons ---
const MailIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const LinkedinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className={className}>
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
);

const LightbulbIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.625a6.01 6.01 0 00-1.5 11.625zm0 0V21" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6.01 6.01 0 001.5-11.625m-1.5 11.625a6.01 6.01 0 01-1.5-11.625m1.5 11.625v2.25m-1.5-11.625a6.01 6.01 0 00-1.5 11.625m1.5-11.625V6.375" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.75a3 3 0 003 0m3 0a3 3 0 00-3 0m0 0v2.25m0-9v-.375c0-.621.504-1.125 1.125-1.125h.75c.621 0 1.125.504 1.125 1.125v.375m-3 0V6.375m0 9.375a3 3 0 01-3 0m0 0V9.375m0 6.375a3 3 0 00-3 0" />
    </svg>
);

const DocumentChartBarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h3.75c.621 0 1.125.504 1.125 1.125v6.75C9 20.496 8.496 21 7.875 21h-3.75A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-3.75a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-3.75a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

const UserGroupIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM10.5 4.875a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM3 13.5a9 9 0 001.034 4.108l.62 1.082a.75.75 0 001.266-.723V15.75a3 3 0 013-3h1.5" />
    </svg>
);

const StarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);

const ChatBubbleLeftRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72-3.72a1.5 1.5 0 00-2.122 0l-3.72 3.72a1.5 1.5 0 00-2.122 0l-3.72-3.72a1.5 1.5 0 00-2.122 0L2.25 15.217V8.511c0-.97.616-1.813 1.5-2.097l5.25-1.681c.246-.079.512-.079.758 0l5.25 1.681z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.653c.884-.284 1.5-1.128 1.5-2.097V3.511c0-1.136.847-2.1 1.98-2.193l3.72 3.72a1.5 1.5 0 002.122 0l3.72-3.72C18.653 1.41 19.5 2.375 19.5 3.511v.044c0 .97-.616 1.813-1.5 2.097l-5.25 1.681a.75.75 0 01-.758 0l-5.25-1.681z" />
    </svg>
);


// --- Data ---
const portfolioData = {
    name: "Kara Ireland",
    title: "Product Manager",
    location: "Boulder, CO",
    email: "karaireland@google.com",
    linkedin: "https://www.linkedin.com/in/kara-ireland/",
    summary: "From Technical Writer to Product Manager, I thrive on untangling complex user problems and shipping high-impact solutions. My unique background gives me deep developer empathy and a passion for crafting clear, data-driven product strategies. I excel at leading cross-functional teams to navigate ambiguity and deliver products that users love, especially in the AI and developer ecosystem spaces.",
    careerTrajectory: [
        {
            role: "100% PM Rotator, Workspace Ecosystem",
            duration: "Feb 2025 - Sep 2025",
            description: "Led critical initiatives for Google Workspace Flows and the developer ecosystem, focusing on extensibility, collaboration, and platform security.",
            icon: LightbulbIcon,
        },
        {
            role: "Technical Writer, Workspace UX - Content",
            duration: "Feb 2020 - Feb 2025",
            description: "Recognized as the 'go-to' expert for Google Apps Script. Drove strategic content initiatives, mentored peers, and presented at major developer conferences like Google I/O and Cloud Next.",
            icon: DocumentChartBarIcon,
        },
        {
            role: "Manager, Content Marketing",
            duration: "Jan 2017 - Sep 2018",
            description: "Built the content marketing pillar from the ground up, tripling blog traffic and managing a team of writers and coordinators.",
            icon: UserGroupIcon,
        },
    ],
    aiSpotlight: [
        { title: "AI Vision & Strategy", description: "Authored the vision doc for a 'Workspace Solutions Agent,' a cross-Workspace AI designed to help users create custom workflows and solutions from natural language." },
        { title: "Data-Driven Insights", description: "Created and ran a quarterly AI adoption survey program for the content org, providing key data to leadership that quantified AI's impact on productivity and informed strategic investments." },
        { title: "Developer Evangelism", description: "Co-presented on using the Gemini API with Apps Script at Google I/O and Cloud Next, establishing new best practices and empowering the developer community." },
        { title: "Rapid Prototyping", description: "Built operational prototypes demonstrating the creation of custom workflow steps in Apps Script from natural language prompts, showcasing the tangible potential of AI in the developer ecosystem." },
    ],
    portfolioHighlights: [
        {
            title: "Launched Custom Steps for Workspace Flows",
            description: "Addressed a critical competitive gap by enabling developers to create custom workflow steps using Google Workspace Add-ons. This exponentially increased the number of available actions for users via the Apps Script and Card frameworks.",
            category: "Product Launch",
        },
        {
            title: "Shipped 'Share a Copy' for Flows",
            description: "Delivered the highly-requested 'Share a copy' and duplication functionality for Flows, a key initiative that accelerated team collaboration and simplified the security and management of critical workflows.",
            category: "Feature Delivery",
        },
        {
            title: "Rolled Out Granular OAuth for Add-ons",
            description: "Enhanced platform security and user privacy by launching unbundled OAuth consent for HTTP-based add-ons. This gave users more granular control over their data and required managing a strict compliance and communication plan for all developers.",
            category: "Platform & Security",
        }
    ],
    kudos: [
        { quote: "Kara's deep expertise in Apps Script and how to use it with Gemini helped establish new 'best practices' for the field.", author: "Charles Maxson, L6 Developer Advocate" },
        { quote: "Based on her exceptional performance and impact, Kara deserves an Outstanding Impact rating. Kara's work consistently drove greater impact than expected for her role and level.", author: "Francis Cheng, Manager (from 2024 Perf Review)" },
        { quote: "Kara's L6 co-presenter credited Kara with having the original vision for the Apps Script and Gemini AI content for the Cloud Next and I/O talks they gave together.", author: "From 2024 Perf Review" },
        { quote: "An L7 product manager even asked Kara to take on the product management duties for Apps Script less than a year ago as a 20% project.", author: "From 2024 Perf Review" }
    ],
    artifactData: [
      { name: 'PRD', count: 11 },
      { name: 'PM Mocks', count: 5 },
      { name: 'Vision Doc', count: 2 },
      { name: 'Launch Deck', count: 1 },
      { name: 'GTM Plan', count: 1 },
      { name: 'Meeting Notes', count: 11 },
      { name: 'UX/PM Office Hours', count: 3 },
      { name: 'PWG Office Hours', count: 14},
      { name: 'Other', count: 4},
    ],
};

const FAQ = () => {
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState('');
    const [apiError, setApiError] = useState(null);

    const predefinedQuestions = [
        "What was your biggest achievement as a PM rotator?",
        "How has your technical writing background influenced your work as a PM?",
        "Tell me more about your work with AI.",
        "What is your approach to solving ambiguous problems?"
    ];

    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        setIsLoading(true);
        setApiResponse(null);
        setApiError(null);
        const query = userInput;
        setUserInput('');

        // This URL now points to our secure Netlify Function endpoint
        const apiUrl = `/api/askGemini`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: query })
            });

            if (!response.ok) {
                 throw new Error(`Request failed with status ${response.status}`);
            }

            const result = await response.json();
            const text = result.reply;

            if (text) {
                setApiResponse(text);
            } else {
                throw new Error("No content received from the function.");
            }
        } catch (error) {
            console.error("Netlify Function Error:", error);
            setApiError("Sorry, I couldn't process that request right now. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const handlePredefinedClick = (question) => {
        setUserInput(question);
    }

    return (
        <section id="faq" className="py-20 bg-slate-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto text-cyan-400" />
                <h2 className="text-3xl font-bold text-white mt-4">Interactive FAQ</h2>
                <p className="mt-2 text-lg text-slate-300">Ask a question about my experience. Powered by Gemini.</p>
                
                <div className="mt-8 text-left max-w-2xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {predefinedQuestions.map((q, index) => (
                           <button key={index} onClick={() => handlePredefinedClick(q)} className="bg-slate-700 text-white text-sm py-1 px-3 rounded-full hover:bg-slate-600 transition-colors">
                               {q}
                           </button>
                        ))}
                    </div>

                    <form onSubmit={handleQuestionSubmit} className="flex gap-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="e.g., How did you handle the Drive policy challenge?"
                            className="flex-grow bg-slate-800 text-white border border-slate-600 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <button type="submit" disabled={isLoading} className="bg-cyan-600 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-500 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors">
                            {isLoading ? 'Asking...' : 'Ask'}
                        </button>
                    </form>

                    { (apiResponse || apiError) && (
                        <div className="mt-6 p-4 bg-slate-800 border border-slate-700 rounded-lg">
                           {apiError && <p className="text-red-400">{apiError}</p>}
                           {apiResponse && <p className="text-slate-200 whitespace-pre-wrap">{apiResponse}</p>}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default function App() {
    return (
        <div className="bg-slate-900 text-slate-300 font-sans">
            {/* Header & Hero */}
            <header className="bg-slate-900 sticky top-0 z-50 border-b border-slate-800">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-white font-bold text-xl">{portfolioData.name}</div>
                    <ul className="flex space-x-6">
                        <li><a href="#trajectory" className="hover:text-cyan-400 transition-colors">Career</a></li>
                        <li><a href="#ai" className="hover:text-cyan-400 transition-colors">AI Spotlight</a></li>
                        <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                        <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                {/* Hero Section */}
                <section className="py-24 text-center bg-slate-800/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <h1 className="text-5xl font-extrabold text-white tracking-tight">{portfolioData.title}</h1>
                        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto">{portfolioData.summary}</p>
                        <div className="mt-8 flex justify-center items-center gap-6">
                            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-500 transition-colors py-2 px-4 rounded-md font-semibold">
                                <MailIcon className="w-5 h-5" />
                                Contact Me
                            </a>
                            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <LinkedinIcon className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Career Trajectory */}
                <section id="trajectory" className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-12">Career Trajectory</h2>
                        <div className="relative border-l-2 border-slate-700 ml-6">
                            {portfolioData.careerTrajectory.map((item, index) => (
                                <div key={index} className="mb-10 ml-12">
                                    <span className="absolute flex items-center justify-center w-12 h-12 bg-slate-800 rounded-full -left-6 ring-4 ring-slate-900">
                                        <item.icon className="w-6 h-6 text-cyan-400" />
                                    </span>
                                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-slate-400">{item.duration}</time>
                                    <p className="text-base font-normal text-slate-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* AI Spotlight */}
                <section id="ai" className="py-20 bg-slate-800/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white">AI Spotlight</h2>
                        <p className="mt-2 text-lg text-center text-slate-300">Key contributions to AI strategy and development.</p>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {portfolioData.aiSpotlight.map((item, index) => (
                                <div key={index} className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                                    <h3 className="text-xl font-semibold text-cyan-400">{item.title}</h3>
                                    <p className="mt-2 text-slate-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Portfolio Highlights & Data Viz */}
                <section id="portfolio" className="py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white">Portfolio Highlights</h2>
                        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Highlights */}
                            <div className="space-y-8">
                                {portfolioData.portfolioHighlights.map((item, index) => (
                                    <div key={index} className="p-6 bg-slate-800/50 rounded-lg">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">{item.category}</span>
                                        <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                                        <p className="mt-2 text-slate-300">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Data Viz */}
                            <div className="bg-slate-800/50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-white mb-4">PM Artifact Distribution</h3>
                                <div style={{ width: '100%', height: 400 }}>
                                    <ResponsiveContainer>
                                        <BarChart data={portfolioData.artifactData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                                            <XAxis type="number" stroke="#94a3b8" />
                                            <YAxis type="category" dataKey="name" width={100} stroke="#94a3b8" />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                                                labelStyle={{ color: '#e2e8f0' }}
                                                cursor={{ fill: 'rgba(71, 85, 105, 0.5)' }}
                                            />
                                            <Bar dataKey="count" fill="#22d3ee" background={{ fill: '#334155' }} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kudos Section */}
                <section className="py-20 bg-slate-800/50">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-white">Kudos</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {portfolioData.kudos.map((kudo, index) => (
                                <figure key={index} className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                                    <StarIcon className="w-5 h-5 text-amber-400 mb-2" />
                                    <blockquote className="text-slate-300">
                                        <p>"{kudo.quote}"</p>
                                    </blockquote>
                                    <figcaption className="mt-4 text-right text-sm text-slate-400">
                                        - {kudo.author}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQ />
            </main>

            <footer className="py-12 bg-slate-900 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Kara Ireland. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
