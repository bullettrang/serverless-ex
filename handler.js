'use strict';

module.exports.hello = async event => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'hello world'
    })
};
  return response

};
