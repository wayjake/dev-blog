import { notion } from "../utils/notion";

export const getUsers = async () => {
    const response = await notion.users.list();
    let userData = response.results
    // console.log(`[getUsers] userData:`, userData);
    let users = Object.assign({}, ...userData.map((user) => ({[user.id]: user.name})));
    return users
}

