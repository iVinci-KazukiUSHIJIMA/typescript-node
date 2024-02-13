import { User } from '@/types';
import React from 'react';

async function getData({ userId }: { userId: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (await res.json()) as User;
}

export async function MyInfo({ userId }: { userId: string }) {
  if (!userId)
    return (
      <p>userId is not specified. add search parameter like `?userId=1`</p>
    );

  const user = await getData({ userId }).catch(() => undefined);

  if (!user) return <p>something went wrong...</p>;

  return (
    <>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>website: {user.website ?? 'not specified'}</p>
    </>
  );
}
