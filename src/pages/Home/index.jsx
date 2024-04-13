import { useNavigate } from "react-router-dom";
import "./styles/main.scss";
import { useEffect } from "react";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users").then((res) => {
      res.json().then((res) => {
        console.log(res.name);
      });
    });
  }, []);

  return (
    <div className="wrap">
      <p>Hello</p>
      <button
        onClick={() => {
          console.log("navigate to Login Page");
          navigate("/login");
        }}
      >
        로그인
      </button>
    </div>
  );
}
