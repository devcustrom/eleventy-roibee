import htm from "htm";
import { format } from "date-fns";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main class="px-5">
        <article class="prose">
          <h1>${entry.getIn(["data", "title"], null)}</h1>
          <p>
            <small>
              <time
                >${
                  format(
                    entry.getIn(["data", "date"], new Date()),
                    "dd MMM, yyyy"
                  )
                }</time
              >
              ${" by Author"}
            </small>
          </p>

          <p>${entry.getIn(["data", "summary"], "")}</p>

          ${this.props.widgetFor("body")}
          <p>
            ${
              entry.getIn(["data", "tags"], []).map(
                tag =>
                  html`
                    <a href="#" rel="tag">${tag}</a>
                  `
              )
            }
          </p>
        </article>
      </main>
    `;
  }
});

const blog = {
  "name": "blog",
  "label": "Блог",
  "folder": "src/posts",
  "create": true,
  "slug": "{{slug}}",
  "fields": [
    {
      "label": "Название",
      "name": "title",
      "widget": "string"
    },
    {
      "label": "Дата публикации",
      "name": "date",
      "widget": "datetime"
    },
    {
      "label": "Автор",
      "name": "author",
      "widget": "string",
      "default": "Anonymous"
    },
    {
      "label": "Краткое описание",
      "name": "summary",
      "widget": "text"
    },
    {
      "label": "Теги",
      "name": "tags",
      "widget": "list",
      "default": [
        "post"
      ]
    },
    {
      "label": "Статья",
      "name": "body",
      "widget": "markdown"
    }
  ]
}


export default Post
export { blog }
