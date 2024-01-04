import React from 'react';

import {
  Body,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm({
  name = 'Gabriel Luiz Epiphanio',
  email = 'gabriel@gabriel.com',
  message = 'Hello World test',
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>
        {name} sent a message via contact form from gabrielluizep.dev
      </Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-16 py-8">
          <Heading className="text-xl">
            New Message received in Contact Form
          </Heading>
          <Hr />
          <Section>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text>{message}</Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
