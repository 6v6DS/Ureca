import { PaginationProps } from "@/types/Pagination";
import React, { useMemo } from "react";
import styles from "./Pagination.module.scss";
import classNames from "classnames";

const Pagination = ({ currentPage, total, navigationSize, onPageChange }: PaginationProps) => {
  const totalPage = Math.ceil(total / navigationSize);
  const startPage = useMemo(() => {
    return Math.floor((currentPage - 1) / navigationSize) * navigationSize + 1;
  }, [currentPage, navigationSize]);

  const endPage = useMemo(() => {
    const lastPage =
      Math.floor((currentPage - 1) / navigationSize) * navigationSize + navigationSize;
    return totalPage < lastPage ? totalPage : lastPage;
  }, [currentPage, totalPage, navigationSize]);

  const endRange = useMemo(() => {
    return Math.floor((totalPage - 1) / navigationSize) * navigationSize < currentPage;
  }, [totalPage, currentPage, navigationSize]);

  const range = (start: number, end: number): number[] => {
    const list = [];
    for (let i = start; i <= end; i++) list.push(i);
    return list;
  };

  return (
    <div className={styles.container}>
      <ul className={styles.pagination}>
        <li className={styles.pageItem}>
          <button className={styles.pageLink} onClick={() => onPageChange(1)}>
            first
          </button>
        </li>
        <li className={styles.pageItem}>
          <button
            className={styles.pageLink}
            onClick={() => onPageChange(startPage === 1 ? 1 : startPage - 1)}
          >
            prev
          </button>
        </li>

        {range(startPage, endPage).map((pg) => (
          <li
            key={pg}
            className={classNames(styles.pageItem, {
              [styles.active]: currentPage === pg,
            })}
          >
            <button className={styles.pageLink} onClick={() => onPageChange(pg)}>
              {pg}
            </button>
          </li>
        ))}

        <li className={styles.pageItem}>
          <button
            className={styles.pageLink}
            onClick={() => onPageChange(endRange ? totalPage : endPage + 1)}
          >
            next
          </button>
        </li>
        <li className={styles.pageItem}>
          <button className={styles.pageLink} onClick={() => onPageChange(totalPage)}>
            last
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
