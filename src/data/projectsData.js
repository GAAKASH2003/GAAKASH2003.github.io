import agentHarness from '../assets/svg/projects/agent-harness.svg';
import multiAgentChat from '../assets/svg/projects/multi-agent-chat.svg';
import youtubeRag from '../assets/svg/projects/youtube-rag.svg';
import reelAutomator from '../assets/svg/projects/reel-automator.svg';
import zephyrAutomation from '../assets/svg/projects/zephyr-automation.svg';
import chessRealtime from '../assets/svg/projects/chess-realtime.svg';
import microservicesCommerce from '../assets/svg/projects/microservices-commerce.svg';
import decentralizedExchange from '../assets/svg/projects/decentralized-exchange.svg';
import campusSync from '../assets/svg/projects/campus-sync.svg';
import nihaanEnergy from '../assets/svg/projects/nihaan-energy.svg';
import heroxSecurity from '../assets/svg/projects/herox-security.svg';
import cloneMyTrips from '../assets/svg/projects/clonemytrips.svg';

export const projectsData = [
    {
        id: 1,
        category: 'ai-ml',
        projectName: 'Agent Harness',
        projectDesc: 'A modular, event-driven coding-agent harness built from first principles in Python.',
        tags: ['Python', 'AI Agents', 'Event-Driven'],
        code: 'https://github.com/GAAKASH2003/Proto_Harness',
        demo: '',
        image: agentHarness,
    },
    {
        id: 2,
        category: 'ai-ml',
        projectName: 'Multi-Agent Chat Rooms',
        projectDesc: 'A custom-character chat platform that uses a LangGraph workflow to select speakers, generate in-character replies, review outputs, and retain conversational context.',
        tags: ['React', 'FastAPI', 'MongoDB', 'LangGraph'],
        code: 'https://github.com/GAAKASH2003/Multi-Agent-chatroom',
        demo: '',
        image: multiAgentChat,
    },
    {
        id: 3,
        category: 'ai-ml',
        projectName: 'YouTube RAG Extension',
        projectDesc: 'A Chrome extension with a floating AI chatbot that answers questions about the YouTube video currently being watched.',
        tags: ['Chrome Extension', 'RAG', 'AI','Python'],
        code: 'https://github.com/GAAKASH2003/youtube-rag-extension',
        demo: '',
        image: youtubeRag,
    },
    {
        id: 4,
        category: 'ai-ml',
        projectName: 'Reel Automator',
        projectDesc: 'Automates social-media reel creation by generating voiceovers and subtitles, sourcing clips, trimming footage, and producing a final video.',
        tags: ['Python', 'Automation', 'Video Processing','AI'],
        code: 'https://github.com/GAAKASH2003/Reel_automator',
        demo: '',
        image: reelAutomator,
    },
    {
        id: 5,
        category: 'software-development-automation',
        projectName: 'Zephyr Automation',
        projectDesc: 'Automates publishing GitHub Actions test results from Allure reports to Zephyr for Jira, simplifying test-lifecycle management.',
        tags: ['GitHub Actions', 'Python', 'Jira Zephyr','Automation'],
        code: 'https://github.com/GAAKASH2003/Zephyr_automation',
        demo: '',
        image: zephyrAutomation,
    },
    {
        id: 6,
        category: 'software-development-automation',
        projectName: 'Real-Time Multiplayer Chess',
        projectDesc: 'A modern multiplayer chess experience with private rooms, real-time board synchronization, and intuitive gameplay.',
        tags: ['React', 'Websockets', 'SSE'],
        code: 'https://github.com/GAAKASH2003/chess',
        demo: '',
        image: chessRealtime,
    },
    {
        id: 7,
        category: 'software-development-automation',
        projectName: 'Microservices E-Commerce System',
        projectDesc: 'A distributed e-commerce system for orders, customers, products, payments, and notifications, designed for scalable service communication.',
        tags: ['Spring Boot', 'Kafka', 'MongoDB', 'PostgreSQL'],
        code: 'https://github.com/GAAKASH2003/Microservices-E-commerce-System',
        demo: '',
        image: microservicesCommerce,
    },
    {
        id: 8,
        category: 'software-development-automation',
        projectName: 'Decentralized Exchange',
        projectDesc: 'A decentralized-exchange contract that integrates with Aave for WETH deposits, DAI borrowing, and repayment flows.',
        tags: ['Solidity', 'BlockChain', 'Hardhat'],
        code: 'https://github.com/GAAKASH2003/Decentralised-Exchange',
        demo: '',
        image: decentralizedExchange,
    },
    {
        id: 9,
        category: 'software-development-automation',
        projectName: 'CampusSync',
        projectDesc: 'A campus-placement lifecycle platform where students apply for roles and recruiters review academic and programming profiles.',
        tags: ['React', 'Node.js', 'MongoDB','WebScraping'],
        code: 'https://github.com/GAAKASH2003/Jobhunt-client',
        demo: '',
        image: campusSync,
    },
    {
        id: 10,
        category: 'freelance-projects',
        projectName: 'Nihaan Energy',
        projectDesc: 'A promotional website for an EV-charging startup, built to showcase the company and advertise its products.',
        tags: ['Landing Page', 'Product Marketing','Nextjs'],
        code: 'https://github.com/NihaanEnergy/nihaan-energy-website',
        demo: '',
        image: nihaanEnergy,
    },
    {
        id: 11,
        category: 'freelance-projects',
        projectName: 'HeroX Phishing Simulation',
        projectDesc: 'A FastAPI-based phishing-simulation platform for authorized security campaigns, templates, target groups, and interaction analytics.',
        tags: ['Python', 'Phishing', 'React'],
        code: 'https://github.com/GAAKASH2003/HeroXAPI',
        demo: '',
        image: heroxSecurity,
    },
    {
        id: 12,
        category: 'freelance-projects',
        projectName: 'CloneMyTrips',
        projectDesc: 'A client-facing landing page that presents the features and value of a trip-planning application.',
        tags: ['Landing Page', 'Nextjs', 'UI/UX','SEO'],
        code: 'https://github.com/GAAKASH2003/landing_page',
        demo: '',
        image: cloneMyTrips,
    },
];
