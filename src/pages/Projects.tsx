import { 
    Cards, 
    Header, 
    ContentLayout, 
    Link, 
    Box, 
    TextFilter, 
    Pagination, 
    Badge, 
    Button, 
    SpaceBetween 
} from '@cloudscape-design/components';
import { useCollection } from '@cloudscape-design/collection-hooks';
import { PROJECT_DATA } from '../data/projects';
import SEO from '../components/SEO';

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
                            Try searching for "React", "AWS", or "TypeScript".
                        </Box>
                    </Box>
                ),
            },
            pagination: { pageSize: 6 },
            selection: {},
        }
    );

    return (
        <ContentLayout>
            <SEO title="Projects | Jay Lee" description="Explore my software engineering portfolio." />
            
            <Cards
                {...collectionProps}
                stickyHeader={false} 
                variant="full-page"
                ariaLabels={{
                    itemSelectionLabel: (_, t) => `select ${t.name}`,
                    selectionGroupLabel: "Item selection"
                }}
                
                cardsPerRow={[
                    { cards: 1 },
                    { minWidth: 600, cards: 2 },
                    { minWidth: 1000, cards: 2 }
                ]}

                cardDefinition={{
                    header: item => (
                        <Link href={`/projects/${item.id}`} fontSize="heading-m">
                            {item.name}
                        </Link>
                    ),
                    sections: [
                        {
                            id: "image",
                            content: item => (
                                <div 
                                    style={{ 
                                        height: "300px", 
                                        backgroundColor: "#f2f3f3", 
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        marginBottom: "12px",
                                        border: "1px solid #eaeded"
                                    }}
                                >
                                    <img 
                                        src={item.img} 
                                        alt={item.name} 
                                        style={{ 
                                            width: "100%", 
                                            height: "100%", 
                                            objectFit: "cover" 
                                        }} 
                                    />
                                </div>
                            )
                        },
                        {
                            id: "description",
                            content: item => (
                                <Box variant="p" color="text-body-secondary">
                                    {item.description}
                                </Box>
                            )
                        },
                        {
                            id: "tech",
                            content: item => (
                                <SpaceBetween direction="horizontal" size="xs">
                                    {item.tech.map((tech) => (
                                        <Badge key={tech} color="blue">
                                            {tech}
                                        </Badge>
                                    ))}
                                </SpaceBetween>
                            )
                        },
                        {
                            id: "actions",
                            content: item => (
                                <Box margin={{ top: "s" }}>
                                    <SpaceBetween direction="horizontal" size="s">
                                        <Button 
                                            iconName="external" 
                                            href={item.demoUrl} 
                                            target="_blank"
                                        >
                                            Launch App
                                        </Button>
                                        <Button 
                                            iconName="script" 
                                            href={item.repoUrl}
                                            target="_blank" 
                                            variant="normal"
                                        >
                                            Source
                                        </Button>
                                    </SpaceBetween>
                                </Box>
                            )
                        }
                    ]
                }}
                
                items={items}
                loading={false}
                
                empty={
                    <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
                        <b>No projects found</b>
                    </Box>
                }
                
                filter={
                    <TextFilter
                        {...filterProps}
                        filteringPlaceholder="Search by name or tech stack (e.g. 'React')"
                        countText={`${filteredItemsCount} matches`}
                    />
                }
                
                header={
                    <Header variant="h1" counter={`(${filteredItemsCount})`}>
                        Deployed Applications
                    </Header>
                }
                
                pagination={
                    <Pagination {...paginationProps} />
                }
            />
        </ContentLayout>
    );
}