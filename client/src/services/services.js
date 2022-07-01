export const dateParsing = fullDate => {
	const d = fullDate.slice(0, 10).split('-'),
		t = fullDate.slice(11, 16).split(':')

	let s = +t[1],
		h = +t[0]

	if (h >= 21) {
		switch (h) {
			case 21:
				h = 0
				break
			case 22:
				h = 1
				break
			case 23:
				h = 2
				break
		}
	} else {
		h += 3
	}

	s = `0${s}`.slice(-2)
	h = `0${h}`.slice(-2)

	const resDate = {
		date: `${d[2]}.${d[1]}.${d[0]} г.`,
		time: `${h}:${s} "мск"`,
	}

	return resDate
}
