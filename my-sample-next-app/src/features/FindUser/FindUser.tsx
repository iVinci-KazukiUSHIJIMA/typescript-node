'use client';

import { useDataFetching } from '@/hooks';
import { User } from '@/types';
import React, { useState } from 'react';

export function FindUser() {
  const [id, setId] = useState(2);
  const { data, isLoading, hasError } = useDataFetching<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return (
    <>
      <SelectId
        value={id}
        onChange={(e) => {
          setId(+e.target.value);
        }}
      />
      <UserInfo data={data} isLoading={isLoading} hasError={hasError} />
    </>
  );
}

function SelectId(props: React.ComponentProps<'select'>) {
  return (
    <label>
      userId:
      <select name='user-id' {...props}>
        {[...new Array(5)].map((_, index) => (
          <option key={index} value={index}>
            {index}
          </option>
        ))}
      </select>
    </label>
  );
}

function UserInfo({
  data,
  isLoading,
  hasError,
}: {
  data?: User;
  isLoading: boolean;
  hasError: boolean;
}) {
  if (isLoading) return <p>loading...</p>;
  if (hasError) return <p>something went wrong...</p>;
  if (!data) return;

  return (
    <>
      <p>name: {data.name}</p>
      <p>website: {data.website ?? 'not specified'}</p>
    </>
  );
}
