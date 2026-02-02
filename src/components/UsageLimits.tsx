
import { Container, Header, SpaceBetween, Box, StatusIndicator } from "@cloudscape-design/components";

export default function UsageLimits() {
    return (
        <Container
            header={<Header
                variant="h2"
                description="Current resource utilization and hardware specifications."
            >
                Usage & Limits
            </Header>}>
            <SpaceBetween size="l">

                <Box>
                    <Box variant="awsui-key-label">3D Filament Consumption</Box>
                    <Box variant="p">2.5 kg / month</Box>
                    <Box variant="small" color="text-body-secondary">
                        Bambu Lab X1C
                    </Box>
                </Box>

                <Box>
                    <Box variant="awsui-key-label">Compute Node</Box>
                    <SpaceBetween size="xxs" direction="horizontal">
                        <StatusIndicator type="success">Online</StatusIndicator>
                        <Box variant="small" color="text-body-secondary">
                            Apple Silicon / macOS Tahoe
                        </Box>
                    </SpaceBetween>
                </Box>

                <Box>
                    <Box variant="awsui-key-label">Supported Locales</Box>
                    <Box variant="p">en-US, ko-KR</Box>
                    <Box variant="small" color="text-body-secondary">
                        Bilingual Support
                    </Box>
                </Box>

            </SpaceBetween>
        </Container>
    );
}