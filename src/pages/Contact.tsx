
import { Container, Header, ContentLayout, Form, FormField, Input, Button, Textarea, SpaceBetween } from '@cloudscape-design/components';

export default function Contact() {
    return (
        <ContentLayout
            header={
                <Header variant="h1">Contact Me</Header>
            }
        >
            <form onSubmit={e => e.preventDefault()}>
                <Form
                    actions={
                        <Button variant="primary">Send Message</Button>
                    }
                >
                    <Container>
                        <SpaceBetween direction='vertical' size='l'>
                        <FormField
                            label="Name"
                            stretch
                        >
                            <Input
                                value=""
                                onChange={() => { }}
                                placeholder="Your Name"
                            />
                        </FormField>
                        <FormField
                            label="Email"
                            stretch
                        >
                            <Input
                                value=""
                                onChange={() => { }}
                                placeholder="your.email@example.com"
                            />
                        </FormField>
                        <FormField
                            label="Message"
                            stretch
                        >
                            <Textarea
                                value=""
                                onChange={() => { }}
                                placeholder="Your message here"
                            />
                        </FormField>
                        </SpaceBetween>
                    </Container>
                </Form>
            </form>
        </ContentLayout>
    );
}
