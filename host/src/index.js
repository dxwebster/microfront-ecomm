System.register(['react', 'react-dom'], function (exports, module) {
  'use strict';
  var React, ReactDOM;
  return {
    setters: [
      function (module) {
        React = module.default;
      },
      function (module) {
        ReactDOM = module.default;
      },
    ],
    execute: function () {
      (function () {
        const env = { NODE_ENV: 'production' };
        try {
          if (process) {
            process.env = Object.assign({}, process.env);
            Object.assign(process.env, env);
            return;
          }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env: env };
      })();

      const remotesMap = {
        ButtonApp: () => module.import('ButtonApp'),
        HeaderApp: () => module.import('HeaderApp'),
      };

      const processModule = mod => {
        if (mod && mod.__useDefault) {
          return mod.default;
        }

        return mod;
      };

      const shareScope = {
        react: {
          get: () => module.import('react').then(r => () => processModule(r)),
          loaded: false,
          singleton: true,
          version: [16, 13, 1],
        },
        'react-dom': {
          get: () => module.import('react-dom').then(r => () => processModule(r)),
          loaded: false,
          singleton: true,
          version: [16, 13, 1],
        },
      };

      const initMap = {};

      var __federation__ = {
        ensure: async remoteId => {
          const remote = await remotesMap[remoteId]();

          if (!initMap[remoteId]) {
            remote.init(shareScope);
            initMap[remoteId] = true;
          }

          return remote;
        },
      };

      var Button = /*#__PURE__*/ React.lazy(function () {
        return __federation__
          .ensure('ButtonApp')
          .then(remote => remote.get('./Button'))
          .then(factory => factory());
      });
      var Header = /*#__PURE__*/ React.lazy(function () {
        return __federation__
          .ensure('HeaderApp')
          .then(remote => remote.get('./Header'))
          .then(factory => factory());
      });

      var App = function App() {
        console.log(Button);
        return /*#__PURE__*/ React.createElement(
          React.Suspense,
          {
            fallback: 'Loading App...',
          },
          /*#__PURE__*/ React.createElement(Header, null),
          /*#__PURE__*/ React.createElement('h1', null, 'Rollup Host'),
          /*#__PURE__*/ React.createElement(Button, null),
        );
      };

      ReactDOM.render(
        /*#__PURE__*/ React.createElement(App, null),
        document.getElementById('root'),
      );
    },
  };
});
