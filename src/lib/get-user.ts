interface User {
  name: string;
  image: string;
}

const users: Record<string, User> = {
  "alksdjlkasjdlkajskldjaksljd": {
    name: "Riski Rosalinda",
    image: "/user/alksdjlkasjdlkajskldjaksljd.jpeg"
  }
}

export function getUser(queryParam: string | null): User | null {
  if (!queryParam) {
    return null;
  }

  return users[queryParam];
}
