import { useParams } from 'react-router-dom';
import { ContentLayout, Header, Alert, Link } from '@cloudscape-design/components';
import ProjectDetails from '../components/ProjectDetails';
import { PROJECT_DATA } from '../data/projects';

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = PROJECT_DATA.find(p => p.id === projectId);

    if (!project) {
        return (
            <ContentLayout
                header={<Header variant="h1">Project Not Found</Header>}
            >
                <Alert type="error">
                    The project you are looking for does not exist. <Link href="/projects">Return to Projects</Link>
                </Alert>
            </ContentLayout>
        );
    }

    return (
        <ContentLayout
            header={
                <Header
                    variant="h1"
                    actions={
                        <Link href="/projects" variant="primary">
                            Back to Projects
                        </Link>
                    }
                >
                    {project.name}
                </Header>
            }
        >
            <ProjectDetails project={project} />
        </ContentLayout>
    );
}
