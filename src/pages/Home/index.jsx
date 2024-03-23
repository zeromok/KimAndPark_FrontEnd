import { useNavigate } from "react-router-dom";
import "./styles/main.scss";

export default function Main() {
  const navigate = useNavigate();

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
