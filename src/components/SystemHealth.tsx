
import { Container, Header, ColumnLayout, Box, StatusIndicator, Link } from "@cloudscape-design/components";

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
            <ColumnLayout columns={3} variant="text-grid">
                <Box>
                    <Box variant="awsui-key-label">Status</Box>
                    <StatusIndicator type="success">Available for Hire</StatusIndicator>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Role</Box>
                    <Box variant="p">Frontend Engineer</Box>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Latest Incident</Box>
                    <Box variant="p">Amazon Layoff (Resolved)</Box>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Location</Box>
                    <Box variant="p">Seattle, WA</Box>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Phone number</Box>
                    <Box variant="p">253-355-6520</Box>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Email</Box>
                    <Link href="mailto:leejayjong@gmail.com">leejayjong@gmail.com</Link>
                </Box>
            </ColumnLayout>
        </Container>
    )
}   