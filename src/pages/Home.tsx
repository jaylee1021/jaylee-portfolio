
import {
    Header,
    Grid,
    SpaceBetween,
    ContentLayout
} from "@cloudscape-design/components";
import SystemHealth from "../components/SystemHealth";
import ResourceOverview from "../components/ResourceOverview";
import RuntimeConfig from "../components/RuntimeConfig";
import EventLog from "../components/EventLog";
import UsageLimits from "../components/UsageLimits";

export default function Dashboard() {

    return (
        <ContentLayout
            header={
                <Header variant="h1">Dashboard</Header>
            }
        >
            <SpaceBetween size="l">
                {/* 1. SERVICE HEALTH (Your Availability) */}
                <SystemHealth />

                {/* 2. RESOURCE OVERVIEW (Hard Skills Metrics) */}
                <ResourceOverview />


                {/* 3. BOTTOM ROW: ACTIVITY LOG & PERSONALITY STATS */}
                <Grid gridDefinition={[{ colspan: { default: 12, s: 8 } }, { colspan: { default: 12, s: 4 } }]}>
                    {/* LEFT: Recent Activity Log */}

                    <RuntimeConfig />

                    {/* RIGHT: Cost & Usage (Personality) */}
                    <UsageLimits />
                </Grid>
                <EventLog />
            </SpaceBetween>
        </ContentLayout>
    );
}