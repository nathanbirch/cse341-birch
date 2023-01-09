const awesomeFunction = (req, res, next) => {
  res.json('Sarah Birch');
};

const returnAnotherPerson = (req, res, next) => {
  res.json('Super awesome person');
};

module.exports = { awesomeFunction, returnAnotherPerson };
