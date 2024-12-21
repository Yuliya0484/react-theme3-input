import s from "./Forms.module.css";

const Forms = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log({ username, email, password });

    e.target.reset();
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name: </span>
          <input className={s.input} name="username" type="text" />
        </label>
        <label className={s.label}>
          <span>Email: </span>
          <input className={s.input} name="email" type="text" />
        </label>
        <label className={s.label}>
          <span>Password: </span>
          <input className={s.input} name="password" type="password" />
        </label>
        <button className={s.button} type="submit">
          Enter
        </button>
      </form>
    </div>
  );
};

export default Forms;
