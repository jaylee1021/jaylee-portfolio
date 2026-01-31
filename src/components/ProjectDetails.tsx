
import { Container, SpaceBetween, KeyValuePairs } from '@cloudscape-design/components';
import type { Project } from '../data/projects';

interface ProjectDetailsProps {
    project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <Container>
            <SpaceBetween size="l">
                <KeyValuePairs
                    columns={1}
                    items={[
                        {
                            label: "Description",
                            value: project.description
                        },
                        {
                            label: "Technologies",
                            value: project.tech
                        },
                        {
                            label: "Detailed Overview",
                            value: project.details || "No additional details available."
                        }
                    ]}
                />
            </SpaceBetween>
        </Container>
    );
}
