import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Login.css';

// 로그인 할 수 있는 첫 화면 

function Login() {
    return (
        <div className="Login">
            <header className="Login_Header">
                <h5>째그만 이모티콘 그림</h5>
                <h3> 다이어리 이름 </h3>
            </header>

            <content className="Login_Content">
                <h5>아이디 입력</h5>
                <h5>비번 입력</h5>
                <h5><Link to='/main/diary'>로그인 버튼</Link></h5>
                <h5><Link to='/main/signup'>회원가입 버튼</Link></h5>
            </content>

            <footer className="Login_Footer">
                <h5>개발자 : 최솔</h5>
            </footer>

        </div>
    )
}

export default Login;
