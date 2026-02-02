
import { Container, Header, ContentLayout } from '@cloudscape-design/components';
import SEO from '../components/SEO';

export default function Profile() {
    return (
        <ContentLayout
            header={
                <Header variant="h1">Profile</Header>
            }
        >
            <SEO title="Profile | Jay Lee" description="About Jay Lee - Frontend Engineer and UAS Operator." />
            <Container>
                <p>Content coming soon...</p>
            </Container>
        </ContentLayout>
    );
}
