import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.scss';

function SignIn() {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    email: '',
    pw: '',
  });
  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues(inputValues => ({ ...inputValues, [name]: value }));
  };
  const isValid =
    inputValues.email.includes('@' && '.') && inputValues.pw.length >= 8;

  function goToMain(e) {
    e.preventDefault();
    fetch('http://10.58.5.56:1234/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUCCESS') {
          localStorage.setItem('token', result.ACCESS_TOKEN);
          localStorage.setItem('name', result.NAME);
          alert('환영합니다! BoyFriends 입니다!');
          navigate('/');
        } else if (result.MESSAGE === 'INVALID_USER') {
          alert('이메일 또는 비밀번호를 다시 확인하세요!');
        }
      });
  }
  return (
    <div className="signIn">
      <div className="contentsWrapper">
        <div className="contents">
          <h1 className="loginText">로그인</h1>
          <form className="inputWrapper" onChange={handleInput}>
            <input
              className="input email"
              name="email"
              type="email"
              placeholder="아이디를 입력해주세요"
            />
            <input
              className="input pw"
              name="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />

            <div className="findWrapper">
              <label className="accessCheck">
                <input className="checkBox" type="checkbox" />
                보안접속
              </label>
              <div className="findIdPw">
                <Link to="/users/findid" className="link">
                  아이디 찾기
                </Link>
                <span className="bar">|</span>
                <Link to="/users/findpw" className="link">
                  비밀번호 찾기
                </Link>
              </div>
            </div>
            <div className="buttonWrapper">
              <button
                type="submit"
                className={`button loginBtn ${isValid ? 'valid' : 'notValid'}`}
                disabled={!isValid}
                onClick={goToMain}
              >
                로그인
              </button>
              <Link to="/users/signup">
                <button className="button signUpBtn">회원가입</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
