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
	}
}

export function getUser(queryParam: string | null): User | null {
	if (!queryParam) {
		return null;
	}

	return users[queryParam];
}