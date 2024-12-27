import { Field, Form, Formik } from "formik";
import s from "./Forms.module.css";
import * as Yup from "yup";

const SurveyForm = ({ onRegister }) => {
  const handleSubmit = (values, actions) => {
    onRegister(values);
    actions.resetForm();
  };
  const regName = "^[A-Za-zs]";
  const regEmail = "/^[^s@]+@[^s@]+.[^s@]+$/";
  const regPassword =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .matches(regName, "Це поле може містити тільки літери")
      .min(3, "Мінімум 3 символи")
      .max(20, "Максимум 20 символів")
      .required("Це поле обовʼязкове!"),
    email: Yup.string()
      .matches(regEmail, "Не валідна почтова адреса!")
      .required(),
    course: Yup.string()
      .oneOf(["frontend", "backend", "fullstack", "devOps"])
      .required(),
    password: Yup.string()
      .matches(regPassword, "Не валідний пароль!")
      .min(4, "Мінімум 4 символи")
      .max(12, "Максимум 12 символів")
      .required("Це поле обовʼязкове!"),
  });

  const initialValues = {
    username: "",
    email: "",
    course: "",
    level: "junior",
    details: "",
    isTermsAccepted: false,
  };
  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ values }) => (
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
              <span>Course: </span>
              <Field as="select" className={s.input} name="course" type="text">
                <option value="backend">Backend</option>
                <option value="frontend">Frontend</option>
                <option value="fullstack">Fullstack</option>
                <option value="devOps">DevOps</option>
              </Field>
            </label>
            <div>
              <label>
                <Field type="radio" value="junior" name="level" />
                <span>Junior</span>
              </label>
              <label>
                <Field type="radio" value="middle" name="level" />
                <span>Middle</span>
              </label>
              <label>
                <Field type="radio" value="senior" name="level" />
                <span>Senior</span>
              </label>
            </div>
            <label className={s.label}>
              <span>Details: </span>
              <Field as="textarea" className={s.input} name="details"></Field>
            </label>
            <label>
              <Field type="checkbox" name="isTermsAccepted" />
              <span>All terms and rules accepted!</span>
            </label>
            <button
              disabled={!values.isTermsAccepted}
              className={s.button}
              type="submit"
            >
              Enter
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SurveyForm;
