import { index } from '/src/js/admin/configs/files/index'
import { tables } from '/src/js/admin/configs/files/tables'
import { services } from '/src/js/admin/configs/files/services'
import { links } from '/src/js/admin/configs/files/links'

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