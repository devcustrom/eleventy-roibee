const lists = {
	"label": 'Данные',
	"name": 'lists',
	"files": [
		{
			"name": "index",
			"label": "Списки",
			"file": "src/_data/index.json",
			"widget" : "list",
			"fields": [
				{
					"name": "wedo",
					"label": "Мы делаем",
					"widget" : "list",
					"fields": [
						{
							"label": "Название",
							"name": "name",
							"widget": "string"
						},
						{
							"name": "text",
							"label": "Данные",
							"widget": "list",
							"fields": [
								{
									"label": "Анкор",
									"name": "name",
									"widget": "string"
								},
								{
									"label": "Ссылка",
									"name": "link",
									"widget": "string"
								},
							]
						}
					]
				},
				{
					"name": "process",
					"label": "Как делаем",
					"widget" : "list",
					"fields": [
						{
							"label": "Название",
							"name": "title",
							"widget": "string"
						},
						{
							"name": "text",
							"label": "Текст",
							"widget": "markdown",
						}
					]
				}
			]
		},
		{
			"name": "tables",
			"label": "Таблицы",
			"file": "src/_data/tables.json",
			"widget" : "list",
			"fields": [
				{
					"name": "priceList",
					"label": "Прайс лист",
					"widget" : "list",
					"fields": [
						{
							"label": "Название",
							"name": "title",
							"widget": "string"
						},
						{
							"name": "list",
							"label": "Данные",
							"widget": "list",
							"fields": [
								{
									"label": "Услуга",
									"name": "title",
									"widget": "string"
								},
								{
									"label": "Описание",
									"name": "subtitle",
									"widget": "string"
								},
								{
									"label": "Цена",
									"name": "price",
									"widget": "string"
								},
								{
									"label": "Ссылка",
									"name": "link",
									"widget": "string",
									"required": false
								}
							]
						}
					]
				}
			]
		}
	]
}

export { lists }