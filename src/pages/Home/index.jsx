import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ textAlign: "center" }}>
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
    </>
  );
}
