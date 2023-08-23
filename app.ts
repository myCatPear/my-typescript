interface Role {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface User {
  name: string;
  roles: Role[];
  permission: Permission;
}

const user: User = {
  name: "Denis",
  roles: [],
  permission: {
    endDate: new Date(),
  },
};

const nameUSer = user["name"];
const roleNames = "roles";

type rolesType = User["roles"];
type rolesType2 = User[typeof roleNames];

type roleType = User["roles"][number];
type dateType = User["permission"]["endDate"];

const roles = ["admin", "user"] as const;
type roleTypes = (typeof roles)[number];
