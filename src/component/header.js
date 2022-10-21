import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import RouteList from '../Routing';

function HeaderLogo() {
  const navigate = useNavigate();

  return <Logo onClick={() => navigate('/')}>HIT-N-RUN</Logo>
}
function HeaderElements({ routeList = [] }) {
  return <ElementWrapper>
    {
      routeList.map((RouteData, index) => (
        <HeaderNavItem key={`${RouteData.path}-${index}`}>
          <Link to={RouteData.path}>{RouteData.text}</Link>
        </HeaderNavItem>
      ))
    }
  </ElementWrapper>
}

function Header({ shadowBlock = true }) {
  const treatedRouteList = RouteList.filter((RouteData) => RouteData.path !== "/")

  return (
    <HeaderWrapper>
      <AbsContainer>
        <HeaderLogo />
        <HeaderElements routeList={treatedRouteList} />
      </AbsContainer>
      <RelBlock/>     
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  color: white;
`

const AbsContainer = styled.div`
  padding: 0 256px;
  width: 100%;
  height: 56px;
  position: absolute;
  top: 24px;
  left: 64px;
`;

const RelBlock = styled.div`
  height: 80px;
  width: 100%;
`;

const Logo = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 48px;
`

const ElementWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const HeaderNavItem = styled.div`
  display: inline-block;
  height: 100%;
  margin-left: 24px;

  & > a {
    text-decoration: none;
    color: white;
    font-size: 24px;
    line-height: 56px;
  }

  & > a.active {
    font-weight: bold;
  }
`

export default Header;