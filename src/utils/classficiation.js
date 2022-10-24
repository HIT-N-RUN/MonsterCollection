import searchImg from '../resources/searchImg1.png';

class Classfier {
  static getImageMeta(base64) {
    return new Promise (function (resolved, rejected) {
      var img = new Image()
      img.onload = () => {
        resolved({width: img.width, height: img.height, dom: img})
      };
      img.src = base64
    })
  }

  static compare = async (origin_dom, compare_dom) => {
    console.log(origin_dom.width, origin_dom.height)
    console.log(compare_dom.width, compare_dom.height)
    const origin_canvas = document.createElement('canvas');
    origin_canvas.width = origin_dom.width;
    origin_canvas.height = origin_dom.height;
    origin_canvas.getContext('2d').drawImage(origin_dom, 0, 0, origin_dom.width, origin_dom.height);

    const compare_canvas = document.createElement('canvas');
    compare_canvas.width = compare_dom.width;
    compare_canvas.height = compare_dom.height;
    compare_canvas.getContext('2d').drawImage(compare_dom, 0, 0, compare_dom.width, compare_dom.height);
  
    document.getElementsByClassName("sc-gKPRtg")[0].append(origin_canvas);
    document.getElementsByClassName("sc-gKPRtg")[0].append(compare_canvas);
  }

  static AnalyzeImgByDom = async (domNode) => {
    const origin_dom = (await this.getImageMeta(domNode.src)).dom;
    const compare_dom = (await this.getImageMeta(searchImg)).dom;

    return await this.compare(origin_dom, compare_dom);
  }

  static AnalyzeImgByClasName = async (className) => {
    const domNodes = document.getElementsByClassName(className);
    const result = [];
    
    for (let i = 0; i < domNodes.length; i++) {
      result.push(
        await this.AnalyzeImgByDom(domNodes[i])
      )
    }

    // console.log(result);

    return result;
  }
}

export default Classfier;