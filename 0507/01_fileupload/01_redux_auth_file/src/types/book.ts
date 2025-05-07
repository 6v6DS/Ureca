export interface Book {
  isbn: string;
  title: string;
  author: string;
  price: number;
  describ: string;
  img: string;
  //////////////////TODO 1. image 파일을 위해 수정하기
  imageFiles?: BookFile[];
}

export interface Page {
  key: string;
  word: string;
  pageLink: string;
  pageNo: number;
  interval: number;
  start: number;
  total: number;
}

export interface BookInfo {
  books: Book[];
  page: Page;
}

//////////////////TODO 2. upload한 image 파일 정보를 위한 타입 선언하기
export type BookFile = {
  no: number;
  rfilename: string;
  sfilename: string;
  isbn: string;
};

export interface BookProps {
  book: Book;
}

export interface BookSearchParams {
  key?: string;
  word?: string;
  pageNo?: number;
}
