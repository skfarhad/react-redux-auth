import { useState } from "react";

const useInput = initialValue => {
  const [field, setField] = useState(initialValue);

  return {
    field,
    setField,
    //reset: () => setField(initialValue),
    bind: {
      value: field,
      onChange: e => {
        setField(e.target.value);
      }
    }
  };
};

export default useInput;