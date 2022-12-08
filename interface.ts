interface User {
  id: number;
  fullName: string;
  role: object;
  token: string;
  active?: boolean;
}

let currentUser: User = {
  id: 1,
  fullName: "Jose Peres",
  role: {},
  token: "Ex cillum elit amet amet.",
};

console.log(currentUser);
