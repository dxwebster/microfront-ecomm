import { defineConfig } from "vite"
import { shareAll } from "@softarc/native-federation/build"
import path from "path"

// import federation from "./plugins/vite-plugin-react-federation"
import transformHtml from "./plugins/vite-plugin-transform-html"

import { federation } from "@module-federation/vite"

import react from "@vitejs/plugin-react"

import { createEsBuildAdapter } from "@softarc/native-federation-esbuild"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".tsx", ".ts", ".json", ".jsx", ".js"],
  },
  server: {
    origin: "http://127.0.0.1:8082",
    port: 8082,
    fs: {
      allow: [".", "../shared"],
    },
  },
  plugins: [
    federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: "dist",
        tsConfig: "tsconfig.json",
        federationConfig: `module-federation/federation.config.cjs`,
      },
      adapter: createEsBuildAdapter({ plugins: [] }),
    }),
    transformHtml(),
    react(),
  ],
})

// adapter: {    entryPoint: string;
//     tsConfigPath?: string;
//     external: Array<string>;
//     outfile: string;
//     mappedPaths: MappedPath[];
//     packageName?: string;
//     esm?: boolean;
//     dev?: boolean;
//     watch?: boolean;
//     kind: 'shared-package' | 'shared-mapping' | 'exposed';}

// federation({
//   options: {
//     workspaceRoot: __dirname,
//     outputPath: "dist",
//     tsConfig: "tsconfig.json",
//     federationConfig: `module-federation/federation.config.cjs`,
//     verbose: false,
//     dev: command === "serve",
//   },
//   adapter: createEsBuildAdapter({ plugins: [], fileReplacements: reactReplacements.dev }),
// }),
