import s from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ children, title = "Default modal", onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    console.log("Modal is open!");
    const intervalId = setInterval(() => {
      console.log(new Date().tolocaleTimeString());
    }, 1000);
    const timeoutId = setTimeout(() => {
      console.log("Fire");
    }, 4000);
    return () => {
      console.log("Good bye");
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <h1>{title}</h1>
        <hr />
        <button onClick={onClose} className={s.closeBtn}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
