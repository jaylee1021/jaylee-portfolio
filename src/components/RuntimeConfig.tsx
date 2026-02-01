
import {
    Container,
    Header,
    SpaceBetween,
    Badge,
    Box,
    ColumnLayout
} from "@cloudscape-design/components";

export default function RuntimeConfig() {
    return (
        <Container
            header={
                <Header
                    variant="h2"
                    description="Active languages, frameworks, and compliance standards."
                >
                    Runtime Configuration
                </Header>
            }
        >
            <ColumnLayout columns={2} variant="text-grid">
                <SpaceBetween size="l">
                    <Box>
                        <Box variant="awsui-key-label" padding={{ bottom: "xs" }}>
                            Languages
                        </Box>
                        <SpaceBetween direction="horizontal" size="xs">
                            <Badge color="blue">JavaScript (ES6+)</Badge>
                            <Badge color="blue">TypeScript</Badge>
                            <Badge color="blue">HTML5</Badge>
                            <Badge color="blue">CSS3</Badge>
                        </SpaceBetween>
                    </Box>

                    <Box>
                        <Box variant="awsui-key-label" padding={{ bottom: "xs" }}>
                            Frameworks
                        </Box>
                        <SpaceBetween direction="horizontal" size="xs">
                            <Badge color="blue">React.js</Badge>
                            <Badge color="blue">Next.js</Badge>
                            <Badge color="blue">Redux</Badge>
                        </SpaceBetween>
                    </Box>

                    <Box>
                        <Box variant="awsui-key-label" padding={{ bottom: "xs" }}>
                            UI & Design System
                        </Box>
                        <SpaceBetween direction="horizontal" size="xs">
                            <Badge color="green">Cloudscape Design System</Badge>
                            <Badge color="grey">Material UI</Badge>
                            <Badge color="grey">Figma</Badge>
                            <Badge color="grey">Responsive Design</Badge>
                        </SpaceBetween>
                    </Box>
                </SpaceBetween>

                <SpaceBetween size="l">
                    <Box>
                        <Box variant="awsui-key-label" padding={{ bottom: "xs" }}>
                            Accessibility & Compliance
                        </Box>
                        <SpaceBetween direction="horizontal" size="xs">
                            <Badge color="green">WCAG 2.1 / 2.2</Badge>
                            <Badge color="green">WAI-ARIA</Badge>
                            <Badge color="green">Semantic HTML</Badge>
                            <Badge color="green">VoiceOver Testing</Badge>
                        </SpaceBetween>
                    </Box>

                    <Box>
                        <Box variant="awsui-key-label" padding={{ bottom: "xs" }}>
                            Testing & Infrastructure
                        </Box>
                        <SpaceBetween direction="horizontal" size="xs">
                            <Badge color="grey">Jest (Unit/Integration)</Badge>
                            <Badge color="grey">Git & CI/CD</Badge>
                            <Badge color="grey">REST APIs</Badge>
                            <Badge color="grey">AWS</Badge>
                        </SpaceBetween>
                    </Box>
                </SpaceBetween>
            </ColumnLayout>
        </Container>
    );
}