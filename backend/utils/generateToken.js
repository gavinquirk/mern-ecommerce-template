import jwt from 'jsonwebtoken';

// Given user ID, create json web token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Expires in 30 days
  });
};

export default generateToken;
