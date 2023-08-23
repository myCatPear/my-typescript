interface User {
  name: string;
  age?: number;
}

type p = Partial<User>;

type r = Required<User>;

type read = Readonly<User>;
