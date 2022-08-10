import { blog } from '../admin/preview-templates/post.js'
import { pages } from '../admin/preview-templates/page.js'
import { lists } from '../admin/configs/lists.js'

const config = {
	"backend": {
		name: "github",
		repo: "devcustrom/eleventy-roibee",
		branch: process.env.APP_BRANCH
	},
	load_config_file: false,
	locale: "ru",
	"media_folder": "public/assets/images",
	"collections": [
		blog,
		pages,
		lists,
	]
}

export { config }
