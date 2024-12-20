import { useEffect, useState } from "react";
import s from "./Counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("change counter", counter);
  }, [counter]);

  const hanleClickMinus = () => {
    setCounter((prev) => prev - step);
  };
  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };
  const handleClickPlus = () => {
    setCounter((prev) => prev + step);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          className={s.input}
          type="number"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <div className={s.flex}>
          <button onClick={hanleClickMinus} className={s.btn}>
            minus
          </button>
          <button onClick={handleReset} className={s.btn}>
            reset
          </button>
          <button onClick={handleClickPlus} className={s.btn}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
