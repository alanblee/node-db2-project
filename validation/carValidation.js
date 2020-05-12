module.exports.isValid = (body) => {
  const { vin, make, model, mileage } = body;
  return Boolean(vin && make && model && mileage);
};
