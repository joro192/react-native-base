const fs = require('fs');
const Hjson = require('hjson');

const generate = () => {
  const data = fs.readFileSync('app/i18n/locales/vi.js', 'utf8');
  const json = Hjson.parse(data.replace('export default', '').replace(';', ''));

  let properties = Object.keys(json)
    .map((name) => {
      return `${name}: i18.t('${name}')`;
    })
    .join(',\n  ');

  const string = `import i18 from '@i18'\nconst strings = {
  ${properties}
}

export default strings
`;

  fs.writeFileSync('app/res/strings.js', string, 'utf8');
};

generate();
