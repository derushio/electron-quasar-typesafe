const cpx = require('cpx');
const fs = require('fs');

module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
  ],
  hooks: {
    postPackage: async (platform, arch) => {
      const env = (await fs.promises.readFile('./.env.package')).toString();
      await fs.promises.writeFile('./out/nuxt-app-linux-x64/.env', env);

      cpx.copySync(
        './.output/**/*',
        './out/nuxt-app-linux-x64/resources/app/.output/',
      );
    },
  },
};
