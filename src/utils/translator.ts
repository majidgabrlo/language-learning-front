import axios from "axios";
const translator = async (
  text: string,
  sourse: string = "fr",
  target: string = "en"
): Promise<string> => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", sourse);
  encodedParams.append("target_language", target);
  encodedParams.append("text", text);

  const data = await axios.post(
    "https://text-translator2.p.rapidapi.com/translate",
    encodedParams,
    {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "792d2f2d2emsh70932a9b3174f98p12370djsn6c06b968109b",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
    }
  );
  return data.data.data.translatedText;
};

export default translator;
