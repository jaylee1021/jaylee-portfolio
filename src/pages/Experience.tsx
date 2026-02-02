import React from "react";
import {
    Container,
    Header,
    SpaceBetween,
    Badge,
    Box,
    ColumnLayout,
    ExpandableSection,
    ContentLayout
} from "@cloudscape-design/components";

// Helper for consistency
const TechBadge = ({ children }: { children: React.ReactNode }) => (
    <Badge color="blue">{children}</Badge>
);

export default function Experience() {
    return (
        <ContentLayout
            header={
                <Header variant="h1">Experience</Header>
            }
        >
            <SpaceBetween size="l">
                {/* LATEST VERSION: AWS */}
                <Container
                    header={
                        <Header
                            variant="h2"
                            actions={<Badge color="green">Current Version</Badge>}
                        >
                            Frontend Engineer | AWS
                        </Header>
                    }
                >
                    <SpaceBetween size="m">
                        <ColumnLayout columns={3} variant="text-grid">
                            <Box>
                                <Box variant="awsui-key-label">Team</Box>
                                <Box>CloudFormation Console</Box>
                            </Box>
                            <Box>
                                <Box variant="awsui-key-label">Duration</Box>
                                <Box>Dec 2024 — Present</Box>
                            </Box>
                            <Box>
                                <Box variant="awsui-key-label">Location</Box>
                                <Box>Seattle, WA</Box>
                            </Box>
                        </ColumnLayout>

                        {/* Tech Stack for this role */}
                        <Box>
                            <SpaceBetween direction="horizontal" size="xs">
                                <TechBadge>TypeScript/JavaScript</TechBadge>
                                <TechBadge>React.js</TechBadge>
                                <TechBadge>Next.js</TechBadge>
                                <TechBadge>Node.js</TechBadge>
                                <TechBadge>Redux</TechBadge>
                                <TechBadge>Cloudscape</TechBadge>
                                <TechBadge>Figma</TechBadge>
                                <TechBadge>Jest</TechBadge>
                                <TechBadge>WCAG 2.2</TechBadge>
                            </SpaceBetween>
                        </Box>

                        <Box variant="h4">Changelog & Feature Delivery</Box>

                        <ul style={{ margin: 0, paddingInlineStart: "20px", color: "#5f6b7a" }}>
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Feature Implementation:</strong> Engineered a custom responsive split-panel architecture for the CloudFormation Console, resolving the #1 reported customer UX issue.
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>System Migration:</strong> Migrated 600+ legacy files to the modern Cloudscape Design System in 4 days, driving measurable improvements in rendering speed.
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Compliance Patching:</strong> Led an accessibility campaign resolving 230+ WCAG 2.1/2.2 violations, implementing ARIA roles and semantic HTML alignment.
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Service Lifecycle Management:</strong> Delivered frontend strategy for AWS Proton deprecation, including global notification banners and logic-based access restrictions.
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Runtime Stabilization:</strong> Resolved 50+ backlogged tickets and console errors by refactoring UI components and establishing robust error handling patterns.
                            </li>
                            <li>
                                <strong style={{ color: "#16191f" }}>Prototyping:</strong> Accelerated feature alignment by creating interactive Figma prototypes for complex console interactions.
                            </li>
                        </ul>
                    </SpaceBetween>
                </Container>

                {/* LEGACY VERSION: PRIME AIR */}
                <Container
                    header={
                        <Header
                            variant="h2"
                            actions={<Badge color="grey">Legacy Support</Badge>}
                        >
                            Lead Drone Maintenance Technician | Amazon Prime Air
                        </Header>
                    }
                >
                    <SpaceBetween size="m">
                        <ColumnLayout columns={3} variant="text-grid">
                            <Box>
                                <Box variant="awsui-key-label">Focus</Box>
                                <Box>Maintenance Operations & R&D</Box>
                            </Box>
                            <Box>
                                <Box variant="awsui-key-label">Duration</Box>
                                <Box>Sep 2019 — Dec 2024</Box>
                            </Box>
                            <Box>
                                <Box variant="awsui-key-label">Location</Box>
                                <Box>Seattle, WA</Box>
                            </Box>
                        </ColumnLayout>

                        <Box>
                            <SpaceBetween direction="horizontal" size="xs">
                                <TechBadge>Maintenance Operations</TechBadge>
                                <TechBadge>R&D</TechBadge>
                                <TechBadge>Linux</TechBadge>
                                <TechBadge>Hardware Troubleshooting</TechBadge>
                                <TechBadge>Mission Critical Systems</TechBadge>
                                <TechBadge>Jira</TechBadge>
                                <TechBadge>Confluence</TechBadge>
                            </SpaceBetween>
                        </Box>

                        <ul style={{ margin: 0, paddingInlineStart: "20px", color: "#5f6b7a" }}>

                            {/* 1. INTERNAL TOOLING */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Internal Tooling:</strong> Developed and maintained a custom Quip-based fleet tracking system to monitor software versions, configuration state, and readiness for 25+ high-value UAV assets.
                            </li>

                            {/* 2. INCIDENT RESPONSE (Updated) */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Incident Response:</strong> Expedited system issue escalations, optimizing aircraft availability and minimizing downtime.
                            </li>

                            {/* 3. TEAM LEADERSHIP */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Team Leadership:</strong> Led a 6-person technical unit, setting daily operational priorities and providing technical guidance to ensure high-quality execution in a safety-critical environment.
                            </li>

                            {/* 4. QA & COMPLIANCE */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>QA & Compliance:</strong> Served as RII (Required Inspection Item) Inspector, validating airworthiness, configuration conformity, and adherence to FAA-aligned maintenance standards.
                            </li>

                            {/* 5. R&D INTEGRATION */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>R&D Integration:</strong> Installed test instrumentation and prototype hardware for engineering validation, directly supporting flight test campaigns and reliability investigations.
                            </li>

                            {/* 6. PROCESS DOCUMENTATION */}
                            <li>
                                <strong style={{ color: "#16191f" }}>Process Documentation:</strong> Developed Standard Operating Procedures (SOPs) and maintenance programs, training 10+ technicians on troubleshooting workflows and best practices.
                            </li>

                        </ul>
                    </SpaceBetween>
                </Container>

                {/* Textron Systems */}
                <ExpandableSection
                    headerText="Site Lead & Maintenance Lead | Textron Systems"
                    variant="container"
                >
                    {/* <Box variant="h3">Site Lead & Maintenance Lead | Textron Systems</Box> */}
                    <SpaceBetween size="m">
                        <ColumnLayout columns={3} variant="text-grid">
                            <Box>
                                <Box variant="awsui-key-label">Focus</Box>
                                <Box>Flight Operations & Maintenance</Box>
                            </Box>
                            <Box>
                                <Box variant="awsui-key-label">Duration</Box>
                                <Box>Sep 2017 — Sep 2019</Box>
                            </Box>
                            <Box>
                                <Box variant="awsui-key-label">Location</Box>
                                <Box>Afghanistan</Box>
                            </Box>
                        </ColumnLayout>

                        <Box>
                            <SpaceBetween direction="horizontal" size="xs">
                                <TechBadge>Linux</TechBadge>
                                <TechBadge>Hardware Debugging</TechBadge>
                                <TechBadge>Mission Critical Systems</TechBadge>
                                <TechBadge>Jira</TechBadge>
                                <TechBadge>Confluence</TechBadge>
                            </SpaceBetween>
                        </Box>
                        <ul style={{ margin: 0, paddingInlineStart: "20px", color: "#5f6b7a" }}>

                            {/* 1. LEADERSHIP & OPS (From Site Lead) */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Site Reliability:</strong> Directed day-to-day site operations and personnel resource scheduling, acting as the primary customer interface to ensure mission SLAs were met.
                            </li>

                            {/* 2. DATA & SYSTEMS (From Ops Manager - Very important for Devs) */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Data Telemetry:</strong> Managed secure data pipelines (SFTP) and centralized fleet logging systems (COLTS), ensuring data integrity for flight telemetry and asset tracking.
                            </li>

                            {/* 3. COMPLIANCE (From Site Lead) */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Protocol Enforcement:</strong> Enforced strict adherence to Standard Operating Procedures (SOPs) and AOTM compliance, maintaining a 100% operational readiness state.
                            </li>

                            {/* 4. EXECUTION (From Flight Crew) */}
                            <li>
                                <strong style={{ color: "#16191f" }}>Mission Execution:</strong> Conducted full-lifecycle flight operations—from pre-flight risk assessment to hardware diagnostics—for Aerosonde UAS platforms in deployed environments.
                            </li>

                        </ul>
                    </SpaceBetween>
                </ExpandableSection>

                {/* U.S. Army */}
                <ExpandableSection
                    headerText="UAS Operator & Aircraft Commander | U.S. Army"
                    variant="container"
                >
                    <SpaceBetween size="s">
                        <ColumnLayout columns={3} variant="text-grid">
                            <Box>
                                <Box variant="awsui-key-label">Focus</Box>
                                <Box>UAS Operations & Training</Box>
                            </Box>
                            <Box>
                                <Box variant="awsui-key-label">Duration</Box>
                                <Box>Apr 2012 — Aug 2017</Box>
                            </Box>
                            <Box>
                                <Box variant="awsui-key-label">Location</Box>
                                <Box>South Korea / JBLM, WA</Box>
                            </Box>
                        </ColumnLayout>

                        <Box>
                            <SpaceBetween direction="horizontal" size="xs">
                                <TechBadge>Linux</TechBadge>
                                <TechBadge>Hardware Debugging</TechBadge>
                                <TechBadge>Mission Critical Systems</TechBadge>
                                <TechBadge>Jira</TechBadge>
                                <TechBadge>Confluence</TechBadge>
                            </SpaceBetween>
                        </Box>
                        <ul style={{ margin: 0, paddingInlineStart: "20px", color: "#5f6b7a" }}>

                            {/* 1. MISSION EXECUTION */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Mission Execution:</strong> Led UAS operations as Aircraft Commander, executing 150+ successful missions in dynamic, high-pressure environments.
                            </li>

                            {/* 2. TRAINING (Moved here per request) */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Training Standards:</strong> Trained and certified 25+ personnel on UAS simulators, establishing rigorous safety procedures and operational readiness standards.
                            </li>

                            {/* 3. CROSS-FUNCTIONAL */}
                            <li style={{ marginBottom: "8px" }}>
                                <strong style={{ color: "#16191f" }}>Cross-Functional Integration:</strong> Orchestrated complex missions with diverse functional units (intelligence, ground troops), prioritizing real-time communication and tactical synchronization.
                            </li>

                            {/* 4. UNIT READINESS */}
                            <li>
                                <strong style={{ color: "#16191f" }}>Unit Readiness:</strong> Mentored unit members and fostered a culture of continuous improvement, enhancing team capabilities and safety standards under strict operational constraints.
                            </li>

                        </ul>

                    </SpaceBetween>
                </ExpandableSection>

                {/* EDUCATION */}
                <ExpandableSection headerText="Education & Certifications" variant="container">
                    <ColumnLayout columns={2} variant="text-grid">
                        <SpaceBetween size="xxs">
                            <Box>
                                <Box variant="h3">Software Engineering Immersive</Box>
                                <Box color="text-body-secondary">General Assembly</Box>
                            </Box>
                            <SpaceBetween direction="horizontal" size="xs">
                                <Box variant="small">Aug 2023</Box>
                                <Box variant="small" color="text-body-secondary">
                                    JavaScript, HTML/CSS, React, PostgreSQL, MongoDB.
                                </Box>
                            </SpaceBetween>
                        </SpaceBetween>
                        <SpaceBetween size="xxs">
                            <Box>
                                <Box variant="h3">Associate of Science</Box>
                                <Box color="text-body-secondary">Cochise College</Box>
                            </Box>
                            <SpaceBetween direction="horizontal" size="xs">
                                <Box variant="small">Jun 2013</Box>
                                <Box variant="small" color="text-body-secondary">
                                    UAV Flight Operator.
                                </Box>
                            </SpaceBetween>
                        </SpaceBetween>
                    </ColumnLayout>
                </ExpandableSection>
            </SpaceBetween>
        </ContentLayout>
    );
}