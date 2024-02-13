'use client';

import React, { useCallback, useState } from 'react';

export default function Img2Base64() {
  const [imgSrc, setImgSrc] = useState('');
  const [isImgLoading, setIsImgLoading] = useState(false);

  const onSelectFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    setIsImgLoading(true);

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImgSrc(reader.result?.toString() ?? '');
      setIsImgLoading(false);
    });
    reader.readAsDataURL(e.target.files[0]);
  }, []);

  return (
    <>
      <h1>Img2Base64</h1>
      <h2>Choose your image file</h2>
      <label htmlFor='selectImgFile'>file: </label>
      <input
        id='selectImgFile'
        type='file'
        name='img'
        accept='image/*'
        onChange={onSelectFile}
      />
      <Result base64Str={imgSrc} isImgLoading={isImgLoading} />
    </>
  );
}

function Result({
  base64Str,
  isImgLoading,
}: {
  base64Str: string;
  isImgLoading: boolean;
}) {
  if (isImgLoading) return <p>loading...</p>;
  if (!base64Str) return;

  return (
    <>
      <h2>preview</h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={base64Str} alt='previewForBase64EncodedImage' />
      <h2>base64 encoded string</h2>
      <textarea name='base64-encoded-string' className='w-full' rows={10}>
        {base64Str}
      </textarea>
    </>
  );
}
