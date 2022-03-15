import { enable } from '../components/enable.js'

const tableRow = {
    "name": "list",
    "label": "Данные услуг",
    "widget": "list",
    "fields": [
        enable,
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
            "label": "Цена от",
            "name": "priceFrom",
            "widget": "string"
        },
        {
            "label": "Цена до",
            "name": "priceTo",
            "widget": "string",
            "required": false
        },
        {
            "label": "в месяц",
            "name": "month",
            "widget": "boolean", 
            "default": false
        },
        {
            "label": "Ссылка",
            "name": "link",
            "widget": "string",
            "required": false
        }
    ]
}

const table = {
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
            "label": "Услуга активна?",
            "name": "enable",
            "widget": "boolean", 
            "default": true,
        },
        tableRow
    ]
}

const tables = {
    "name": "tables",
    "label": "Таблицы",
    "file": "src/_data/tables.json",
    "widget" : "list",
    "fields": [
        table
    ]
}

export { tables, tableRow }