mix.js("src/scripts/main.js", "public/js")
    .postCss("src/styles/main.css", "public/css", [
    require("tailwindcss"),
  ]);