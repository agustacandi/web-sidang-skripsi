interface User {
  name: string;
  image: string;
}

const users: Record<string, User> = {
  "lkjsdlakdasladajsdhjashd": {
    name: "Riski Rosalinda",
    image: "/user/lkjsdlakdasladajsdhjashd.png"
  }
}

export function getUser(queryParam: string | null): User | null {
  if (!queryParam) {
    return null;
  }

  return users[queryParam];
}
