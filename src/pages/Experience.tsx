
import {
    Container,
    Header,
    SpaceBetween,
    Badge,
    Box,
    ColumnLayout,
    ExpandableSection,
    ContentLayout,
    TextContent
} from "@cloudscape-design/components";
import SEO from "../components/SEO";
import { EXPERIENCE_DATA } from "../data/experience";
import type { ExperienceProps } from "../data/experience";

export default function Experience() {

    const innerContent = (experience: ExperienceProps) => (
        <SpaceBetween size="m">
            <ColumnLayout columns={3} variant="text-grid">
                {experience.team && (
                    <Box>
                        <Box variant="awsui-key-label">Team</Box>
                        <Box>{experience.team}</Box>
                    </Box>
                )}
                {experience.focus && (
                    <Box>
                        <Box variant="awsui-key-label">Focus</Box>
                        <Box>{experience.focus}</Box>
                    </Box>
                )}
                <Box>
                    <Box variant="awsui-key-label">Duration</Box>
                    <Box>{experience.startDate} — {experience.endDate}</Box>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Location</Box>
                    <Box>{experience.location}</Box>
                </Box>
            </ColumnLayout>
            <Box>
                <SpaceBetween direction="horizontal" size="xs">
                    {experience.skills.map((skill) => (
                        <Badge color="blue" key={skill}>{skill}</Badge>
                    ))}
                </SpaceBetween>
            </Box>
            {experience.isCurrent && (
                <Box variant="h4">Changelog & Feature Delivery</Box>
            )}
            <TextContent>
                <ul style={{ margin: 0, color: "#5f6b7a" }}>
                    {Object.entries(experience.bullets).map(([key, value], index) => (
                        <li style={{ marginBottom: "8px" }} key={index}>
                            <strong style={{ color: "#16191f" }}>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </TextContent>
        </SpaceBetween>
    );

    return (
        <ContentLayout
            header={
                <Header variant="h1">Experience</Header>
            }
        >
            <SEO title="Experience | Jay Lee" description="Jay Lee's professional experience at AWS, Amazon Prime Air, and U.S. Army." />
            <SpaceBetween size="l">
                {EXPERIENCE_DATA.map((experience, index) => {
                    const isLegacy = index >= 2;

                    if (isLegacy) {
                        return (
                            <ExpandableSection
                                variant="container"
                                headerText={`${experience.role} | ${experience.company}`}
                                headerActions={<Badge color="grey">Legacy Support</Badge>}
                            >
                                {innerContent(experience)}
                            </ExpandableSection>
                        );
                    }

                    return (
                        <Container
                            key={index}
                            header={
                                <Header
                                    variant="h2"
                                    actions={
                                        experience.isCurrent ?
                                            <Badge color="green">Current Version</Badge>
                                            :
                                            <Badge color="grey">Legacy Support</Badge>
                                    }
                                >
                                    {experience.role} | {experience.company}
                                </Header>
                            }
                        >
                            {innerContent(experience)}
                        </Container>
                    );
                })}

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