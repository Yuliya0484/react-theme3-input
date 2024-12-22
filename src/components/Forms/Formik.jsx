import { Field, Form, Formik } from "formik";
import s from "./Forms.module.css";

const FormRegister = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name: </span>
            <Field className={s.input} name="username" type="text" />
          </label>
          <label className={s.label}>
            <span>Email: </span>
            <Field className={s.input} name="email" type="text" />
          </label>
          <label className={s.label}>
            <span>Password: </span>
            <Field className={s.input} name="password" type="password" />
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
