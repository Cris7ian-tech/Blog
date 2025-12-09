import chevronleft from '../../assets/chevronleft.svg';
import chevronright from '../../assets/chevronright.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const maxVisible = 10;

  const startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const endPage = Math.min(totalPages, startPage + maxVisible - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="mt-10 flex items-center gap-4">

      {/* ANTERIOR */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          cursor-pointer
          rounded-xl p-2 px-3
          bg-linear-to-br from-primary-300 to-rose-400
          text-white font-bold
          shadow-md shadow-primary-300/40
          hover:brightness-110
          active:scale-95
          transition
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        <img src={chevronleft} className="w-5 h-5" />
      </button>

      {/* PÁGINAS */}
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            cursor-pointer
          rounded-xl p-2 px-3
          bg-linear-to-br from-primary-300 to-coral-400
          text-white font-bold
          shadow-md shadow-primary-300/40
          hover:brightness-110
          active:scale-95
          transition
          disabled:opacity-40 disabled:cursor-not-allowed
            ${
              currentPage === page
                  ? `
                  bg-white/20
                  backdrop-blur-md
                  text-white
                  border-white/40
                  shadow-[0_0_12px_rgba(255,255,255,0.35)]
                  scale-110
                `
                : `
                  bg-white/10 
                  text-white 
                  border-white/20 
                  hover:bg-white/20
                `
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* SIGUIENTE */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
          cursor-pointer
          rounded-xl p-2 px-3
          bg-linear-to-br from-primary-300 to-fuchsia-400
          text-white font-bold
          shadow-md shadow-primary-300/40
          hover:brightness-110
          active:scale-95
          transition
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        <img src={chevronright} className="w-5 h-5" />
      </button>

    </nav>
  );
};

export default Pagination;
