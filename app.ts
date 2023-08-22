interface IUser {
  name: string;
  age: number;
}

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user: IUser = {
  age: 11,
  name: "Da",
};

const userName = getValue(user, "name");
