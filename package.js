Package.describe({
  name: 'keithmorganibm:accounts-ibmid',
  summary: "Login service for IBM accounts",
  version: "1.0.0",
  git: 'https://github.com/keithmorganIBM/accounts-ibmid.git'
});

Package.onUse(function (api) {
  api.use('accounts-base@1.0.0', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.0.0', ['client', 'server']);
  api.use('keithmorganibm:ibmid@1.0.0', ['client', 'server']);

  api.addFiles('ibmid_login_button.css', 'client');
  api.addFiles("ibmid.js");
});
