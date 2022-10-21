import { ContainerWrapper, InputFile, Gallery } from '../component';
import JSZip from 'jszip';
import config from '../config.json';
import { useState } from 'react';

const BASE64_PREFIX = config.BASE64_IMG_PREFIX;

const whenInput = async (inputFile, setFn) => {
  const result = [];
  const zipper = new JSZip();
  const { files } = await zipper.loadAsync(inputFile);

  for (const [key, value] of Object.entries(files)) {
    if (!key.startsWith('Maple')) {
      continue;
    }
    
    const base64Img = `${BASE64_PREFIX}${await value.async('base64')}`;
    result.push(base64Img);
  }
  
  setFn(result);
  
  return result;
}

function MonsterCollectionClassfier() {
  const [images, setImages] = useState([
  ]);

  return (
    <ContainerWrapper>
      <InputFile title="압축 파일 업로드" callback={(inputFile) => whenInput(inputFile, setImages)}/>
      <Gallery src={images}/>
    </ContainerWrapper>
  )
}

export default MonsterCollectionClassfier