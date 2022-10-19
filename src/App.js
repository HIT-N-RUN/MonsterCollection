// import { useEffect, useState } from 'react';
// import JSZip from 'jszip';
import './App.css';
// import { Header } from './component';
import { BrowserRouter,Route, Routes } from "react-router-dom";

// function InputFileTag({ style={}, callback=()=>{} }) {
//   const [inputData, setInputData] = useState(null);

//   function handleChange(e) {
//     const inputFile = e.target.files[0];
    
//     setInputData(inputFile);
//   }

//   useEffect(() => {
//     if (inputData === null) {
//       return;
//     }

//     if (callback) {
//       callback(inputData);
//     }
//   }, [inputData, callback])

//   return (
//     <input type="file" name="파일 입력" onChange={handleChange}/>
//   )
// }

// function InputButtonTag({ callback=() => {} }) {
//   function handleClick(e) {
//     if (callback) {
//       callback(e);
//     }
//   }
//   return <button onClick={handleClick}>변환</button>
// }
// const BASE64_PREFIX = "data:image/png;base64,";

// function App() {
//   const whenInput = async (inputFile) => {
//     const ImageWrapper = document.getElementById('ImageWrapper');

//     ImageWrapper.innerHTML = '';

//     const zipper = new JSZip();
//     const { files } = await zipper.loadAsync(inputFile);

//     for (const [key, value] of Object.entries(files)) {
//       if (!key.startsWith('Maple')) {
//         continue;
//       }
      
//       const base64Img = await value.async('base64');
//       const imgTag = document.createElement('img');
//       imgTag.src = `${BASE64_PREFIX}${base64Img}`;

//       ImageWrapper.append(imgTag);
//     }
//   }

//   const whenProcess = async () => {
//     const imgs = document.getElementsByTagName("img");

//     for (let i = 0; i < imgs.length; i++) {
//       const target = imgs[i].src;
//       console.log(target);
//     }
//   }

//   return (
//     <div id="APP" className="App">
//       <Header/>
//       <InputFileTag callback={whenInput}/>
//       <InputButtonTag callback={whenProcess}/>
//       <div id="ImageWrapper">

//       </div>
//     </div>
//   );
// }


import RouteList from './Routing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          RouteList.map((RouteData, index) => (
            <Route key={`${RouteData.path}-${index}`} path={RouteData.path} element={<RouteData.Component/>}/>
          ))
        }
      </Routes>
      {/* <div style={{padding:20, border:'5px solid gray'}}>
        <Link to="/">홈</Link><br/>
        <Link to="/photo">사진</Link><br/>
        <Link to="rooms">방 소개</Link><br/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/photo" component={Photo}/>
          <Route path="/rooms" component={Rooms}/>
        </Switch>
      </div> */}
    </BrowserRouter>
  )
}

export default App;
