const path = require('path');

module.exports = {
  title: 'UI Components',

  // Display import statement instead of path to component
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');
    return `import { ${name} } from 'ui-components';`;
  },

  // Override Styleguidist components
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, '/src/styleguide-components/StyleGuideRenderer'),
  },

  // Directory where styleguide is built into
  styleguideDir: 'lib/styleguide',

  // Custom styling
  theme: {
    color: {
      sidebarBackground: 'white',
      link: '#00728d',
      linkHover: '#0d3f5e',
    },
    fontFamily: {
      base: 'Tahoma, sans-serif'
    },
  },

  // Configure sections
  pagePerSection: true,
};
