
import { Container, Header, ColumnLayout, Box, StatusIndicator } from "@cloudscape-design/components";

export default function SystemHealth() {
    return (
        <Container
            header={
                <Header
                    variant="h2"
                    description="Real-time status of engineer availability and system performance."
                >
                    System Health
                </Header>
            }
        >
            <ColumnLayout columns={4} variant="text-grid">
                <div>
                    <Box variant="awsui-key-label">Status</Box>
                    <StatusIndicator type="success">Available for Hire</StatusIndicator>
                </div>
                <div>
                    <Box variant="awsui-key-label">Location</Box>
                    <div>Seattle, WA</div>
                </div>
                <div>
                    <Box variant="awsui-key-label">Role</Box>
                    <div>Frontend Engineer</div>
                </div>
                <div>
                    <Box variant="awsui-key-label">Latest Incident</Box>
                    <div>Amazon Layoff (Resolved)</div>
                </div>
            </ColumnLayout>
        </Container>
    )
}