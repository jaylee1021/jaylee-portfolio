
import {
    Header,
    Grid,
    SpaceBetween,
    ContentLayout,
} from "@cloudscape-design/components";
import SystemHealth from "../components/SystemHealth";
import ResourceOverview from "../components/ResourceOverview";
import RuntimeConfig from "../components/RuntimeConfig";
import EventLog from "../components/EventLog";
import UsageLimits from "../components/UsageLimits";
import PersonnelDoc from "../components/PersonnelDoc";

import SEO from "../components/SEO";

export default function Dashboard() {

    return (
        <ContentLayout
            header={
                <Header variant="h1">Dashboard</Header>
            }
        >
            <SEO title="Dashboard | Jay Lee" description="Jay Lee's engineering portfolio dashboard featuring system health, resource overview, and event logs." />
            <SpaceBetween size="l">
                <SystemHealth />
                <ResourceOverview />
                <PersonnelDoc />
                <Grid gridDefinition={[{ colspan: { default: 12, s: 8 } }, { colspan: { default: 12, s: 4 } }]}>
                    <RuntimeConfig />
                    <UsageLimits />
                </Grid>
                <EventLog />
            </SpaceBetween>
        </ContentLayout>
    );
}