
const addCustomHeader = (headerName, headerValue) => {
  return (req, res, next) => {
    res.setHeader(headerName, headerValue);
    next();
  };
};


const customHeaderMiddleware = addCustomHeader('X-Custom-Header', 'Anant Mishra');

module.exports = {customHeaderMiddleware};
