import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import { viteExternalsPlugin } from "vite-plugin-externals"
import pkg from "./package.json"

import federation from "./plugins/vite-plugin-react-federation"
import transformHtml from "./plugins/vite-plugin-transform-html"

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["remoteApp1", "remoteApp2"],
  },
  plugins: [
    viteExternalsPlugin({
      react: "React",
      "react-dom": "ReactDOM",
    }),
    reactRefresh(),
    federation({
      remotes: {
        remoteApp1: "rwebpackremote",
        remoteApp2: "rollup_spa",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: pkg.dependencies["react-dom"],
        },
      },
    }),
    transformHtml(),
  ],
})
