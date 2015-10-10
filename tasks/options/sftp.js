var host = process.env.DEPLOY_HOST;
var username = process.env.DEPLOY_USERNAME;
var password = process.env.DEPLOY_PASSWORD;

module.exports = {
  sftp: {
    test: {
      files: {
        './': '_site/**'
      },
      options: {
        path: '/tmp/',
        host: host,
        username: username,
        password: password,
        showProgress: true,
        createDirectories: true
      }
    }
  }
};
