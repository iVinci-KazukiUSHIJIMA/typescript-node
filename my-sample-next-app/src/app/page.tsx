import React from 'react';
import { MyInfo, TickTock, FindUser } from '@/features';

export default function Home({
  searchParams,
}: {
  searchParams: { userId: string };
}) {
  const renderedAt = new Date().toISOString();

  return (
    <main>
      <div className='p-2 bg-slate-400 text-slate-900'>
        <p>this is page.tsx</p>
        <p>rendered at {renderedAt}</p>
        <div className='p-2 mt-1 bg-slate-900 text-slate-400'>
          <p>this is TickTock.tsx</p>
          <TickTock />
        </div>
        <div className='p-2 mt-1 bg-slate-900 text-slate-400'>
          <p>this is MyInfo.tsx</p>
          <MyInfo userId={searchParams.userId} />
        </div>
        <div className='p-2 mt-1 bg-slate-900 text-slate-400'>
          <p>this is FindUser.tsx</p>
          <FindUser />
        </div>
      </div>
    </main>
  );
}
