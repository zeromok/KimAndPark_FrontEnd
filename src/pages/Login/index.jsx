import { Card } from "primereact/card";
import IdPwInputs from "../../components/IdPwInputs";

export default function Login() {
  return (
    <div>
      <header style={{ height: "100px" }}></header>
      <div
        style={{
          display: "flex",
          maxWidth: "450px",
          margin: "auto",
          padding: "0 5%",
          flexGrow: 1,
        }}
      >
        <div style={{ width: "100%" }}>
          <Card title="로그인">
            <IdPwInputs />
          </Card>
        </div>
      </div>
    </div>
  );
}
