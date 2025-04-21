import { useCallback, useEffect, useState } from "react";
import styles from "./news.module.scss";
import { handleApi } from "@/utils/handleApi";
import SelectBox from "@/components/common/SelectBox";
import NewsItem from "@/components/news/NewsItem";
import { localAxios } from "@/utils/http-commons";
import { Article } from "@/types/news";
import { fetchNews } from "@/service/news";

export default async function NewsList() {
  const axios = localAxios();

  const getNews = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await axios.get("/news");
    //ssr이므로 cosole.log는 브라우저에 출력되지 않고 terminal에 출력된다.
    console.log(response.data);
    return response.data.news;
  };

  const options = [
    { value: "all", text: "---선택하세요---" },
    { value: "title", text: "제목" },
    { value: "author", text: "작성자" },
  ];

  const handleSelect = (key: string) => {
    console.log("key..........", key);
  };

  const news: Article[] = await getNews();
  // const book: Book = await getBook();
  // const [books, book] = await Promise.all([getBooks(), getBook()]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      <h1 className={styles.title}> {JSON.stringify(news)}</h1>

      {/* server component에서는 자식 컴포넌트에 속성으로 함수를 전달할 수 없다. */}
      {/* <h1 className={styles.title}>
        <SelectBox selectOptions={options} onKeySelect={handleSelect}></SelectBox>
      </h1> */}
      <h1 className={styles.title}>
        {/* client component를 import해서 사용하는 것은 가능하다!! */}
      </h1>
    </div>
  );
}
