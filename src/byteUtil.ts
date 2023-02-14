export const stringToUTF8Byte = (text: string) => {
	const res: number[] = [];

	if (!text) {
		return res;
	}

	for (let i = 0; i < text.length; i += 1) {
		const c = text.charCodeAt(i);

		if (c <= 0x7f) {
			res.push(c);
		} else if (c <= 0x07ff) {
			res.push(((c >> 6) & 0x1f) | 0xc0);
			res.push((c & 0x3f) | 0x80);
		} else {
			res.push(((c >> 12) & 0x0f) | 0xe0);
			res.push(((c >> 6) & 0x3f) | 0x80);
			res.push((c & 0x3f) | 0x80);
		}
	}

	return res;
	// https://codingcoding.tistory.com/1248
};
