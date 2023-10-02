import './Pagination.sass'

export function Pagination({ coinsPerPage, totalCoins, paginate, currentPage }) {
  const pagesNambers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pagesNambers.push(i);
  }
  console.log(pagesNambers);
  return (
    <div className="pagination">
      <ul className="pagination_list">
        {pagesNambers.map((namber) => (
          <button
            className={namber === currentPage ? "active" : "pagination_button"}
            key={namber}
            onClick={() => paginate(namber)}
          >
            {namber}
          </button>
        ))}
      </ul>
    </div>
  );
}