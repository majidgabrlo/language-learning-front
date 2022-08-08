import { useEffect, useState } from "react";
import Card from "./Card";
import latestNewsGetter, { news } from "../utils/latestNewsGetter";
import { Pagination } from "antd";
import { useAppSelector } from "../store/hooks";
function CardsList() {
  const [news, setNews] = useState<news[][]>();
  const [page, setPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState("");
  const selectedLanguage = useAppSelector(
    (state) => state.language.selectedLanguage
  );


  const getData = async () => {
    const data = await latestNewsGetter(selectedLanguage);
    setNews(data);
  };
  useEffect(() => {
    getData();
  }, [selectedLanguage]);

  const onSelect = (id: string) => {
    setSelectedPost(id);
  };

  return (
    <div className="max-w-[1100px] mx-auto mt-20">
      <div className="grid grid-cols-3 justify-center gap-5">
        {news &&
          news[page].map((item) => (
            <Card
              key={item._id}
              title={item.topic}
              description={item.title}
              imageURL={item.media}
              id={item._id}
              summary={item.summary}
              onSelect={onSelect}
              isOpen={selectedPost === item._id}
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
