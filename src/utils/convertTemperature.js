const convertTemperature = (far) => {
  const cel = Math.round((far - 32) / 1.8);
  return cel;
};

export default convertTemperature;
