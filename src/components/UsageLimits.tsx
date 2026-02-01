
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

                {/* 1. 3D PRINTING (Keeping this as requested) */}
                <div>
                    <Box variant="awsui-key-label">3D Filament Consumption</Box>
                    <div>2.5 kg / month</div>
                    <Box variant="small" color="text-body-secondary">
                        Bambu Lab X1C
                    </Box>
                </div>

                {/* 2. REPLACEMENT: COMPUTE NODE (Was Car) */}
                <div>
                    <Box variant="awsui-key-label">Compute Node</Box>
                    <StatusIndicator type="success">Online</StatusIndicator>
                    <Box variant="small" color="text-body-secondary">
                        Apple Silicon / macOS Tahoe
                    </Box>
                </div>

                {/* 3. REPLACEMENT: LOCALES (Was Coffee) */}
                <div>
                    <Box variant="awsui-key-label">Supported Locales</Box>
                    <div>en-US, ko-KR</div>
                    <Box variant="small" color="text-body-secondary">
                        Bilingual Support
                    </Box>
                </div>

            </SpaceBetween>
        </Container>
    );
}