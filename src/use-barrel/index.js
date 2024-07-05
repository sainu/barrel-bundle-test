import { fetchUsers } from "./lib";

const users = await fetchUsers();

console.log(users)
