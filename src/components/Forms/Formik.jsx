import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./Forms.module.css";

const FormRegister = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    console.log(actions);
  };
  const regName =
    "^^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ'-]{2,}(?: [A-Za-zА-Яа-яЁёЇїІіЄєҐґ'-]+)*$";
  const regEmail = "/^[^s@]+@[^s@]+.[^s@]+$/";
  const regPassword =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .matches(regName, "Це поле може містити тільки літери")
      .min(3, "Мінімум 3 символи")
      .max(20, "Максимум 20 символів")
      .required("Це поле обовʼязкове!"),
    email: Yup.string()
      .matches(regEmail, "Не валідна почтова адреса!")
      .required(),
    password: Yup.string()
      .matches(regPassword, "Не валідний пароль!")
      .min(4, "Мінімум 4 символи")
      .max(12, "Максимум 12 символів")
      .required("Це поле обовʼязкове!"),
  });
  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name: </span>
            <Field className={s.input} name="username" type="text" />
            <ErrorMessage name="username" className={s.error} component="div" />
          </label>
          <label className={s.label}>
            <span>Email: </span>
            <Field className={s.input} name="email" type="text" />
            <ErrorMessage name="email" className={s.error} component="div" />
          </label>
          <label className={s.label}>
            <span>Password: </span>
            <Field className={s.input} name="password" type="password" />
            <ErrorMessage name="password" className={s.error} component="div" />
          </label>
          <button className={s.button} type="submit">
            Enter
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormRegister;
