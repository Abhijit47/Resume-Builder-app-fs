
// success response
const successResponse = (res, statusCode, message, data) => {
  return res.status(statusCode).json({ message: message, data: data });
};

// error response
const errorResponse = (res, statusCode, message, error) => {
  return res.status(statusCode).json({ message: message, error: error });
};


module.exports = { successResponse, errorResponse };