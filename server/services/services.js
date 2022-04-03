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
	if(searchID.length == 2) {
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

module.exports = createNewArray
