import { resolve } from "path";
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { InputOption } from "rollup";
import { readdirSync } from "fs";

let input = {
  main: resolve(__dirname, "index.html"),
};

// Reads the "pages" directory and treats any folders
// as new pages that can be accessed.
readdirSync("./pages", { withFileTypes: true }).forEach((x) => {
  if (x.isDirectory()) {
    input[x.name] = resolve(__dirname, `pages/${x.name}/index.html`);
  }
});

// Parse the optional open argument that can specify which page is
// hosted on the dev server. I can't get the dev server to host multiple pages though :/
let openArgument = "main";
for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] == "--open" && process.argv[i + 1]) {
    openArgument = process.argv[i + 1];
    break;
  }
}

let openPath = `/pages/${openArgument}/index.html`;

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  build: {
    rollupOptions: {
      input,
    },
  },
});
