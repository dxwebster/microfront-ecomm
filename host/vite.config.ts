import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import { viteExternalsPlugin } from "vite-plugin-externals"
import { shareAll } from "@softarc/native-federation/build"

import federation from "./plugins/vite-plugin-react-federation"
import transformHtml from "./plugins/vite-plugin-transform-html"

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["ButtonApp", "HeaderApp", "HostApp"],
  },
  plugins: [
    viteExternalsPlugin({
      react: "React",
      "react-dom": "ReactDOM",
    }),
    reactRefresh(),
    federation({
      remotes: {
        ButtonApp: "ButtonApp",
        HeaderApp: "HeaderApp",
        HostApp: "HostApp",
      },
      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
          includeSecondaries: false,
        }),
      },
    }),
    transformHtml(),
  ],
})
