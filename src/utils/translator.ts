import axios from "./axios";
const translator = async (
  text: string,
  sourse: string = "fr",
  target: string = "en"
): Promise<string> => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", sourse);
  encodedParams.append("target_language", target);
  encodedParams.append("text", text);

  const data = await axios.post("", encodedParams); 
  console.log(data);
  
  return data.data.data.translatedText;
};

export default translator;
