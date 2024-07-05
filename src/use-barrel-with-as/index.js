import { userApi } from "./lib";

const users = await userApi.fetchUsers();

console.log(users)
