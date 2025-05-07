"use client";
import React, { useCallback, useRef, useState } from "react";
import styles from "./regist.module.scss";
import { useRouter } from "next/navigation";
import { Book, BookFile } from "@/types/book";
import { insertBook, uploadBookImages } from "@/service/books";
import { useMutation } from "@tanstack/react-query";

//////////////////TODO 9. .env.local에  NEXT_PUBLIC_BASE_URL을 선언한 정보를 추출하기
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const BookRegist = () => {
  console.log("book regsit......baseUrl:", baseUrl);
  const isbnRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const describRef = useRef<HTMLTextAreaElement>(null);

  //////////////////TODO 4. file input form에서 선택한 파일 정보를 저장할 state 선언하기
  // 등록 버튼이 클릭되면 book 정보와 함께 이미지 정보도 서버에 전송하기 위한 state
  // upload한 이미지 미리보기를 위한 state
  const [uploadedFiles, setUploadedFiles] = useState<BookFile[]>([]);
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: insertBook,
    onSuccess: (data) => {
      alert(data);
      router.push("/books");
    },
    onError: (error) => {
      console.error("등록 실패:", error);
      alert("도서 등록에 실패했습니다.");
    },
  });

  //////////////////TODO 5. 이미지를 선택하면 서버로 전송할 mutation 선언하기
  const imageMutation = useMutation({
    mutationFn: uploadBookImages,
    onSuccess: (data) => {
      //성공하면 서버에서 전송한 파일 정보를 state에 update한다.
      setUploadedFiles((prev) => [...prev, ...data]);
    },
    onError: (error) => {
      console.error("이미지 업로드 중 오류 발생:", error);
      alert("이미지 업로드 중 오류 발생");
    },
  });
  //////////////////TODO 6. 파일 선택시 즉시 서버 업로드할 이벤트 작성하기
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    //파일을 업로드할 때는 JSON이 아닌 반드시 Form Data로 upload해야 하므로
    //FormData를 생성한다.
    const formData = new FormData();
    Array.from(e.target.files).forEach((file) => {
      formData.append("files", file);
    });

    //서버에 이미지 파일을 upload하기 위해 mutation을 수행한다.
    imageMutation.mutate(formData);
  };

  const handleRegist = useCallback(async () => {
    const isbn = isbnRef.current?.value.trim() || "";
    const title = titleRef.current?.value.trim() || "";
    const author = authorRef.current?.value.trim() || "";
    const price = Number(priceRef.current?.value || "0");
    const describ = describRef.current?.value || "";

    if (!isbn || !title || !author) {
      alert("필수 정보를 입력하세요.");
      return;
    }

    const book: Book = {
      isbn,
      title,
      author,
      price,
      describ,
      img: "",
      //////////////////TODO 7. 이미지 정보도 추가하기
      imageFiles: uploadedFiles,
    };

    mutate(book);
  }, [uploadedFiles, mutate]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>도서 등록</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>책 일련 번호</td>
            <td>
              <input type="text" ref={isbnRef} name="isbn" />
            </td>
          </tr>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" ref={titleRef} name="title" />
            </td>
          </tr>
          <tr>
            <td>저자</td>
            <td>
              <input type="text" ref={authorRef} name="author" />
            </td>
          </tr>
          <tr>
            <td>가격</td>
            <td>
              <input type="text" ref={priceRef} name="price" />
            </td>
          </tr>
          {/* //////////////////TODO 8. Image upload를 위한 Form 추가  */}
          <tr>
            <td>이미지</td>
            <td>
              <input type="file" multiple onChange={handleFileChange} />
              <div className={styles.previewContainer}>
                {/* //////////////////TODO 10. 업로드한 이미지는 서버에 있으므로   */}
                {uploadedFiles.map((file, idx) => (
                  <img
                    key={idx}
                    src={`${baseUrl}/images/${file.sfilename}`}
                    alt={file.rfilename}
                    className={styles.preview}
                  />
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.infoLabel}>책 정보</div>
      <textarea name="describ" ref={describRef} className={styles.textarea}></textarea>

      <div className={styles.buttonGroup}>
        <button onClick={handleRegist}>등록</button>
      </div>
    </div>
  );
};

export default BookRegist;
