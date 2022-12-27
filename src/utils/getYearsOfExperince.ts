const getYearsOfExperince = () => {
  const currentYear = (new Date()).getFullYear();
  const startOfCoding = 2014

  return (currentYear - startOfCoding);
}

export default getYearsOfExperince;