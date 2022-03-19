const index = {
    "name": "index",
    "label": "Списки",
    "file": "src/_data/index.json",
    "widget" : "list",
    "fields": [
        {
            "name": "wedo",
            "label": "Разработка",
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
            "label": "Процесс разработки",
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
        },
        {
            "name": "benefits",
            "label": "Приемущества",
            "widget" : "list",
            "fields": [
                {
                    "name": "text",
                    "label": "Текст",
                    "widget": "string",
                }
            ]
        }
    ]
}

export { index }