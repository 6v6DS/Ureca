import { Book, BookSearchParams } from "@/types/book";
import { localAxios } from "@/utils/http-commons";

export const searchAllBooks = async (params: BookSearchParams): Promise<Book[]> => {
  const axios = localAxios();
  const { data } = await axios.get("/book", { params });
  return data.books || [];
};
