import { Classfier } from '../utils';

function AnalyzeButton() {

  return <button onClick={() => Classfier.AnalyzeImgByClasName('img_need_to_process')}>
    <h1>분석하기</h1>
  </button>
}

export default AnalyzeButton;