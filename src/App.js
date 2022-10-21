import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import config from './config.json';
import RouteList from './Routing';

function App() {
  return (
    <BrowserRouter basename={config.URL_PREFIX}>
      <Routes>
        {
          RouteList.map((RouteData, index) => (
            <Route key={`${RouteData.path}-${index}`} path={RouteData.path} element={<RouteData.Page/>}/>
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App;
