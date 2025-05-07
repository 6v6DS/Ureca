import "./BookItem.scss";
import { BookProps } from "@/types/book";
import Link from "next/link";
//////////////////TODO 5. .env.local에서 NEXT_PUBLIC_BASE_URL 추출하기
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const BookItem = ({ book }: BookProps) => {
  return (
    <tr className="book-row" key={book.isbn}>
      <td>
        {/* //////////////////TODO 6. 서버에 업로드한 이미지 경로로 변경하기 */}
        <img src={`${baseUrl}images/${book.img}`} alt={book.title} className="book-thumbnail" />
      </td>
      <td>{book.isbn}</td>
      <td>
        <Link href={`/books/${book.isbn}`}> {book.title}</Link>
      </td>
      <td>{book.author}</td>
      <td>{book.price}</td>
    </tr>
  );
};

export default BookItem;
