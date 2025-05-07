"use client";
import styles from "@/app/books/book.module.scss";
import SelectBox from "@/components/common/SelectBox";
import BookItem from "@/components/books/BookItem";
import { useQuery } from "@tanstack/react-query";
import { Book, BookInfo } from "@/types/book";
import { useCallback, useRef, useState } from "react";
import { searchAllBooks } from "@/service/books";
import Pagination from "@/components/common/Pagination";

export default function Books() {
  const [selectedKey, setSelectedKey] = useState("all");
  const wordRef = useRef<HTMLInputElement>(null);
  const [queryKeyState, setQueryKeyState] = useState({ key: "all", word: "" });
  //////////////////TODO 9. page 처리를 위한 상태 선언하기
  const [currentPage, setCurrentPage] = useState(1);

  //////////////////TODO 10. 타입을 BookInfo로 변경하고  query가 수행되는 조건에 currentPage를 추가하기
  const { data, isLoading, error } = useQuery<BookInfo>({
    queryKey: ["books", queryKeyState, currentPage],
    queryFn: () =>
      searchAllBooks({
        key: queryKeyState.key,
        word: queryKeyState.word,
        pageNo: currentPage,
      }),
  });

  const options = [
    { value: "all", text: "---선택하세요---" },
    { value: "title", text: "제목" },
    { value: "author", text: "작성자" },
  ];

  const handleSelect = useCallback((key: string) => {
    setSelectedKey(key);
  }, []);

  const handleSearch = useCallback(() => {
    setQueryKeyState({ key: selectedKey, word: wordRef.current?.value || "" });
    setCurrentPage(1); // 검색 시 페이지 초기화
  }, [selectedKey]);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생</p>;

  //////////////////TODO 11. data에서 books와 page를 추출하기
  const books = data?.books || [];
  const page = data?.page;
  console.log("books:", books);
  console.log("page:", page);
  return (
    <div className={styles.bookList}>
      <div className={styles.header}>
        <div className={styles.searchArea}>
          <SelectBox selectOptions={options} onKeySelect={handleSelect} />
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className={styles.searchInput}
            ref={wordRef}
            defaultValue=""
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            검색
          </button>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>이미지</th>
            <th>책 일련 번호</th>
            <th>제목</th>
            <th>저자</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Book) => (
            <BookItem key={book.isbn} book={book} />
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        {/*    //////////////////TODO 11. Pagination 컴포넌트 추가하기 */}
        <Pagination
          currentPage={currentPage}
          total={page?.total || 1}
          navigationSize={page?.interval || 10}
          onPageChange={(pg) => setCurrentPage(pg)}
        />
      </div>
    </div>
  );
}
