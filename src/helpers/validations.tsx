export const emailValidation = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value.trim() === "") {
    return { message: "Email is required.", errorStat: "false" };
  } else if (!emailRegex.test(value)) {
    return {
      message: "Please enter a valid email address.",
      errorStat: "false",
    };
  } else {
    return { message: "", errorStat: "true" };
  }
};

export const passwordValidation = (value: string) => {
  if (value.trim() === "") {
    return { message: "Password is required", errorStat: "false" };
  } else {
    return { message: "", errorStat: "true" };
  }
};
