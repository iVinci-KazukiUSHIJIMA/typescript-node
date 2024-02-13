'use client';

import React, { useCallback, useState } from 'react';

export default function Img2Base64() {
  const [imgSrc, setImgSrc] = useState('');
  const [fileName, setFileName] = useState('');
  const [isImgLoading, setIsImgLoading] = useState(false);

  const onSelectFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    setIsImgLoading(true);

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImgSrc(reader.result?.toString() ?? '');
      setIsImgLoading(false);
    });
    reader.readAsDataURL(file);
    setFileName(file.name);
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
      <div className='mt-2'>
        <Result
          base64Str={imgSrc}
          fileName={fileName}
          isImgLoading={isImgLoading}
        />
      </div>
    </>
  );
}

function Result({
  base64Str,
  fileName,
  isImgLoading,
}: {
  base64Str: string;
  fileName: string;
  isImgLoading: boolean;
}) {
  if (isImgLoading) return <p>loading...</p>;
  if (!base64Str) return;

  return (
    <>
      <div>
        <h2>preview</h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={base64Str} alt='previewForBase64EncodedImage' />
      </div>
      <div className='mt-2'>
        <h2>base64 encoded string</h2>
        <textarea name='base64-encoded-string' className='w-full' rows={10}>
          {base64Str}
        </textarea>
      </div>
      <div className='mt-2'>
        <h2>with markdown</h2>
        <textarea name='base64-encoded-string' className='w-full' rows={10}>
          {`![${fileName}](${base64Str} "${fileName}")`}
        </textarea>
      </div>
    </>
  );
}
