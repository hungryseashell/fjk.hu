var host = process.env.DEPLOY_HOST;
var username = process.env.DEPLOY_USERNAME;
var password = process.env.DEPLOY_PASSWORD;

module.exports = {
  sftp: {
    digitalocean: {
      files: {
        './': '_site/**'
      },
      options: {
        path: '/www/fjk.hu',
        host: host,
        username: username,
        password: password,
        srcBasePath: '_site',
        showProgress: true,
        createDirectories: true
      }
    }
  }
};
