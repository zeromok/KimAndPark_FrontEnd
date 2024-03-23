import { Card } from "primereact/card";
import IdPwInputs from "../../components/IdPwInputs";
import "./styles/login.scss";

export default function Login() {
  return (
    <div>
      <header style={{ height: "100px" }}></header>
      <div className="loginForm">
        <div className="box">
          <Card title="로그인">
            <IdPwInputs />
          </Card>
        </div>
      </div>
    </div>
  );
}
