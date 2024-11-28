import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  return (
    <div className={s.input_wrapper}>
      <label className={s.input_label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        placeholder="Enter name"
        className={s.input}
        type="text"
        id={id}
        name="find"
      />
    </div>
  );
};

export default SearchBox;
