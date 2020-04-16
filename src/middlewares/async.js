export default ({ dispatch }) => next => action => {
  console.log();

  next();
};
