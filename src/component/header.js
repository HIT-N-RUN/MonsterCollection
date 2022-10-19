import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import RouteList from '../Routing';

navigate('/home');
function Header() {
  const treatedRouteList = RouteList.filter((RouteData) => RouteData.path !== "/")
  const navigate = useNavigate();
  
  return <HeaderWrapper>
    <Logo onClick={history.push("/")}>HIT-N-RUN</Logo>
    {
      treatedRouteList.map((RouteData, index) => (
        <HeaderNavItem>
          <Link key={`${RouteData.path}-${index}`} to={RouteData.path}>{RouteData.text}</Link>
        </HeaderNavItem>
      ))
    }
  </HeaderWrapper>
}

const HeaderWrapper = styled.div`
  padding: 0 56px;
  width: calc(100vw - 112px);
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
`
const Logo = styled.div`
  display: inline-block;
  cursor: pointer;
`
const HeaderNavItem = styled.div`
  display: inline-block;
  height: 100%;
  margin-right: 24px;
`

export default Header;