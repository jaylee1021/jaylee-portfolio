
import { Container, Header, ContentLayout } from '@cloudscape-design/components';

export default function Home() {
    return (
        <ContentLayout
            header={
                <Header variant="h1">
                    Welcome to My Portfolio
                </Header>
            }
        >
            <Container>
                <p>Hi, I am Jay Lee. I am a software engineer.</p>
                <p>Explore my work and get in touch!</p>
            </Container>
        </ContentLayout>
    );
}
