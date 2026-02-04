import {
    Container,
    Header,
    SpaceBetween,
    ContentLayout,
    Button,
    Box,
    Badge,
    ColumnLayout,
    StatusIndicator
} from '@cloudscape-design/components';
import type { Project } from '../data/projects';

interface ProjectDetailsProps {
    project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const galleryImages = project.images?.map(img =>
        typeof img === 'string' ? { src: img, desc: "System Snapshot" } : img
    ) || (project.img ? [{ src: project.img, desc: "Main Preview" }] : []);

    return (
        <ContentLayout
            header={
                <Header
                    variant="h1"
                    actions={
                        <SpaceBetween direction="horizontal" size="xs">
                            <Button
                                iconName="script"
                                href={project.repoUrl}
                                target="_blank"
                            >
                                Source Code
                            </Button>
                            <Button
                                iconName="external"
                                variant="primary"
                                href={project.demoUrl}
                                target="_blank"
                            >
                                Launch App
                            </Button>
                        </SpaceBetween>
                    }
                    description={`Project ID: ${project.id} | Environment: Production`}
                >
                    {project.name}
                </Header>
            }
        >
            <SpaceBetween size="l">

                <Container header={<Header variant="h2">Project Overview</Header>}>
                    <SpaceBetween size="l">

                        <ColumnLayout columns={2} variant="text-grid">

                            <div>
                                <Box variant="awsui-key-label" padding={{ bottom: "xs" }}>
                                    Service Objective
                                </Box>
                                <Box variant="p" >
                                    {project.details}
                                </Box>
                            </div>

                            <div>
                                <Box variant="awsui-key-label" padding={{ bottom: "xs" }}>
                                    System Architecture
                                </Box>
                                <Box variant="p" >
                                    {project.architecture || "Architecture details not available for this legacy system."}
                                </Box>
                            </div>

                        </ColumnLayout>

                        <div style={{ borderTop: "1px solid #eaeded", paddingTop: "20px" }}>
                            <ColumnLayout columns={2} variant="text-grid">
                                <div>
                                    <Box variant="awsui-key-label">Tech Stack</Box>
                                    <div style={{ marginTop: "8px" }}>
                                        <SpaceBetween direction="horizontal" size="xs">
                                            {project.tech.map((t) => (
                                                <Badge key={t} color="blue">{t}</Badge>
                                            ))}
                                        </SpaceBetween>
                                    </div>
                                </div>
                                <div>
                                    <Box variant="awsui-key-label">Status</Box>
                                    <div style={{ marginTop: "8px" }}>
                                        <StatusIndicator type="success">Active / Deployed</StatusIndicator>
                                    </div>
                                </div>
                            </ColumnLayout>
                        </div>

                    </SpaceBetween>
                </Container>

                <Container header={<Header variant="h2">System Visuals</Header>}>
                    {galleryImages.length > 0 ? (
                        <ColumnLayout columns={2}>
                            {galleryImages.map((imgObj, index) => (
                                <div
                                    key={index}
                                    style={{
                                        border: "1px solid #eaeded",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        marginBottom: "20px",
                                        boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <div style={{ height: "300px", width: "100%" }}>
                                        <img
                                            src={imgObj.src}
                                            alt={imgObj.desc}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover", 
                                                display: "block"
                                            }}
                                        />
                                    </div>

                                    <div style={{
                                        padding: "12px 16px",
                                        background: "#f9f9f9",
                                        borderTop: "1px solid #eaeded",
                                        flexGrow: 1 
                                    }}>
                                        <Box variant="small" color="text-body-secondary">
                                            <strong style={{ color: "#545b64", marginRight: "8px" }}>
                                                Figure {index + 1}:
                                            </strong>
                                            {imgObj.desc}
                                        </Box>
                                    </div>
                                </div>
                            ))}
                        </ColumnLayout>
                    ) : (
                        <Box textAlign="center" color="text-body-secondary" padding="l">
                            No visual artifacts available.
                        </Box>
                    )}
                </Container>

            </SpaceBetween>
        </ContentLayout>
    );
}