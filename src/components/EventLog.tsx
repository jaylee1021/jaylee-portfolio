
import {
    Table,
    Box,
    Header,
    Badge,
    TextFilter,
    Pagination
} from "@cloudscape-design/components";
import { useCollection } from "@cloudscape-design/collection-hooks";

const eventsData = [
    {
        title: "System Upgrade: Portfolio v2.0",
        description: "Deployed personal brand console using React, TypeScript, Cloudscape, and Cloudflare Pages.",
        date: "Jan, 2026",
        status: "Live",
        statusType: "success" 
    },
    {
        title: "AWS Role Concluded",
        description: "Impacted by org-wide workforce reduction (RIF). Engineer returned to liquidity pool.",
        date: "Feb, 2026",
        status: "Incident Resolved",
        statusType: "info" 
    },
    {
        title: "Migration: Prime Air to AWS",
        description: "Internal transfer. Migrated from Prime Air Drone Maintenance to AWS CloudFormation Console.",
        date: "Dec, 2024",
        status: "Completed",
        statusType: "info"
    },
    {
        title: "System Upgrade: Software Engineering Immersive",
        description: "Completed full-stack patch management. Installed JavaScript, React, and Node.js dependencies.",
        date: "Aug, 2023",
        status: "Completed",
        statusType: "info"
    },
    {
        title: "Migration: Textron Systems to Amazon Prime Air",
        description: "Joined Prime Air fleet operations. Executed flight test validation and hardware maintenance.",
        date: "Sep, 2019",
        status: "Completed",
        statusType: "info"
    },
    {
        title: "Migration: U.S. Army to Textron Systems",
        description: "Transitioned to civilian infrastructure. Deployed to Textron Systems for UAV operations.",
        date: "Aug, 2017",
        status: "Completed",
        statusType: "info"
    },
    {
        title: "System Initialization (U.S. Army)",
        description: "Initial boot sequence. Deployed to U.S. Army (Active Duty). Acquired core discipline dependencies.",
        date: "Apr, 2012",
        status: "Completed",
        statusType: "info"
    }
];

export default function EventLogTable() {

    const { items, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
        eventsData,
        {
            filtering: {
                empty: (
                    <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
                        <b>No projects found</b>
                    </Box>
                ),
                noMatch: (
                    <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
                        <b>No matches found</b>
                        <Box variant="p" color="inherit">
                            We can't find a match.
                        </Box>
                    </Box>
                ),
            },
            pagination: { pageSize: 10 },
            selection: {},
        }
    );

    return (
        <Table
            {...collectionProps}
            renderAriaLive={({
                firstIndex,
                lastIndex,
                totalItemsCount
            }) =>
                `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
            }
            enableKeyboardNavigation
            columnDefinitions={[
                {
                    id: "date",
                    header: "Timestamp",
                    cell: item => item.date,
                    sortingField: "date", // Keeps the UI looking interactive
                    width: 160
                },
                {
                    id: "title",
                    header: "Event Type",
                    cell: item => (
                        <div>
                            <Box variant="strong">{item.title}</Box>
                        </div>
                    ),
                    width: 200,     // <--- Fixed width for the Title
                    minWidth: 200
                },
                {
                    id: "description",
                    header: "Details",
                    cell: item => item.description,
                    minWidth: 300
                },
                {
                    id: "status",
                    header: "State",
                    cell: item => (
                        <Badge color={item.status === "Live" ? "green" : "grey"}>
                            {item.status}
                        </Badge>
                    ),
                    width: 140
                }
            ]}
            items={items}
            loadingText="Loading resources..."
            trackBy="title"
            variant="container" // Makes it look like a widget
            header={
                <Header
                    variant="h2"
                    counter={`(${eventsData.length})`} // Adds that "data-dense" feel
                    description="Chronological record of system modifications and career events."
                >
                    System Event Log
                </Header>
            }
            // Optional: Add dummy controls to make it look even more "App-like"
            filter={
                <TextFilter
                    {...filterProps}
                    filteringPlaceholder="Search event"
                    countText={`${filteredItemsCount} matches`}
                />
            }
            pagination={
                <Pagination {...paginationProps} />
            }
        />
    );
}