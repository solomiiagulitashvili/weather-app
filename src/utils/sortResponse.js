const sortResponse = (a, b) => {
  if (a.confidence > b.confidence) return 1;
  if (a.confidence === b.confidence) return 0;
  if (a.confidence < b.confidence) return -1;
};

export default sortResponse;
