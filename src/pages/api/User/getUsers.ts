import { notion } from "../utils/notion";
import { User } from "../../../types/notion-api/User"

interface test  {
    userArray: User[],
}
interface testUsers {
    id: string,
    name: string
}
export const getUsers = async () => {
    const response = await notion.users.list();
    let userData = response.results
    console.log(`[getUsers] userData:`, userData);
    let users: User[] = Object.assign({}, ...userData.map((user) => ({[user.id]: user.name})));
    console.log(`[getUsers] users:`, users);
    return users;
}
