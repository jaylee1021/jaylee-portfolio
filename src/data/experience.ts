export interface ExperienceProps {
    role: string;
    company: string;
    team?: string;
    focus?: string;
    startDate: string;
    endDate?: string;
    location: string;
    skills: string[];
    bullets: { [key: string]: string };
    isCurrent: boolean;
}

export const EXPERIENCE_DATA: ExperienceProps[] = [
    {
        role: 'Frontend Engineer',
        company: 'AWS',
        team: 'CloudFormation Console',
        startDate: 'Dec 2024',
        endDate: 'Present',
        location: 'Seattle, WA',
        skills: ['TypeScript', 'React.js', 'Redux', 'Cloudscape', 'Figma', 'Jest', 'WCAG 2.2', 'AWS'],
        bullets: {
            "Feature Implementation": "Engineered a custom responsive split-panel architecture for the CloudFormation Console, resolving the #1 reported customer UX issue.",
            "System Migration": "Migrated 600+ legacy files to the modern Cloudscape Design System in 4 days, driving measurable improvements in rendering speed.",
            "Compliance Patching": "Led an accessibility campaign resolving 230+ WCAG 2.1/2.2 violations, implementing ARIA roles and semantic HTML alignment.",
            "Service Lifecycle Management": "Delivered frontend strategy for AWS Proton deprecation, including global notification banners and logic-based access restrictions.",
            "Runtime Stabilization": "Resolved 50+ backlogged tickets and console errors by refactoring UI components and establishing robust error handling patterns.",
            "Prototyping": "Accelerated feature alignment by creating interactive Figma prototypes for complex console interactions.",
        },
        isCurrent: true,
    },
    {
        role: 'Lead Drone Maintenance Technician',
        company: 'Amazon Prime Air',
        focus: 'Maintenance Operations & R&D',
        startDate: 'Sep 2019',
        endDate: 'Dec 2024',
        location: 'Seattle, WA',
        skills: ['Maintenance Operations', 'R&D', 'Linux', 'Hardware Troubleshooting', 'Mission Critical Systems', 'Jira', 'Confluence', 'CMMS'],
        bullets: {
            "Internal Tooling": "Developed and maintained a custom Quip-based fleet tracking system to monitor software versions, configuration state, and readiness for 25+ high-value UAV assets.",
            "Incident Response": "Expedited system issue escalations, optimizing aircraft availability and minimizing downtime.",
            "Team Leadership": "Led a 6-person technical unit, setting daily operational priorities and providing technical guidance to ensure high-quality execution in a safety-critical environment.",
            "QA & Compliance": "Served as RII (Required Inspection Item) Inspector, validating airworthiness, configuration conformity, and adherence to FAA-aligned maintenance standards.",
            "R&D Integration": "Installed test instrumentation and prototype hardware for engineering validation, directly supporting flight test campaigns and reliability investigations.",
            "Process Documentation": "Developed Standard Operating Procedures (SOPs) and maintenance programs, training 10+ technicians on troubleshooting workflows and best practices.",
        },
        isCurrent: false,
    },
    {
        role: 'Site Lead & Maintenance Lead',
        company: 'Textron Systems',
        focus: 'Flight Operations & Maintenance',
        startDate: 'Sep 2017',
        endDate: 'Sep 2019',
        location: 'Afghanistan',
        skills: ['Maintenance Operations', 'R&D', 'Linux', 'Hardware Troubleshooting', 'Mission Critical Systems', 'Jira', 'Confluence', 'CMMS'],
        bullets: {
            "Site Reliability": "Directed day-to-day site operations and personnel resource scheduling, acting as the primary customer interface to ensure mission SLAs were met.",
            "Data Telemetry": "Managed secure data pipelines (SFTP) and centralized fleet logging systems (COLTS), ensuring data integrity for flight telemetry and asset tracking.",
            "Protocol Enforcement": "Enforced strict adherence to Standard Operating Procedures (SOPs) and AOTM compliance, maintaining a 100% operational readiness state.",
            "Mission Execution": "Conducted full-lifecycle flight operations—from pre-flight risk assessment to hardware diagnostics—for Aerosonde UAS platforms in deployed environments.",
        },
        isCurrent: false,
    },
    {
        role: 'UAS Operator & Aircraft Commander',
        company: 'U.S. Army',
        focus: 'UAS Operations & Training',
        startDate: 'Apr 2012',
        endDate: 'Aug 2017',
        location: 'South Korea / JBLM, WA',
        skills: ['Maintenance Operations', 'R&D', 'Linux', 'Hardware Troubleshooting', 'Mission Critical Systems', 'Jira', 'Confluence', 'CMMS'],
        bullets: {
            "Mission Execution": "Led UAS operations as Aircraft Commander, executing 150+ successful missions in dynamic, high-pressure environments.",
            "Training Standards": "Trained and certified 25+ personnel on UAS simulators, establishing rigorous safety procedures and operational readiness standards.",
            "Cross-Functional Integration": "Orchestrated complex missions with diverse functional units (intelligence, ground troops), prioritizing real-time communication and tactical synchronization.",
            "Unit Readiness": "Mentored unit members and fostered a culture of continuous improvement, enhancing team capabilities and safety standards under strict operational constraints.",
        },
        isCurrent: false,
    },
];