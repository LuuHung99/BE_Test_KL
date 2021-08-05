const processIndex = (c = 5, a, b = 4, _app_secretKey) => ({
  message: 'Hello world!',
  sum: 5,
  a: 10,
  secret: _app_secretKey
});
function processIndexWithParams(c, a, b ) {
  return { a: Number(b) + Number(c), b, c };
}

module.exports = {
  index: { func: processIndex },
  'index/:c/:a/:b': processIndexWithParams,
  post_upload: {
    uploadConfig: {
      savedPath: '/uploaded'
    },
    // eslint-disable-next-line camelcase
    func: (testField, _req_savedFiles) => {
      console.log(_req_savedFiles);
      return { testField, savedPaths: _req_savedFiles };
    }
  }
};
