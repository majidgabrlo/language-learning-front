import { useEffect, useState } from "react";
import Card from "./Card";
import latestNewsGetter, { news } from "../utils/latestNewsGetter";
import { Pagination } from "antd";
function CardsList() {
  const [news, setNews] = useState<news[][]>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const slicedArray: news[][] = [];
      const data = await latestNewsGetter();
      while (data.length > 10) {
        slicedArray.push(data.slice(0, 10));
        data.splice(0, 10);
      }
      slicedArray.push(data);
      setNews(slicedArray);
    };
    getData();
  }, []);

  console.log(news);

  return (
    <div className="max-w-[1100px] mx-auto mt-20">
      <div className="grid grid-cols-3 justify-center gap-5">
        {news &&
          news[page].map((item) => (
            <Card
              title={item.topic}
              description={item.title}
              imageURL={item.media}
            />
          ))}
      </div>

      <Pagination
        className="!flex justify-center !my-6"
        current={page}
        pageSize={1}
        onChange={(page) => setPage(page)}
        total={news?.length}
      />
    </div>
  );
}

export default CardsList;
