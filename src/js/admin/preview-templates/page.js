import htm from "htm";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
	const entry = this.props.entry;

	return html`
	  <main>
		<h1>${entry.getIn(["data", "title"], null)}</h1>

		${this.props.widgetFor("body")}
	  </main>
	`;
  }
});

const pages = {
  "name": "pages",
  "label": "Страницы",
  "folder": "src/pages",
  "create": true,
  "slug": "{{slug}}",
  "fields": [
	{
	  "label": "Название",
	  "name": "title",
	  "widget": "string"
	},
	{
	  "label": "Дата создания",
	  "name": "date",
	  "widget": "datetime"
	},
	{
	  "label": "URL",
	  "name": "permalink",
	  "widget": "string"
	},
	{
	  "label": "Навигация",
	  "name": "eleventyNavigation",
	  "widget": "object",
	  "fields": [
		{
		  "label": "Ключ",
		  "name": "key",
		  "widget": "string"
		},
		{
		  "label": "Номер",
		  "name": "order",
		  "widget": "number",
		  "default": 0
		}
	  ]
	},
	{
	  "label": "Контент",
	  "name": "body",
	  "widget": "markdown"
	}
  ]
}

export default Page

export { pages }
