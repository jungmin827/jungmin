import { Button, Navbar, Container, Nav, Stack } from 'react-bootstrap';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

import Main from './pages/main/Main.js';
import Place from './pages/Place.js';
import Login from './pages/login/Login.js';
import MyPage from './pages/mypage/MyPage.js';

import data from './DataSample.js';
import LoginForm from './pages/login/LoginForm.js';
import SignupForm from './pages/login/SignupForm.js';
import Plan from './pages/Plan.js'


function App() {

  let [places] = useState(data)

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand onClick={() => { navigate('/') }} style={{ cursor: 'pointer' }}>
            BAMYANGGANGWON
          </Navbar.Brand>
          <Nav className="ms-auto">
            {/* 클릭하면 페이지 이동 */}
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            {/* <Nav.Link onClick={()=>{ navigate('/place') }}>Place</Nav.Link> */}
            <Nav.Link onClick={()=>{ navigate('/plan') }}>Plan</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/mypage') }}>MyPage</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/loginform') }}>Login</Nav.Link>
            {/* <Nav.Link onClick={()=>{ navigate('/loginform') }}>LoginForm</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/signupform') }}>SignupForm</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>


      
      {/* js파일 하나 만들고 가져옴, 자세한건 그 파일 내에서 디자인. */}
      <Routes>
        <Route path="/" element={
          <>
          <p></p>
            {/* <div className="main-bg"></div> */}
            <Main/>
          </>
        }/>
        
        <Route path="/place" element={<Place places={places}/>} />
        {/* 페이지 여러개 만들 때 URL파라미터 사용. 장소클릭했을 때의 디테일을 보여주기 위함. */}
        {/* <Route path="/placedetail/:id" element={<PlaceDetail places={places} />}/> */}

        <Route path="/login" element={<Login/>}>
          {/* 로그인 안에서 회원가입으로 넘어갈 때, 상위 element도 보여줌. 상위 엘리먼트에 어디에 보여줄지 작성해야함. 상위 element에서 Outlet으로 구멍 뚫어주기 */}
          {/* <Route path="join" element={<Join/>} /> */}
        </Route>
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/plan" element={<Plan/>} />
        <Route path="/loginform" element={<LoginForm/>} />
        <Route path="/signupform" element={<SignupForm/>} />

        {/* 내가 만든 페이지 외에 다른 주소 입력시 에러 */}
        <Route path="*" element={<div>404</div>}/>
      </Routes>

  

    </div>
  );
}


export default App;
