import { Container, Header, Button, ColumnLayout, Box } from "@cloudscape-design/components";

export default function PersonnelDoc() {
    return (
        <Container
            header={
                <Header
                    variant="h2"
                    description="Access official career exports and professional certification records."
                    actions={
                        <Button iconName="download" variant="primary" href="/resume/Jay_Lee_Resume.pdf" target="_blank">
                            Export Resume.pdf
                        </Button>
                    }
                >
                    Personnel Documentation
                </Header>
            }
        >
            <ColumnLayout columns={2} variant="text-grid">
                <Box>
                    <Box variant="awsui-key-label">Personnel File</Box>
                    <Box>Jay Jong Lee (Frontend Engineer)</Box>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Last Synchronization</Box>
                    <Box>February 2026</Box>
                </Box>
            </ColumnLayout>
        </Container>
    );
}