import CMS from 'netlify-cms'
import Post from "./preview-templates/post.js";
import Page from "./preview-templates/page.js"
import { config } from "./config.js"

export default new class  {
  constructor() {
    this.previewTemplate = [
      {
        name : "blog", 
        component : Post
      },
      {
        name : "pages", 
        component : Page
      },
    ]
    this.previewStyle = "/dist/css/style.css"
    this.handler();
  }

  handler() {
    const rpt = this.previewTemplate
    rpt.forEach(item => {
      CMS.registerPreviewTemplate(item.name, item.component)
    })
    CMS.registerPreviewStyle(this.previewStyle)
    fetch("/")
      .then(response => response.text())
      .then(html => {
        const f = document.createElement("html");
        f.innerHTML = html;
        Array.from(f.getElementsByTagName("link")).forEach(tag => {
          if (tag.rel == "stylesheet" && !tag.media) {
            CMS.registerPreviewStyle(tag.href);
          }
        });
      });

    CMS.init({config})
  }
}

