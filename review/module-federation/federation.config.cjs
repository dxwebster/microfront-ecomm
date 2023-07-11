const {
  withNativeFederation, shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "HostApp",
  exposes: {
    "./App": "./src/App.tsx"
  },
  optimizeDeps: {
    include: ["process", "ts"],
  },
  ssr: true,
  target: 'node',
  shared: shareAll(),
  skip: [
    'react-dom/server',
    'react-dom/server.node',
    '@originjs/vite-plugin-federation',
    '@module-federation/vite',
    'apollo-server',
    'crypto',
    'mongoose',
    'nodemon'
  ],
});

