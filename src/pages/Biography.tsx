import {
    Container,
    Header,
    ContentLayout,
    Grid,
    SpaceBetween,
    Box
} from '@cloudscape-design/components';
import SEO from '../components/SEO';

export default function Biography() {
    return (
        <ContentLayout
            header={
                <Header variant="h1">Biography</Header>
            }
        >
            <SEO title="Biography | Jay Lee" description="About Jay Lee - Frontend Engineer and UAS Operator." />

            <Grid
                gridDefinition={[
                    { colspan: { default: 12, s: 4 } },
                    { colspan: { default: 12, s: 8 } },
                    { colspan: { default: 12, s: 4 } },
                    { colspan: { default: 12, s: 8 } }
                ]}
            >
                <Container fitHeight>
                    <SpaceBetween size="l">
                        <Box textAlign="center">
                            <img
                                src={'/Jay_profile.png'}
                                alt="Jay Lee"
                                style={{
                                    width: "100%",
                                    maxWidth: "200px",
                                    borderRadius: "50%",
                                    border: "4px solid #16191f"
                                }}
                            />
                            <Box variant="h2" padding={{ top: "m" }}>Jay Lee</Box>
                            <Box color="text-body-secondary">Frontend Engineer</Box>
                        </Box>
                    </SpaceBetween>
                </Container>

                <Container header={<Header variant="h2">About Me</Header>} fitHeight>
                    <SpaceBetween size="m">
                        <Box variant="p">
                            I am a software engineer with a unique background in aviation and mission-critical operations.
                            My journey began in the <strong>U.S. Army</strong>, where I served as an Aircraft Commander for Unmanned Aircraft Systems (UAS).
                            There, I learned the importance of precision, reliability, and staying cool under pressure—traits that I carry into my engineering work today.
                        </Box>

                        <Box variant="p">
                            After the military, I joined <strong>Amazon Prime Air</strong>, where I spent five years leading technical teams in drone maintenance and R&D.
                            It was here that I discovered my passion for building tools that improve workflows. I built custom tracking systems and automation scripts
                            that helped my team manage a fleet of next-generation aircraft.
                        </Box>

                        <Box variant="p">
                            Realizing that software was the most impactful way to solve problems, I transitioned to a role as a <strong>Frontend Engineer at AWS</strong>.
                            I worked on the CloudFormation Console, architecting complex user interfaces that simplified infrastructure management and improving the user experience for thousands of developers.
                        </Box>

                        <Box variant="p">
                            Today, I build intuitive, high-performance web applications using modern technologies like <strong>React, TypeScript</strong>, and the Cloudscape Design System.
                            I love turning complex requirements into clean, user-friendly interfaces.
                        </Box>
                    </SpaceBetween>
                </Container>

                <Container header={<Header variant="h2">Education & Certifications</Header>} fitHeight>
                    <SpaceBetween size="l">
                        <Box>
                            <Box variant="awsui-key-label">Professional Certification</Box>
                            <Box variant="p" padding={{ top: "xs" }}>
                                <Box fontWeight='bold' color='text-status-info'>PCEP™ – Certified Entry-Level Python Programmer</Box>
                                <Box variant="small" color="text-body-secondary">
                                    Python Institute (Feb 2024)
                                </Box>
                            </Box>
                        </Box>

                        <Box>
                            <Box variant="awsui-key-label">Technical Education</Box>
                            <Box variant="p" padding={{ top: "xs" }}>
                                <Box fontWeight='bold' color='text-status-info'>Software Engineering Immersive (Full Stack)</Box>
                                <Box variant="small" color="text-body-secondary">
                                    General Assembly (Aug 2023)
                                </Box>
                            </Box>
                        </Box>

                    </SpaceBetween>
                </Container>

                <Container header={<Header variant="h2">Technical Philosophy</Header>} fitHeight>
                    <SpaceBetween size="m">
                        <Box>
                            <Box variant="strong">User-Centric Design</Box>
                            <Box variant="p" color="text-body-secondary">
                                Tools should empower users, not get in their way. I prioritize accessibility (WCAG) and intuitive workflows in everything I build.
                            </Box>
                        </Box>

                        <Box>
                            <Box variant="strong"> Reliability over Complexity</Box>
                            <Box variant="p" color="text-body-secondary">
                                Coming from an aviation background, I value systems that work predictably. I prefer simple, distinct code over "clever" abstractions.
                            </Box>
                        </Box>

                        <Box>
                            <Box variant="strong">Continuous Learning</Box>
                            <Box variant="p" color="text-body-secondary">
                                Technology moves fast. Whether it's mastering the latest React features or learning a new backend framework, I am always expanding my toolkit.
                            </Box>
                        </Box>
                    </SpaceBetween>
                </Container>
            </Grid>
        </ContentLayout>
    );
}
