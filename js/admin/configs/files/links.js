const links = {
	"name": "links",
	"label": "Ссылки",
	"file": "src/_data/links.json",
	"editor" : {
		"preview": false,
	},
	"widget" : "list",
	"fields": [
		{
			"label": "Ссылки верхнего меню",
			"name": "headerList",
			"widget": "list",
			"fields": [
				{
					"label": "Текст ссылки",
					"name": "title",
					"widget": "string"
				},
				{
					"label": "Ссылка",
					"name": "url",
					"widget": "string"
				}
			]
		},
		{
			"label": "Ссылки нижнего меню",
			"name": "footerList",
			"widget": "list",
			"fields": [
				{
					"label": "Текст ссылки",
					"name": "title",
					"widget": "string"
				},
				{
					"label": "Ссылка",
					"name": "url",
					"widget": "string"
				}
			]
		},
	]
}

export { links }
