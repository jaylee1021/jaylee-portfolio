
import { Container, Header, ContentLayout, Form, FormField, Input, Button, Textarea } from '@cloudscape-design/components';

export default function Contact() {
    return (
        <ContentLayout
            header={
                <Header variant="h1">Contact Me</Header>
            }
        >
            <Container>
                <form onSubmit={e => e.preventDefault()}>
                    <Form
                        actions={
                            <Button variant="primary">Send Message</Button>
                        }
                    >
                        <FormField
                            label="Name"
                        >
                            <Input
                                value=""
                                onChange={() => { }}
                                placeholder="Your Name"
                            />
                        </FormField>
                        <FormField
                            label="Email"
                        >
                            <Input
                                value=""
                                onChange={() => { }}
                                placeholder="your.email@example.com"
                            />
                        </FormField>
                        <FormField
                            label="Message"
                        >
                            <Textarea
                                value=""
                                onChange={() => { }}
                                placeholder="Your message here"
                            />
                        </FormField>
                    </Form>
                </form>
            </Container>
        </ContentLayout>
    );
}
