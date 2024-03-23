import axios from "axios";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import React, { useRef } from "react";
import axiosInstance from "../services/api";

export default function LoginId() {
  const toast = useRef(null);

  const login = (parmas) => {
    // try {
    //   axios.post("http://127.0.0.1:8080/login", parmas).then((res) => {
    //     console.log(res);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    axiosInstance
      .get(process.env.REACT_APP_TEST_URL)
      .then((res) => console.log(res));
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.username) {
        errors.username = "정확한 이메일 주소나 전화번호를 입력하세요.";
      }

      if (!data.password) {
        errors.password = "비밀번호는 4~60자 사이여야 합니다.";
      }

      return errors;
    },
    onSubmit: (data) => {
      alert("login API Call");
      login(data);
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
            id="username"
            name="username"
            value={formik.values.username}
            onChange={(e) => {
              formik.setFieldValue("username", e.target.value);
            }}
            className={classNames({
              "p-invalid": isFormFieldInvalid("username"),
            })}
          />
          <label htmlFor="username">이메일 주소 또는 전화번호</label>
        </span>
        {getFormErrorMessage("username")}

        <span className="p-float-label" style={{ marginTop: "20px" }}>
          <Toast ref={toast} />
          <InputText
            style={{
              width: "100%",
            }}
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={(e) => {
              formik.setFieldValue("password", e.target.value);
            }}
            className={classNames({
              "p-invalid": isFormFieldInvalid("password"),
            })}
          />
          <label htmlFor="password">비밀번호</label>
        </span>
        {getFormErrorMessage("password")}

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
