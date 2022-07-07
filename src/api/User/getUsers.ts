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
}

