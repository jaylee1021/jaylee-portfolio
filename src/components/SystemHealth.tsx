
import { Container, Header, StatusIndicator, Link, KeyValuePairs } from "@cloudscape-design/components";

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
            <KeyValuePairs
                columns={3}
                items={[
                    {
                        label: "Status",
                        value: <StatusIndicator type="success">Available for Hire</StatusIndicator>
                    },
                    {
                        label: "Role",
                        value: "Frontend Engineer"
                    },
                    {
                        label: "Latest Incident",
                        value: "Amazon Layoff (Resolved)"
                    },
                    {
                        label: "Location",
                        value: "Seattle, WA"
                    },
                    {
                        label: "Phone number",
                        value: "253-355-6520"
                    },
                    {
                        label: "Email",
                        value: <Link href="mailto:leejayjong@gmail.com">leejayjong@gmail.com</Link>
                    }
                ]}>
            </KeyValuePairs>
        </Container>
    )
}   