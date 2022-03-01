import CMS, { init } from 'netlify-cms'
import Post from "./preview-templates/post.js";
import Page from "./preview-templates/page.js"
import { config } from "./config.js"

CMS.registerPreviewTemplate("blog", Post);
CMS.registerPreviewTemplate("pages", Page);

CMS.registerPreviewStyle("/dist/css/style.css");

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

init({config})