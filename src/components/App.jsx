import { Counter } from "./Counter/Counter";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { TodoList } from "./TodoList/TodoList.jsx";
import { useState } from "react";
import Modal from "./Modal/Modal.jsx";
import Vote from "./Vote/Vote.jsx";
import Forms from "./Forms/Forms.jsx";
import ControlledForm from "./Forms/ControlledForm.jsx";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const onRegister = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <h1>Uncontrolled Forms</h1>
        <Forms />
      </div>
      <div>
        <h1>Controlled Form</h1>
        <ControlledForm onRegister={onRegister} />
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        {isOpen && <Modal onClose={closeModal}></Modal>}
      </div>

      <Counter></Counter>
      <Vote></Vote>
      <ColorPicker></ColorPicker>
      <TodoList></TodoList>
    </>
  );
};
export default App;
