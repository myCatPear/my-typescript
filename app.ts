interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: "Denis",
  password: "123",
};

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: "xxx" },
};

type Validation<T> = {
  [K in keyof T]:
    | {
        isValid: true;
      }
    | {
        isValid: false;
        errorMessage: string;
      };
};
