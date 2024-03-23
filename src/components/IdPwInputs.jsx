import { useFormik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import React, { useRef } from "react";

export default function LoginId() {
  const toast = useRef(null);

  const formik = useFormik({
    initialValues: {
      userId: "",
      userPw: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.userId) {
        errors.userId = "정확한 이메일 주소나 전화번호를 입력하세요.";
      }

      if (!data.userPw) {
        errors.userPw = "비밀번호는 4~60자 사이여야 합니다.";
      }

      return errors;
    },
    onSubmit: (data) => {
      alert("login API Call");
      console.log(data);
      formik.resetForm();
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <div style={{ marginBottom: "30px" }}>
        <small className="p-error">{formik.errors[name]}</small>
      </div>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
        <span className="p-float-label">
          <Toast ref={toast} />
          <InputText
            style={{
              width: "100%",
            }}
            id="userId"
            name="userId"
            value={formik.values.userId}
            onChange={(e) => {
              formik.setFieldValue("userId", e.target.value);
            }}
            className={classNames({
              "p-invalid": isFormFieldInvalid("userId"),
            })}
          />
          <label htmlFor="userId">이메일 주소 또는 전화번호</label>
        </span>
        {getFormErrorMessage("userId")}

        <span className="p-float-label" style={{ marginTop: "20px" }}>
          <Toast ref={toast} />
          <InputText
            style={{
              width: "100%",
            }}
            id="userPw"
            name="userPw"
            type="password"
            value={formik.values.userPw}
            onChange={(e) => {
              formik.setFieldValue("userPw", e.target.value);
            }}
            className={classNames({
              "p-invalid": isFormFieldInvalid("userPw"),
            })}
          />
          <label htmlFor="userPw">비밀번호</label>
        </span>
        {getFormErrorMessage("userPw")}

        <Button
          style={{
            width: "100%",
            marginBottom: "20px",
          }}
          type="submit"
          label="로그인"
          size="small"
        />
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            alert("찾지마세요.");
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
            color: "#d1d5db",
          }}
        >
          비밀번호를 잊으셨나요?
        </a>
      </form>
    </div>
  );
}
