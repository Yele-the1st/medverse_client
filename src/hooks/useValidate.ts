import { useState } from "react";

interface ValidationResult {
  message: string;
  errorStat: string;
}

interface UseValidateResult {
  value: string;
  isValid: boolean;
  hasError: boolean;
  valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formSubmitHandler: () => void;
  errorMessage: string;
  reset: () => void;
  isTouched: boolean;
}

const useValidate = (
  validateValue: (value: string) => ValidationResult
): UseValidateResult => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const { message, errorStat } = validateValue(enteredValue);

  let errorMessage = message;

  const convertToBoolean = (value: string) => {
    return value === "true";
  };
  const valueIsValid = convertToBoolean(errorStat);

  // Change validation trigger to be based on isTouched and form submission
  const shouldValidate = isTouched && !valueIsValid;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  // Set isTouched on form submission
  const formSubmitHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: shouldValidate,
    valueChangeHandler,
    formSubmitHandler,
    errorMessage,
    reset,
    isTouched,
  };
};

export default useValidate;
