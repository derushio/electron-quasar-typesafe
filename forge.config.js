const cpx = require('cpx');

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
      cpx.copySync('./.env', './out/nuxt-app-linux-x64/');
      cpx.copySync(
        './.output/**/*',
        './out/nuxt-app-linux-x64/resources/app/.output/',
      );
    },
  },
};
