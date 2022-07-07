type User = {
  object: "user";
  id: string;
  type?: string;
  name?: string;
  avatar_url?: string;
  person?: { email?: string };
}

export default User;