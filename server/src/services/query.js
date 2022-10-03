const DEFAULT_PAGE_NUMBER = 0;
const DEFAULT_PAGE_LIMIT = 1;

function getPagination(query) {
  //Definying all query as string and positive number.
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;

  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};
