export interface Project {
    id: string;
    name: string;
    description: string;
    tech: string;
    details?: string; // Extended details for the detail view
}

export const PROJECT_DATA: Project[] = [
    {
        id: "portfolio-website",
        name: "Portfolio Website",
        description: "You are looking at it! Built with Cloudscape and Vite.",
        tech: "React, TypeScript, Cloudscape",
        details: "This portfolio website identifies as a personal brand showcase. It utilizes Cloudscape Design System for a clean, professional look and React Router for seamless navigation. The project highlights clean code architecture and responsive design."
    },
    {
        id: "project-beta",
        name: "Project Beta",
        description: "A placeholder for my next big idea.",
        tech: "Python, AWS",
        details: "Project Beta is an upcoming experimental application focusing on serverless architecture using AWS Lambda and API Gateway. Stay tuned for more updates."
    },
    {
        id: "e-commerce-app",
        name: "E-Commerce App",
        description: "A full-stack shopping platform.",
        tech: "React, Node.js, MongoDB",
        details: "A comprehensive e-commerce solution featuring user authentication, product catalog management, and a secure checkout process integrated with Stripe."
    },
    {
        id: "task-manager",
        name: "Task Manager",
        description: "Simple drag-and-drop task management.",
        tech: "Vue.js, Firebase",
        details: "A productivity tool designed to help teams organize tasks efficiently. Features include drag-and-drop kanban boards, real-time updates via Firebase, and team collaboration tools."
    }
];
