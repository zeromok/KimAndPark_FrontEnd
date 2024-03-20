// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import logImg from "./assets/img/Netflix_logo.svg.png";

function App() {
  return (
    <>
      <header style={{ padding: "1.5rem 2rem" }}>
        <a href="/">
          <img
            src={logImg}
            alt="logo"
            style={{ width: "9.25rem", height: "2.5rem" }}
          />
        </a>
      </header>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "450px",
          flexGrow: "1",
          margin: "0 auto",
          padding: "0 5%",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            borderRadius: "4px",
            boxSizing: "border-box",
            padding: "48px 68px",
          }}
        >
          <div
            style={{
              marginBottom: "28px",
              fontSize: "2rem",
              fontWeight: "700",
              color: "white",
            }}
          >
            <span>로그인</span>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: "1",
              gap: "16px",
            }}
          >
            <div>
              <input
                type="text"
                style={{ fontSize: "1rem", lineHeight: "1.5" }}
                placeholder="이메일 주소 또는 전화번호"
              />
            </div>
            <div>
              <input
                type="password"
                style={{ fontSize: "1rem", lineHeight: "1.5" }}
                placeholder="비밀번호"
              />
            </div>
            <button>로그인</button>
            <span>비밀번호를 잊으셨나요?</span>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <div>
              <input type="checkbox" />
              로그인 정보 저장
              <span>
                Netflix 회원이 아닌가요? <a href="/">지금 가입 하세요.</a>
              </span>
            </div>
            <div>
              <span>
                이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이
                아님을 확인합니다. <button>자세히 알아보기.</button>
              </span>
            </div>
          </div>
        </div>
      </body>
      <footer>
        <div>
          <div>
            <div>
              질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)
            </div>
          </div>
          <div>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0",
                padding: "0",
              }}
            >
              <li
                style={{ listStyleType: "none", textDecoration: "underline" }}
              >
                <a href="/">자주 묻는 질문</a>
              </li>
              <li
                style={{ listStyleType: "none", textDecoration: "underline" }}
              >
                <a href="/">고객센터</a>
              </li>
              <li
                style={{ listStyleType: "none", textDecoration: "underline" }}
              >
                <a href="/">이용약관</a>
              </li>
              <li
                style={{ listStyleType: "none", textDecoration: "underline" }}
              >
                <a href="/">개인정보 처리방침</a>
              </li>
              <li
                style={{ listStyleType: "none", textDecoration: "underline" }}
              >
                <a href="/">쿠키 설정</a>
              </li>
              <li
                style={{ listStyleType: "none", textDecoration: "underline" }}
              >
                <a href="/">회사 정보</a>
              </li>
            </ul>
          </div>
          <div>
            <select name="" id="">
              <option value="kr">한국어</option>
              <option value="en">English</option>
            </select>
          </div>
          <div>
            <div>
              넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
              제2018-서울종로-0426호 전화번호:00-308-321-0161 (수신자 부담)
            </div>
            <div>대표: 레지널드 숀 톰프슨</div>
            <div>이메일 주소: korea@netflix.com</div>
            <div>
              주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
              20층 우편번호 03161
            </div>
            <div>사업자등록번호: 165-87-00119</div>
            <div>클라우드 호스팅: Amazon Web Services Inc.</div>
            <div>공정거래위원회 웹사이트</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
