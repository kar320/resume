import React, { useState, useEffect, useMemo } from 'react';

// ICONS - Using inline SVGs to keep it all in one file
const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const LinkedInIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const ChevronDownIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"></path></svg>
);

const ChevronsRightIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
);

const BrainCircuitIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5a3 3 0 1 0-5.993.119M12 5a3 3 0 1 1 5.993.119M15 13a3 3 0 1 0-5.993.119M15 13a3 3 0 1 1 5.993.119M6.007 13.119A3 3 0 1 0 5 17.5a3 3 0 0 0 1.007-4.381zM6.007 13.119a3 3 0 1 1 0-6.238M17.993 13.119a3 3 0 1 0 1.007 4.381M17.993 13.119a3 3 0 1 1 0-6.238M12 17.5a3 3 0 1 0-5.993-.119M12 17.5a3 3 0 1 1 5.993-.119"/><path d="M12 5V2m0 17.5V22M7.5 16l-1-1M16.5 16l1-1M7.5 8l-1 1M16.5 8l1 1"/></svg>
);

const FileTextIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
);

const StarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

const SparklesIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
);

const SendIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
);


// --- Data Extracted from Documents ---
const portfolioData = {
    name: "Kara Ireland",
    title: "Product Manager | AI & Developer Platforms",
    location: "Boulder, CO (Open to relocation)",
    email: "karaireland@google.com",
    linkedin: "https://www.linkedin.com/in/kara-ireland/", // Placeholder
    summary: "A strategic and user-centric Product Manager with a proven record of transitioning from a top-performing Technical Writer to leading high-impact initiatives in the AI and developer ecosystem. Expert in driving product vision, leading cross-functional teams, and shipping complex features that bridge competitive gaps and enhance user experience. Passionate about leveraging AI to build the future of workspace productivity.",

    experience: [
        {
            role: "100% PM Rotator | Workspace Ecosystem",
            company: "Google",
            period: "Feb 2025 - Sep 2025",
            details: [
                "Led the launch of Google Workspace Add-on (GWAO) custom steps for Flows, addressing a critical competitive gap and exponentially increasing workflow actions via Apps Script.",
                "Delivered 'Share a copy' and duplication functionality for Flows to accelerate team collaboration and secure critical workflows.",
                "Launched unbundled OAuth consent for Google Workspace add-ons, significantly boosting user control and privacy.",
                "Managed compliance timelines and enforced mandatory adoption for new and existing developers."
            ]
        },
        {
            role: "Technical Writer | Workspace UX - Content",
            company: "Google",
            period: "Feb 2020 - Feb 2025",
            details: [
                "Recognized as the 'go-to' expert for Apps Script and Add-ons by DevRel engineers and external customers.",
                "Pioneered and ran quarterly AI adoption surveys for the Content organization, providing data-driven insights to leadership on AI opportunities and efficiency gains.",
                "Co-presented on leveraging Apps Script and Gemini at major industry conferences like I/O and Next, establishing new 'best practices' for the field.",
                "Received 'Outstanding Impact' rating for consistently driving greater impact than expected for role and level.",
                "Led the charge in aligning the documentation team around new internal processes, improving efficiency."
            ]
        },
    ],
    
    aiHighlights: [
        {
            title: "Workspace Solutions Agent Vision",
            description: "Authored the vision document for a cross-Workspace agent designed to help users create custom productivity solutions using natural language, demonstrating strategic foresight in AI-driven automation.",
            category: "Product Vision",
            artifactType: "Vision Doc"
        },
        {
            title: "AI Adoption Insights Program",
            description: "Conceived and executed a quarterly AI survey program for the entire content organization. The data provided crucial insights into AI usage, perception, and productivity impacts, informing strategic decisions on AI investments and training.",
            category: "Data-Driven Strategy",
            artifactType: "Survey Readout"
        },
        {
            title: "Gemini & Apps Script Evangelism",
            description: "Co-led the narrative for using Apps Script with Gemini to extend Workspace capabilities. Co-presented at I/O, Next, and developer summits, empowering hundreds of developers to build innovative AI-powered solutions.",
            category: "Developer Relations",
            artifactType: "Presentation"
        },
        {
            title: "Custom AI Workflow Prototypes",
            description: "Developed operational and aspirational prototypes showcasing how natural language prompts could generate custom workflow steps in Apps Script, translating a complex vision into a tangible demonstration.",
            category: "Prototyping",
            artifactType: "Prototype"
        }
    ],

    pmArtifacts: [
      { document: "Workspace solutions agent vision", type: "Vision Doc", category: "Strategy & Vision" },
      { document: "Project proposal: Workspace Solutions Agent", type: "Vision Doc", category: "Strategy & Vision" },
      { document: "Workflows Sharing PRD", type: "PRD", category: "Product Definition" },
      { document: "GWAO Workflow elements PRD", type: "PRD", category: "Product Definition" },
      { document: "Versions in Workflows for Connectors and GWAOs", type: "PRD", category: "Product Definition" },
      { document: "Event-based triggers PRD", type: "PRD", category: "Product Definition" },
      { document: "GWM flows template publishing PRD", type: "PRD", category: "Product Definition" },
      { document: "GTM plan for GWAO launch to Flows M4", type: "GTM", category: "Go-To-Market" },
      { document: "Workflow sharing concepts", type: "PM Mocks", category: "UX & Design" },
      { document: "GWAOs for Flows - Dev & User experience flow", type: "PM Mocks", category: "UX & Design" },
      { document: "custom-step-prototype.mp4", type: "Prototype", category: "Prototyping" },
      { document: "Aspirational prototype video", type: "Prototype", category: "Prototyping" },
      { document: "Communication Plan: Unbundled OAuth", type: "MSA", category: "Launch & Comms" },
      { document: "Hand-off Document - Sourya", type: "Other", category: "Execution & Ops" },
      { document: "Q2'24 AI survey readout", type: "Other", category: "Data & Insights" }
    ],
    
    kudos: [
        {
            quote: "Based on her exceptional performance and impact, Kara deserves an Outstanding Impact rating. Kara's work consistently drove greater impact than expected for her role and level.",
            source: "Francis Cheng, Manager",
            context: "2024 Annual Assessment"
        },
        {
            quote: "Kara serves as the 'go-to' person for complex issues around Apps Script and Add-ons... recognized by DevRel engineers and external customers as an expert.",
            source: "Francis Cheng, Manager",
            context: "2024 Annual Assessment"
        },
        {
            quote: "An L7 product manager even asked Kara to take on the product management duties for Apps Script less than a year ago as a 20% project.",
            source: "Francis Cheng, Manager",
            context: "2024 Annual Assessment"
        },
        {
            quote: "Kara's deep expertise in Apps Script and how to use it with Gemini helped establish new 'best practices' for the field.",
            source: "Charles Maxson, L6 Developer Advocate",
            context: "via 2024 Annual Assessment"
        }
    ],

    faq: {
        predefined: [
            {
                q: "What prompted your transition from Technical Writing to Product Management?",
                a: "My deep involvement with the developer community as a Technical Writer for Apps Script revealed critical user needs and product gaps. I found myself naturally gravitating towards defining solutions, not just documenting them. For instance, my work on the quarterly AI surveys started as a way to improve our content, but it quickly evolved into providing strategic product insights for leadership. Taking on PM duties as a 20% project solidified my passion for owning outcomes and driving product strategy, leading me to pursue the full-time PM rotation."
            },
            {
                q: "Describe your biggest impact as a PM rotator.",
                a: "My biggest impact was leading the launch of Google Workspace Add-on (GWAO) custom steps for Flows. This was a crucial initiative to close a major competitive gap. I drove the project from a high-level vision to a concrete PRD, collaborated deeply with engineering and UX on the developer experience, and coordinated the GTM plan. This feature exponentially increased the number of actions available in Flows, unlocking significant new use cases for developers and users."
            },
            {
                q: "How have you used AI in your product work?",
                a: "I've leveraged AI in three main ways: 1) **Product Vision:** I authored the vision for a cross-Workspace AI agent to help users build custom solutions with natural language. 2) **Data-Driven Strategy:** I created a quarterly AI survey program to measure AI adoption and its impact, which directly informed our content and product strategy. 3) **Developer Evangelism:** I was a key presenter at Google I/O and Cloud Next, teaching developers how to use Gemini with Apps Script to build cutting-edge solutions, effectively creating new 'best practices' for our developer community."
            },
            {
                q: "How do you approach cross-functional collaboration?",
                a: "I believe in proactive, early engagement. When working on the 'Share a copy' feature for Flows, I initiated early discussions with the Drive team. This uncovered critical policy updates that invalidated our initial strategy, saving weeks of wasted effort. By bringing together engineering, UX, legal, and other stakeholders early, I facilitate alignment, surface risks, and ensure we're all moving towards the same goal, even if the path needs to change."
            }
        ],
        // This is the context that will be provided to the Gemini model.
        geminiContext: `You are Kara Ireland, a Product Manager at Google. Your background is in Technical Writing, where you became an expert in Google Apps Script. You recently completed a successful PM rotation in the Workspace Ecosystem team. Answer questions from the perspective of Kara, using a professional yet approachable tone.

        Key Career Information:
        - Transition: Moved from L5 Technical Writer to a 100% L5 PM Rotator role. Received an "Outstanding Impact" rating as a TW.
        - PM Rotation Focus (Feb-Sep 2025): Led initiatives for Google Workspace Flows and the developer ecosystem.
        - Key PM Achievements:
          1. Launched custom steps for Flows using Google Workspace Add-ons (GWAOs), closing a competitive gap.
          2. Shipped 'Share a copy' and duplication for Flows to improve collaboration.
          3. Rolled out unbundled OAuth (granular consent) for add-ons to enhance security and user privacy.
        - AI-Specific Work:
          - Wrote the vision doc for a "Workspace Solutions Agent," an AI to help users create custom workflows.
          - Ran a quarterly AI survey program to gather data-driven insights on AI adoption and productivity, which informed leadership strategy.
          - Presented at major conferences (I/O, Next) on using the Gemini API with Apps Script.
          - Built prototypes for creating workflow steps from natural language prompts.
        - Strengths: Deep developer empathy (from TW background), driving strategy for ambiguous problems, strong cross-functional leadership, data-driven decision making.
        - Recognition: Called the 'go-to' expert for Apps Script. Praised by colleagues and managers for vision and expertise.
        
        When answering, draw upon these experiences. Be concise and confident. If asked a question outside this scope, politely state that you'd be happy to discuss your specific experiences as outlined in your portfolio.`
    }
};

// --- Components ---

const Header = () => (
    <header className="bg-slate-900 text-white p-4 sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                {portfolioData.name}
            </h1>
            <nav className="space-x-4 md:space-x-6 text-sm md:text-base">
                <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
                <a href="#ai-spotlight" className="hover:text-sky-400 transition-colors">AI Spotlight</a>
                <a href="#portfolio" className="hover:text-sky-400 transition-colors">Portfolio</a>
                <a href="#faq" className="hover:text-sky-400 transition-colors">Interactive FAQ</a>
            </nav>
        </div>
    </header>
);

const Hero = () => (
    <section className="py-20 md:py-32 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
            <img 
                src="https://placehold.co/128x128/475569/E2E8F0?text=KI"
                alt="Kara Ireland"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-lg"
            />
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">{portfolioData.name}</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-300 font-light mb-8 max-w-3xl mx-auto">{portfolioData.title}</p>
            <p className="text-md md:text-lg text-slate-400 mb-8 max-w-3xl mx-auto">{portfolioData.summary}</p>
            <div className="flex justify-center items-center space-x-6">
                <a href={`mailto:${portfolioData.email}`} className="text-slate-400 hover:text-sky-400 transition-colors flex items-center space-x-2">
                    <MailIcon className="w-6 h-6"/>
                    <span>Email</span>
                </a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center space-x-2">
                    <LinkedInIcon className="w-6 h-6"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    </section>
);

const TimelineItem = ({ item, isLast }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-4">
            <div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-sky-500 bg-slate-800">
                    <ChevronsRightIcon className="w-6 h-6 text-sky-500" />
                </div>
            </div>
            {!isLast && <div className="w-px h-full bg-slate-600"></div>}
        </div>
        <div className="pb-12">
            <p className="mb-2 text-sm font-semibold tracking-wide text-sky-400 uppercase">{item.period}</p>
            <h3 className="text-xl font-bold text-white leading-5">{item.role}</h3>
            <p className="text-md font-medium text-slate-400 mb-4">{item.company}</p>
            <ul className="list-disc list-inside space-y-2">
                {item.details.map((detail, i) => (
                    <li key={i} className="text-slate-300">{detail}</li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => (
    <section id="experience" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Career Trajectory</h2>
            <div className="relative max-w-2xl mx-auto">
                {portfolioData.experience.map((item, index) => (
                    <TimelineItem key={index} item={item} isLast={index === portfolioData.experience.length - 1} />
                ))}
            </div>
        </div>
    </section>
);

const AISpotlight = () => (
    <section id="ai-spotlight" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-white mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">AI & Strategy Spotlight</span>
                </h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">Driving the future of productivity by integrating cutting-edge AI into the core of Google Workspace.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {portfolioData.aiHighlights.map((item, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-pink-500/10 rounded-full mr-4">
                               <BrainCircuitIcon className="w-6 h-6 text-pink-400"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-sm font-medium text-pink-400">{item.category}</p>
                            </div>
                        </div>
                        <p className="text-slate-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ArtifactChart = () => {
    const data = useMemo(() => {
        const counts = portfolioData.pmArtifacts.reduce((acc, artifact) => {
            const type = artifact.type || 'Other';
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        
        return Object.entries(counts).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value);
    }, []);

    const maxValue = Math.max(...data.map(d => d.value), 0);
    
    return (
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">PM Artifact Distribution</h3>
            <div className="space-y-4">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center">
                        <span className="w-28 text-sm text-slate-300 pr-4">{item.name}</span>
                        <div className="flex-1 bg-slate-700 rounded-full h-6">
                            <div
                                className="bg-gradient-to-r from-sky-500 to-blue-600 h-6 rounded-full flex items-center justify-end pr-2"
                                style={{ width: `${(item.value / maxValue) * 100}%` }}
                            >
                               <span className="text-white font-bold text-xs">{item.value}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Portfolio = () => {
    const categories = useMemo(() => {
        const grouped = portfolioData.pmArtifacts.reduce((acc, artifact) => {
            const category = artifact.category || 'Other';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(artifact);
            return acc;
        }, {});
        return Object.entries(grouped);
    }, []);

    return (
        <section id="portfolio" className="py-20 bg-slate-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-16">PM Portfolio & Artifacts</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <ArtifactChart />
                    </div>
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {categories.map(([category, artifacts]) => (
                            <div key={category} className="bg-slate-900/40 p-6 rounded-lg border border-slate-700">
                                <h3 className="font-bold text-sky-400 mb-4">{category}</h3>
                                <ul className="space-y-3">
                                    {artifacts.map((artifact, i) => (
                                        <li key={i} className="flex items-start">
                                            <FileTextIcon className="w-4 h-4 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-slate-300">{artifact.document}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


const Kudos = () => (
    <section id="kudos" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
             <h2 className="text-4xl font-bold text-center text-white mb-12">Recognition & Impact</h2>
             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 {portfolioData.kudos.map((kudo, index) => (
                     <figure key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-lg">
                         <StarIcon className="w-8 h-8 text-amber-400 mb-4" />
                         <blockquote className="text-slate-300 italic mb-4">
                             "{kudo.quote}"
                         </blockquote>
                         <figcaption className="text-right">
                             <div className="font-semibold text-white">{kudo.source}</div>
                             <div className="text-sm text-slate-400">{kudo.context}</div>
                         </figcaption>
                     </figure>
                 ))}
             </div>
        </div>
    </section>
);


const FaqItem = ({ q, a, isOpen, onClick }) => (
    <div className="border-b border-slate-700">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-4">
            <span className="text-lg font-semibold text-white">{q}</span>
            <ChevronDownIcon className={`w-6 h-6 text-slate-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="py-4 text-slate-300">
                <p>{a}</p>
            </div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [apiError, setApiError] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        setIsLoading(true);
        setApiResponse(null);
        setApiError(null);

        const apiKey = ""; // API key will be injected by the environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const payload = {
            systemInstruction: {
                parts: [{ text: portfolioData.faq.geminiContext }]
            },
            contents: [{
                parts: [{ text: userInput }]
            }]
        };
        
        try {
            // Using exponential backoff for retries
            let response;
            let delay = 1000;
            for (let i = 0; i < 5; i++) {
                response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    break;
                }
                if (response.status === 429 || response.status >= 500) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    delay *= 2;
                } else {
                    throw new Error(`API request failed with status ${response.status}`);
                }
            }

            if (!response.ok) {
                 throw new Error(`API request failed after retries with status ${response.status}`);
            }

            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

            if (text) {
                setApiResponse(text);
            } else {
                throw new Error("No content received from API.");
            }
        } catch (error) {
            console.error("Gemini API Error:", error);
            setApiError("Sorry, I couldn't process that request right now. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="faq" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl font-bold text-center text-white mb-4">Interactive FAQ</h2>
                <p className="text-lg text-slate-400 text-center mb-12">Ask a question or browse the topics below to learn more about my experience.</p>
                
                <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 mb-12">
                     <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <SparklesIcon className="w-6 h-6 mr-3 text-sky-400" />
                        Ask Gemini about my experience
                    </h3>
                    <form onSubmit={handleQuestionSubmit} className="flex items-center gap-4">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="e.g., 'What was your role in the Flows project?'"
                            className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            disabled={isLoading}
                        />
                        <button 
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : (
                                <SendIcon className="w-5 h-5"/>
                            )}
                        </button>
                    </form>

                    {(apiResponse || apiError || isLoading) && (
                        <div className="mt-6 p-4 bg-slate-700 rounded-md">
                            {isLoading && <p className="text-slate-300 animate-pulse">Thinking...</p>}
                            {apiError && <p className="text-red-400">{apiError}</p>}
                            {apiResponse && <p className="text-slate-200 whitespace-pre-wrap">{apiResponse}</p>}
                        </div>
                    )}
                </div>

                <div>
                    {portfolioData.faq.predefined.map((item, index) => (
                        <FaqItem 
                            key={index} 
                            q={item.q}
                            a={item.a}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 text-center py-8">
        <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Kara Ireland. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React & Tailwind CSS. Interactive FAQ powered by Google Gemini.</p>
        </div>
    </footer>
);

export default function App() {
    return (
        <div className="bg-slate-900 font-sans leading-relaxed">
            <Header />
            <main>
                <Hero />
                <Experience />
                <AISpotlight />
                <Portfolio />
                <Kudos />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}

