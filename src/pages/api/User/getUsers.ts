<<<<<<< HEAD:src/api/User/getUsers.ts
import notion from "../Client";
import {UserData} from "../../types/notion-api/UserDataExtraction";
import User from "../../types/user"
interface test  {
    userArray: UserData[],
}
interface testUsers {
    id: string,
    name: string
}
export const getUsers = async () => {
    const response = await notion.users.list();
    let userData: UserData[] = response.results
    console.log(`[getUsers] userData:`, userData);
    let users: User[] = Object.assign({}, ...userData.map((user) => ({[user.id]: user.name})));
    console.log(`[getUsers] users:`, users);
    return users;
=======
import { notion } from "../utils/notion";

export const getUsers = async () => {
    const response = await notion.users.list();
    let userData = response.results
    // console.log(`[getUsers] userData:`, userData);
    let users = Object.assign({}, ...userData.map((user) => ({[user.id]: user.name})));
    return users
>>>>>>> 9e3b938b4b9bbceeef01e41d98a34bd4f1170981:src/pages/api/User/getUsers.ts
}

