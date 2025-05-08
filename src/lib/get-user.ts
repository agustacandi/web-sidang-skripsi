interface User {
  name: string;
  image: string;
}

const users: Record<string, User> = {
  "laksjdlkasjdasdwe": {
    name: "Aknez Nuril Mahmuda",
    image: "/user/laksjdlkasjdasdwe.jpeg"
  },
  "qpwoeqwpoksajdasdas": {
    name: "Andini Putri Ramadhani",
    image: "/user/qpwoeqwpoksajdasdas.png"
  },
  "nnnaosudqoiwjdpqoj": {
    name: "Firdiyatus Sholihah",
    image: "/user/nnnaosudqoiwjdpqoj.jpeg"
  },
  "yiwuyerewiuryweri": {
    name: "Elisa Febrian Sholeha",
    image: "/user/yiwuyerewiuryweri.jpeg"
  },
  "uwyegfkjsdhfklsdjfl": {
    name: "Indra Prasetyo Wijaya",
    image: "/user/uwyegfkjsdhfklsdjfl.jpeg"
  },
  "zzmndwlyaosknjdaskld": {
    name: "Fara Derliana",
    image: "/user/zzmndwlyaosknjdaskld.jpeg"
  },
  "poijfwjhkajjdalksjdas": {
    name: "Krisna Choiril Andika",
    image: "/user/poijfwjhkajjdalksjdas.jpeg"
  }
}

export function getUser(queryParam: string | null): User | null {
  if (!queryParam) {
    return null;
  }

  return users[queryParam];
}
