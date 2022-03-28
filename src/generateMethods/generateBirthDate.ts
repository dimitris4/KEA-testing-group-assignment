export const generateBirthDate = (
  start = new Date(2012, 0, 1),
  end = new Date()
) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
