import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <div>
    <h1>
      New message from {name} {`<${email}>`}
    </h1>
    <p>{message}</p>
  </div>
);
