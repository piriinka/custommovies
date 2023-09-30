import axios from "axios";

export const getData = async ({ queryKey }) => {
  try {
    const [_, url] = queryKey;

    if (!url) {
      throw new Error('Invalid URL in queryKey');
    }

    const apiKey = import.meta.env.VITE_API_KEY;
    console.log("URL:", url); // Add this line for debugging


    const response = await axios.get(url, {
      params: {
        api_key: apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.response || error.message || error);
    throw error;
  }
};

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";
export const imgUnavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
export const noPicture = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
