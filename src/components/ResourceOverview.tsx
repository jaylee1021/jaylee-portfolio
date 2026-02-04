
import { Container, Header, ColumnLayout, Box } from "@cloudscape-design/components";

export default function ResourceOverview() {
    return (
        <Container
            header={
                <Header variant="h2" description="Aggregated metrics across all availability zones.">
                    Resource Overview
                </Header>
            }
        >
            <ColumnLayout columns={3} variant="text-grid">
                <Box>
                    <Box variant="awsui-key-label">Total Experience</Box>
                    <Box fontSize="heading-xl" fontWeight="bold" >2 Years</Box>
                    <Box variant="small" color="text-body-secondary">
                        AWS
                    </Box>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Primary Stack</Box>
                    <Box fontSize="heading-xl" fontWeight="bold" >React</Box>
                    <Box variant="small" color="text-body-secondary">
                        Next.js / TypeScript / Cloudscape
                    </Box>
                </Box>
                <Box>
                    <Box variant="awsui-key-label">Repositories</Box>
                    <Box fontSize="heading-xl" fontWeight="bold" >20+</Box>
                    <Box variant="small" color="text-body-secondary">
                        GitHub & Private Projects
                    </Box>
                </Box>
            </ColumnLayout>
        </Container>
    )
}