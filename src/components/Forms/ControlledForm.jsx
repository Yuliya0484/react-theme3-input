import { useState } from "react";
import s from "./Forms.module.css";
const INITIAL_STATE = {
  username: "",
  email: "",
  course: "",
  level: "junior",
  details: "",
  isTermsAccepted: false,
};
const ControlledForm = ({ onRegister }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister(formData);
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
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      return setFormData((prev) => ({ ...prev, [name]: !prev[name] }));
    }
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
          <span>Course: </span>
          <select
            className={s.input}
            name="course"
            type="text"
            value={formData.course}
            onChange={handleChangeInput}
          >
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Fullstack</option>
            <option value="devOps">DevOps</option>
          </select>
        </label>
        <div>
          <label>
            <input
              onChange={handleChangeInput}
              checked={formData.level === "junior"}
              type="radio"
              value="junior"
              name="level"
            />
            <span>Junior</span>
          </label>
          <label>
            <input
              onChange={handleChangeInput}
              checked={formData.level === "middle"}
              type="radio"
              value="middle"
              name="level"
            />
            <span>Middle</span>
          </label>
          <label>
            <input
              onChange={handleChangeInput}
              checked={formData.level === "senior"}
              type="radio"
              value="senior"
              name="level"
            />
            <span>Senior</span>
          </label>
        </div>
        <label className={s.label}>
          <span>Details: </span>
          <textarea
            className={s.input}
            name="details"
            value={formData.details}
            onChange={handleChangeInput}
          ></textarea>
        </label>
        <label>
          {" "}
          <input
            type="checkbox"
            name="isTermsAccepted"
            checked={formData.isTermsAccepted}
            onChange={handleChangeInput}
          />
          <span>All terms and rules accepted!</span>
        </label>
        <button
          disabled={formData.isTermsAccepted}
          className={s.button}
          type="submit"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default ControlledForm;
