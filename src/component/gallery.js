import styled from "styled-components";

function Gallery({ src=[] }) {
  const columns = [];

  for (let i = 0; i < src.length / 4; i++) {
    columns.push(src.slice(i * 4, i * 4 + 4));
  }

  return (
    <GallerWrapper>
      {
        columns.map((column, c_index) => {
          return (
            <Column key={c_index}>
              {column.map((imgSrc, i_index) => <img key={`${c_index}-${i_index}`} src={imgSrc} className="img_need_to_process" alt="로드 실패"/>)}
            </Column>
          )
        })
      }
    </GallerWrapper>
  )
}

const GallerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`;

const Column = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;


  & > img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }
`

export default Gallery;