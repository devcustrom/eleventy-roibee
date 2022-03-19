import { index } from './files/index'
import { tables } from './files/tables'
import { services } from './files/services'
import { links } from './files/links'

const lists = {
	"label": 'Данные',
	"name": 'lists',
	"files": [
		index,
		tables,
		services,
		links
	]
}

export { lists }