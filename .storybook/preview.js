import '../src/index.css';

export const decorators = [
  () => ({ template: '<div style="margin: 1em;"><story/></div>' })
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // layout: 'centered',
};
