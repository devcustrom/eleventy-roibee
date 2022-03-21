const links = {
    "name": "links",
    "label": "Ссылки",
    "file": "src/_data/links.json",
    "widget" : "list",
    "fields": [
        {
            "name": "menuList",
            "label": "Верхнее меню",
            "widget" : "list",
            "fields": [
                {
                    "label": "активно?",
                    "name": "enable",
                    "widget": "boolean",
                    default: true
                },
                {
                    "label": "текст ссылки",
                    "name": "anchor",
                    "widget": "string"
                },
                {
                    "label": "ссылка",
                    "name": "link",
                    "widget": "string",
                }
            ]
        },
        {
            "name": "socNet",
            "label": "Социальные сети",
            "widget" : "list",
            "fields": [
                {
                    "label": "активно?",
                    "name": "enable",
                    "widget": "boolean",
                    default: true
                },
                {
                    "label": "Текст ссылки",
                    "name": "anchor",
                    "widget": "string"
                },
                {
                    "label": "ссылка",
                    "name": "linkText",
                    "widget": "string",
                },
                {
                    "label": "Имя иконки",
                    "name": "icon",
                    "widget": "string",
                }
            ]
        }
    ]
}

export { links }