const config = {
	"backend": {
		"name": "git-gateway",
		"branch": "master"
	},
	load_config_file: false,
	"media_folder": "src/assets/images",
	"collections": [
		{
			"name": "blog",
			"label": "Post",
			"folder": "src/posts",
			"create": true,
			"slug": "{{slug}}",
			"fields": [
				{
					"label": "Title",
					"name": "title",
					"widget": "string"
				},
				{
					"label": "Publish Date",
					"name": "date",
					"widget": "datetime"
				},
				{
					"label": "Author",
					"name": "author",
					"widget": "string",
					"default": "Anonymous"
				},
				{
					"label": "Summary",
					"name": "summary",
					"widget": "text"
				},
				{
					"label": "Tags",
					"name": "tags",
					"widget": "list",
					"default": [
						"post"
					]
				},
				{
					"label": "Body",
					"name": "body",
					"widget": "markdown"
				}
			]
		},
		{
			"name": "pages",
			"label": "Page",
			"folder": "src/pages",
			"create": true,
			"slug": "{{slug}}",
			"fields": [
				{
					"label": "Title",
					"name": "title",
					"widget": "string"
				},
				{
					"label": "Publish Date",
					"name": "date",
					"widget": "datetime"
				},
				{
					"label": "Permalink",
					"name": "permalink",
					"widget": "string"
				},
				{
					"label": "Navigation",
					"name": "eleventyNavigation",
					"widget": "object",
					"fields": [
						{
							"label": "Key",
							"name": "key",
							"widget": "string"
						},
						{
							"label": "Order",
							"name": "order",
							"widget": "number",
							"default": 0
						}
					]
				},
				{
					"label": "Body",
					"name": "body",
					"widget": "markdown"
				}
			]
		},
		{
			"label": 'Списки',
			"name": 'lists',
			"files": [
				{
					"name": "Мы делаем",
					"label": "wedo",
					"file": "src/_data/index.json",
					"widget" : "list",
					"fields": [
						{
							"name": "design",
							"label": "Data",
							"widget" : "list",
							"fields": [
								{
									"label": "Title",
									"name": "name",
									"widget": "string"
								},
								{
									"name": "text",
									"label": "Body",
									"widget": "list",
									"fields": [
										{
											"label": "Title",
											"name": "name",
											"widget": "string"
										},
									]
								}
							]
						}
					]
				}
			]
		}
	]
}

export { config }