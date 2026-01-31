
import { Container, Header, ContentLayout } from '@cloudscape-design/components';

export default function About() {
    return (
        <ContentLayout
            header={
                <Header variant="h1">About Me</Header>
            }
        >
            <Container>
                <Header variant="h2">Biography</Header>
                <p>
                    I am a passionate software engineer with experience in full-stack development.
                </p>
                <p>
                    I love building scalable applications and intuitive user interfaces.
                </p>
            </Container>
        </ContentLayout>
    );
}
