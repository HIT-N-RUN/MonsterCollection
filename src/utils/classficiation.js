
class Classfier {
  static AnalyzeImg = async (base64) => {
    try {

    } catch (e) {
      console.error('Analyze Img Error');
      throw new Error("--AnalyzeImg Error--");
    }
  }

  static AnalyzeImgByDom = async (domNode) => {
    const target = domNode.src;

    return await this.AnalyzeImg(target);
  }

  static AnalyzeImgByClasName = async (className) => {
    const domNodes = document.getElementsByClassName(className);
    const result = [];
    
    for (let i = 0; i < domNodes.length; i++) {
      console.log(i, domNodes[i])
      result.push(
        await this.AnalyzeImgByDom(domNodes[i])
      )
    }

    console.log(result);

    return result;
  }
}

export default Classfier;