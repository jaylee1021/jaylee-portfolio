
import { Cards, Header, ContentLayout, Link, Box, TextFilter, Pagination } from '@cloudscape-design/components';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { PROJECT_DATA } from '../data/projects';

export default function Projects() {
    const { items, filteredItemsCount, collectionProps, filterProps, paginationProps } = useCollection(
        PROJECT_DATA,
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
            pagination: { pageSize: 6 },
            selection: {},
        }
    );

    return (
        <ContentLayout
            header={
                <Header variant="h1">Projects</Header>
            }
        >
            <Cards
                {...collectionProps}
                ariaLabels={{
                    itemSelectionLabel: (_, t) => `select ${t.name}`,
                    selectionGroupLabel: "Item selection"
                }}
                cardDefinition={{
                    header: item => (
                        <Link href={`/projects/${item.id}`} fontSize="heading-m">
                            {item.name}
                        </Link>
                    ),
                    sections: [
                        {
                            id: "description",
                            header: "Description",
                            content: item => item.description
                        },
                        {
                            id: "tech",
                            header: "Technologies",
                            content: item => item.tech
                        }
                    ]
                }}
                cardsPerRow={[
                    { cards: 1 },
                    { minWidth: 500, cards: 1 }
                ]}
                items={items}
                loading={false}
                stickyHeader
                variant="full-page"
                totalItemsCount={PROJECT_DATA.length}
                empty={
                    <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
                        <b>No projects found</b>
                    </Box>
                }
                filter={
                    <TextFilter
                        {...filterProps}
                        filteringPlaceholder="Find projects by name or technology"
                        countText={`${filteredItemsCount} matches`}
                    />
                }
                header={
                    <Header variant="h2" counter={`(${filteredItemsCount}/${PROJECT_DATA.length})`}>
                        Projects List
                    </Header>
                }
                pagination={
                    <Pagination {...paginationProps} />
                }
            />
        </ContentLayout>
    );
}
