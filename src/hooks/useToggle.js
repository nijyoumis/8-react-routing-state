import { useState } from "react";

const useToggle = (initialValue = "Maru") => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    if (state === "Woorie") {
      setState("Maru");
    } else {
      setState("Woorie");
    }
  };

  return [state, toggle];
};

export default useToggle;
