import { fetchUsers } from "./lib/user/api";

const users = await fetchUsers();

console.log(users)
