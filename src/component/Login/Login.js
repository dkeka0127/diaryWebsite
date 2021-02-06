import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/Login.css';
import Logo from '../../img/logo.jpeg';

// 로그인 할 수 있는 첫 화면 

function Login() {
    return (
        <div className="Login">
            {/* Header */}
            <div className="Login_Header">
                <div className="Logo">
                    <img src={Logo} /><img src={Logo} /><img src={Logo} /><img src={Logo} />
                </div>
                <div className="Name">DayByDay</div>
            </div>
            {/* Content */}
            <div className="Login_Content">
                <div className="ID">INPUT ID</div>
                <div className="PW">INPUT PW</div>
                <div className="Button">
                <Link to="/main/diary" className="Login_B">LOGIN</Link>
                <Link to="/main/signup" className="SignUp_B">JOIN</Link>
                </div>
            </div>
            {/* Footer */}
            <div className="Login_Footer">
                <div className="Developer">
                    <h6>개발자</h6>
                    <h5>최 솔</h5>
                </div>
                <div className="Contact">
                    <h6>문의 / 개선사항</h6>
                    <h5>chlthf0127@gmail.com</h5>
                </div>
            </div>
        </div>
    );
}

export default Login;

                {/* <div className="ID">INPUT ID</div>
                <div className="PW">INPUT PW</div>
                <Link to="/main/diary" className="Login">LOGIN</Link>
                <Link to="/main/signup" className="SignUp">JOIN</Link> */}