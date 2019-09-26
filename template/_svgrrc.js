function template({ template }, opts, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })

  return typeScriptTpl.ast`
    ${'// tslint:disable'}
    import React from 'react';
    import Svg, { Path } from 'react-native-svg';
    const ${componentName} = (props: any) => ${jsx};
    export default ${componentName};
  `;
}

module.exports = {
  template,
  replaceAttrValues: {
    'black': 'currentColor',
  },
};
