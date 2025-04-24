import { Book } from "@/types/book";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//////////TODO B1.Bookmark state를 위한 타입 선언하기
interface BookmarkState {
  book: Book[];
}
//////////TODO B2. slice에서 사용할 초기값 선언하기
const initialState: BookmarkState = {
  book: [],
};
//////////TODO B3. slice선언하기   reducers[registBookMark, removeBookMark, clearBookMark]
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    registBookMark: (state, action: PayloadAction<Book>) => {
      const exists = state.book.find((book) => book.isbn === action.payload.isbn);
      if (!exists) {
        state.book.push(action.payload);
      }
    },
    removeBookMark: (state, action: PayloadAction<string>) => {
      // Book의 고유 id가 string이라고 가정
      state.book = state.book.filter((book) => book.isbn !== action.payload);
    },
    clearBookMark: (state) => {
      state.book = [];
    },
  },
});
//////////TODO B4. slicer가 제공하는 action함수들 export 하기
export const { registBookMark, removeBookMark, clearBookMark } = bookSlice.actions;
//////////TODO B5. reducer export 하기
export default bookSlice.reducer;
