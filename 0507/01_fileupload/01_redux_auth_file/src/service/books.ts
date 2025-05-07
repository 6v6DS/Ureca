import { Book, BookFile, BookInfo, BookSearchParams } from "@/types/book";
import axios from "@/utils/http-commons";

//////////////////TODO 3. 이미지 파일들을 업로드하기 위한 api 작성
export const uploadBookImages = async (formData: FormData): Promise<BookFile[]> => {
  const { data } = await axios.post<BookFile[]>(`/book/upload-images`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const searchAllBooks = async (params: BookSearchParams): Promise<BookInfo> => {
  const { data } = await axios.get("/book", { params });
  return data;
};

export const searchBook = async (isbn: string): Promise<Book> => {
  const { data } = await axios.get(`/book/${isbn}`);
  return data;
};

export const updateBook = async (book: Book): Promise<Book> => {
  const { data } = await axios.put("/book", book);
  return data;
};
export const insertBook = async (book: Book): Promise<Book> => {
  const { data } = await axios.post("/book", book);
  return data;
};
export const removeBook = async (isbn: string): Promise<Book> => {
  const { data } = await axios.delete(`/book/${isbn}`);
  return data;
};
