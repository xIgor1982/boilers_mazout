/**
 * Функция объединения двух массивов по совпадающим идентификаторам и добавлением поля счетчика из запроса SQL
 * @param {Array} req первый массив
 * @param {Array} res второй массив
 * @param {Array} searchID массив из двух искомых ID, если совпадают имена ID - возможно передать массив из одного элемента
 * @param {string} nameProp новое создаваемое свойство объекта. По умолчанию свойство называется "newProp"
 * @param {string} searchField передаваемый счетчик стандартное имя в SQL "count"
 * @returns {Array}
 */
const createNewArray = (
	req,
	res,
	searchID,
	nameProp = 'newProp',
	searchField = 'count'
) => {
	let firstId = searchID[0],
		secondId = searchID[0]
	if (searchID.length == 2) {
		secondId = searchID[1]
	}

	req.forEach(kot => {
		res.forEach(count => {
			if (count[firstId] == kot[secondId]) {
				kot[nameProp] = count[searchField]
			}
		})
	})
	return req
}

const notification = (addressees, typeMessages) => {
	return ''
}

const loopQuestion = () => {
	return ''
}

const dateParsing = (fullDate) => {
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

// module.exports = {createNewArray,}

// module.exports = createNewArray

module.exports = { createNewArray, notification, loopQuestion, dateParsing }
