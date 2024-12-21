import { useState } from "react";
import s from "./Forms.module.css";
const INITIAL_STATE = { username: "", email: "", password: "" };
const ControlledForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(INITIAL_STATE);
  };
  //так робити не бажано))) - це приклад
  // const handleChangeUsername = (e) => {
  //   console.log(e.target.value);
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       username: e.target.value,
  //     };
  //   });
  // };
  // const handleChangeEmail = (e) => {
  //   console.log(e.target.value);
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       email: e.target.value,
  //     };
  //   });
  // };
  // const handleChangePassword = (e) => {
  //   console.log(e.target.value);
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       password: e.target.value,
  //     };
  //   });
  // };
  const handleChangeInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name: </span>
          <input
            className={s.input}
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChangeInput}
          />
        </label>
        <label className={s.label}>
          <span>Email: </span>
          <input
            className={s.input}
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChangeInput}
          />
        </label>
        <label className={s.label}>
          <span>Password: </span>
          <input
            className={s.input}
            name="password"
            type="password"
            value={formData.password}
            onClick={handleChangeInput}
          />
        </label>
        <button className={s.button} type="submit">
          Enter
        </button>
      </form>
    </div>
  );
};

export default ControlledForm;
