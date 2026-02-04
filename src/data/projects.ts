export interface Project {
    id: string;
    name: string;
    description: string;
    tech: string[];
    img: string;
    images?: { src: string; desc: string }[];
    demoUrl?: string;
    repoUrl?: string;
    details?: string;
    architecture?: string;
}

export const PROJECT_DATA: Project[] = [
    {
        id: "portfolio-website",
        name: "Portfolio Website",
        description: "You are looking at it! Built with Vite and Cloudscape.",
        tech: ["React.js", "TypeScript", "Cloudscape", "Vite", "Cloudflare"],
        img: "/portfolio/jay_lee_portfolio_screenshot.png",
        images: [
            {
                src: "/portfolio/dashboard.png",
                desc: "System Dashboard: A centralized command center displaying real-time engineer availability, 'runtime' configuration (tech stack), and site metrics."
            },
            {
                src: "/portfolio/project.png",
                desc: "Projects Registry: A searchable catalog of deployed applications (cards) featuring status indicators, filtering capabilities, and source code links."
            },
            {
                src: "/portfolio/experience.png",
                desc: "Operational History: An interactive timeline tracking professional tenure and military service, utilizing Cloudscape's expandable sections for detailed logging."
            },
            {
                src: "/portfolio/bio.png",
                desc: "Engineer Profile: Comprehensive biographical data including technical philosophy, certifications, and offline interests."
            }
        ],
        demoUrl: "https://www.jayjonglee.com",
        repoUrl: "https://github.com/jaylee1021/jaylee-portfolio",
        details: "Designed as a comprehensive 'Digital Console' to showcase professional experience and technical capabilities. The primary objective was to move beyond static PDF resumes by creating an interactive, accessible, and responsive platform that demonstrates frontend engineering skills in a live environment. It serves as a central hub for recruiters to audit code quality, view live deployments, and explore professional history.",
        architecture: "The application is engineered as a Single Page Application (SPA) using React 19 and TypeScript to ensure strict type safety and maintainability. The user interface leverages the AWS Cloudscape Design System, implementing enterprise-grade accessibility (WCAG) and responsive layout patterns. Routing is managed via React Router v6, while Vite is utilized for next-generation build performance and hot module replacement (HMR).",
    },
    {
        id: "itcpc-church-home",
        name: "ITCPC Church Home",
        description: "A web app for my church, allowing members to access information, events, and sermons.",
        tech: ["JavaScript", "React.js", "Node.js", "MongoDB", "Cloudflare", "Cloudinary", "Material UI"],
        img: "/itcpc/tcpc-home.png",
        images: [
            {
                src: "/itcpc/sunday_worship&news.png",
                desc: "Main Page: Features Sunday Worship and News Section with data fetched dynamically from MongoDB."
            },
            {
                src: "/itcpc/sermon_page.png",
                desc: "Sermons Page: Users can explore sermons, play YouTube videos in a modal, and search by preacher, date, or title using a versatile JavaScript filter."
            },
            {
                src: "/itcpc/board.png",
                desc: "Community Board: Displays events and announcements. Users can click interactively to view expanded details for each item."
            },
            {
                src: "/itcpc/gallery.png",
                desc: "Photo Gallery: Showcases community photos from MongoDB. Features a modal view for details and filters by date or event name."
            }
        ],
        demoUrl: "https://itcpc.pages.dev/",
        repoUrl: "https://github.com/jaylee1021/itcpc",
        details: "TCPC Church Home offers a dynamic web application designed to facilitate seamless communication within the church community. Through this platform, members and non-members alike can access a wealth of resources, including Sermons, Events, Photos, and more.",
        architecture: "The application is meticulously crafted using the powerful MERN stack, incorporating MongoDB for robust data storage, ExpressJS for a streamlined backend, React and NextJS for an intuitive user interface, and NodeJS to ensure optimal server-side functionality. To enhance accessibility, the application is deployed on Netlify for the client-side and Heroku for the server-side, ensuring a smooth and reliable user experience for all.",
    },
    //     {
    //         id: "e-commerce-app",
    //         name: "E-Commerce App",
    //         description: "A full-stack shopping platform.",
    //         tech: ["React", "Node.js", "MongoDB"],
    //         img: "https://example.com/e-commerce-app.png",
    //         demoUrl: "https://e-commerce-app.jaylee-portfolio.com",
    //         repoUrl: "https://github.com/jaylee-portfolio/e-commerce-app",
    //         details: "A comprehensive e-commerce solution featuring user authentication, product catalog management, and a secure checkout process integrated with Stripe."
    //     },
    //     {
    //         id: "task-manager",
    //         name: "Task Manager",
    //         description: "Simple drag-and-drop task management.",
    //         tech: ["Vue.js", "Firebase"],
    //         img: "https://example.com/task-manager.png",
    //         demoUrl: "https://task-manager.jaylee-portfolio.com",
    //         repoUrl: "https://github.com/jaylee-portfolio/task-manager",
    //         details: "A productivity tool designed to help teams organize tasks efficiently. Features include drag-and-drop kanban boards, real-time updates via Firebase, and team collaboration tools."
    //     }
];
