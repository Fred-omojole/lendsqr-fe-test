"use client";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import styles from "./pagination.module.scss";
import { getPageNumbers } from "@/lib/pagination";

interface Props {
  pageSize: number;
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];
}

export default function Pagination({
  pageSize,
  currentPage,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50, 100],
}: Props) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safeCurrent = Math.min(Math.max(1, currentPage), totalPages);
  const pages = getPageNumbers(safeCurrent, totalPages);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages || page === safeCurrent) return;
    onPageChange(page);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.showing}>
        <span>Showing</span>
        <div className={styles.sizeWrap}>
          <select
            className={styles.sizeSelect}
            value={pageSize}
            onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
            disabled={!onPageSizeChange}
            aria-label="Items per page"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <MdKeyboardArrowDown className={styles.sizeCaret} size={16} />
        </div>
        <span>out of {totalItems}</span>
      </div>

      <nav className={styles.pages} aria-label="Pagination">
        <button
          type="button"
          className={styles.arrowBtn}
          onClick={() => goTo(safeCurrent - 1)}
          disabled={safeCurrent === 1}
          aria-label="Previous page"
        >
          <MdKeyboardArrowLeft size={18} />
        </button>

        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`e-${i}`} className={styles.ellipsis}>
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              className={`${styles.pageBtn} ${p === safeCurrent ? styles.active : ""}`}
              onClick={() => goTo(p)}
              aria-current={p === safeCurrent ? "page" : undefined}
            >
              {p}
            </button>
          ),
        )}

        <button
          type="button"
          className={styles.arrowBtn}
          onClick={() => goTo(safeCurrent + 1)}
          disabled={safeCurrent === totalPages}
          aria-label="Next page"
        >
          <MdKeyboardArrowRight size={18} />
        </button>
      </nav>
    </div>
  );
}
