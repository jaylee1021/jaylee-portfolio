
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
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>2 Years</div>
                    <Box variant="small" color="text-body-secondary">
                        AWS
                    </Box>
                </Box>
                {/* <div>
                                    <Box variant="awsui-key-label">Certifications</Box>
                                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>1</div>
                                    <Box variant="small" color="text-body-secondary">
                                        PCEP-30-02 (Python)
                                    </Box>
                                </div> */}
                <div>
                    <Box variant="awsui-key-label">Primary Stack</Box>
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>React</div>
                    <Box variant="small" color="text-body-secondary">
                        Next.js / TypeScript / Cloudscape
                    </Box>
                </div>
                <div>
                    <Box variant="awsui-key-label">Repositories</Box>
                    <div style={{ fontSize: "24px", fontWeight: "bold" }}>20+</div>
                    <Box variant="small" color="text-body-secondary">
                        GitHub & Private Projects
                    </Box>
                </div>
            </ColumnLayout>
        </Container>
    )
}