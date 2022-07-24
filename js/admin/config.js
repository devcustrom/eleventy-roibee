import { blog } from '../admin/preview-templates/post.js'
import { pages } from '../admin/preview-templates/page.js'
import { lists } from '../admin/configs/lists.js'

const config = {
	"backend": {
		name: "github",
		repo: "devcustrom/eleventy-roibee",
		branch: "master"
	},
	load_config_file: false,
	"media_folder": "src/assets/images",
	"collections": [
		blog,
		pages,
		lists,
	]
}

export { config }
