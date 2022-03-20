import { tableRow } from '/src/js/admin/configs/files/tables'
import { enable } from '/src/js/admin/configs/components/enable.js'

const services = {
    "name": "services",
    "label": "Услуги",
    "file": "src/_data/services.json",
    "widget" : "list",
    "fields": [
        {
            "name": "services",
            "label": "Услуга",
            "widget" : "list",
            "fields": [
                {
                    "label": "Название",
                    "name": "title",
                    "widget": "string"
                },
                {
                    "label": "Цена от",
                    "name": "priceTo",
                    "widget": "string"
                },
                {
                    "label": "Идентификатор",
                    "name": "name",
                    "widget": "string"
                },
                {
                    "label": "Картинка",
                    "name": "img",
                    "widget": "image"
                },
                {
                    "name": "serviceText",
                    "label": "Списочек",
                    "widget" : "list",
                    "fields": [
                        {
                            "label": "Текст",
                            "name": "text",
                            "widget": "string"
                        },
                    ]
                },
                {
                    "name": "process",
                    "label": "Процесс",
                    "widget" : "list",
                    "fields": [
                        {
                            "label": "Название",
                            "name": "title",
                            "widget": "string"
                        },
                        {
                            "label": "Текст",
                            "name": "text",
                            "widget": "string"
                        },
                    ]
                },
                enable,
                tableRow
            ]
        }
    ]
}

export { services }
