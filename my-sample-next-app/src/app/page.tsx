import React from 'react';
import { TickTock } from '@/component';
import { selectUser } from '@/util';

export default function Home({
  searchParams,
}: {
  searchParams: { userId: string };
}) {
  const renderedAt = new Date().toISOString();
  const user = selectUser(searchParams.userId);

  return (
    <main>
      <p>this is page.tsx</p>
      <p>rendered at {renderedAt}</p>
      <p>userId: {searchParams.userId ?? 'not specified'}</p>
      {searchParams.userId && user && <p>userName: {user.name}</p>}
      {searchParams.userId && !user && <p>user not found.</p>}
      <TickTock />
    </main>
  );
}
