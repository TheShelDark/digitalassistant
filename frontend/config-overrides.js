module.exports = function override(config, env) {
    // Find the oneOf loader in the webpack config
    const oneOfRule = config.module.rules.find((rule) => typeof rule.oneOf !== 'undefined');
  
    if (oneOfRule) {
      // Add the url-loader for .docx files
      oneOfRule.oneOf.unshift({
        test: /\.docx$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            },
          },
        ],
      });
    }
  
    return config;
  };