import React from 'react';

export default function BlogLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto py-8 px-10">
      <div>{children}</div>
    </div>
  );
}
