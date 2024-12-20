import { useState } from "react";
import s from "./Vote.module.css";

const Vote = () => {
  const [voteData, setVoteData] = useState({
    windows: 0,
    linux: 0,
    macOS: 0,
  });
  const handleClickByOption = (option) => {
    setVoteData((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };
  return (
    <div className={s.vote_box}>
      <h2 className={s.title}>Please, leave your vote here!</h2>
      <ul className={s.vote_list}>
        <li className={s.vote_item}>Windows: {voteData.windows}</li>
        <li className={s.vote_item}>Linux: {voteData.linux}</li>
        <li className={s.vote_item}>MacOS: {voteData.macOS}</li>
      </ul>

      <div className={s.button_box}>
        <button
          className={s.vote_button}
          onClick={() => handleClickByOption("windows")}
        >
          Windows
        </button>
        <button
          className={s.vote_button}
          onClick={() => handleClickByOption("linux")}
        >
          Linux
        </button>
        <button
          className={s.vote_button}
          onClick={() => handleClickByOption("macOS")}
        >
          MacOS
        </button>
      </div>
    </div>
  );
};

export default Vote;

// const Vote = () => {
//   const [voteData, setVoteData] = useState({
//     windows: 0,
//     linux: 0,
//     macOS: 0,
//   });
//const handleClickByOption = (option) => {
// switch (option) {
//   case "windows":
//     return setVoteData((prev) => ({ ...prev, windows: prev.windows + 1 }));
//   case "linux":
//     return setVoteData((prev) => ({ ...prev, linux: prev.linux + 1 }));
//   case "macOS":
//     return setVoteData((prev) => ({ ...prev, macOS: prev.macOS + 1 }));
//   default:
//     break;
//setVoteData((prev) => ({ ...prev, [option]: prev[option] + 1 }));
//};

// return (
//   <div className={s.vote_box}>
//     <ul className={s.vote_list}>
//       <li className={s.vote_item}>Windows: {voteData.windows}</li>
//       <li className={s.vote_item}>Linux: {voteData.linux}</li>
//       <li className={s.vote_item}>MacOS: {voteData.macOS}</li>
//     </ul>

//     <div className={s.button_box}>
//       <button
//         className={s.vote_button}
//         onClick={() => handleClickByOption("windows")}
//       >
//         Windows
//       </button>
//       <button
//         className={s.vote_button}
//         onClick={() => handleClickByOption("linux")}
//       >
//         Linux
//       </button>
//       <button
//         className={s.vote_button}
//         onClick={() => handleClickByOption("macOS")}
//       >
//         MacOS
//       </button>
//     </div>
//   </div>
// );
//export default Vote;
