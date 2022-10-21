import styled from "styled-components";

function ContainerWrapper({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: white;
  margin: 36px 320px 0 320px;
`

export default ContainerWrapper;