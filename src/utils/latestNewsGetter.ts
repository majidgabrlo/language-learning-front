import axios from "axios";

export type news = {
  summary: string;
  country: string;
  author: string;
  link: string;
  language: string;
  media: string;
  title: string;
  media_content: string[];
  clean_url: string;
  rights: string;
  rank: number;
  topic: string;
  published_date: string;
  _id: string;
};

const latestNewsGetter = async (language: string): Promise<news[][]> => {
  const payload = await axios.get(
    "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
    {
      params: { lang: language, media: "True" },
      headers: {
        "X-RapidAPI-Key": "792d2f2d2emsh70932a9b3174f98p12370djsn6c06b968109b",
        "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
      },
    }
  );
  const data = payload.data.articles;
  const slicedArray: news[][] = [];
  while (data.length > 12) {
    slicedArray.push(data.slice(0, 12));
    data.splice(0, 12);
  }
  slicedArray.push(data);
  return slicedArray;
};

export default latestNewsGetter;
