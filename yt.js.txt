const axios = require("axios");

const API_KEY = "65d9dba8957eebc2b5b4dc05537de1bf";

// ID do filme 
const idFilme =  1035259;

(async () => {
  try {
    // Chamada na API de vídeos do filme
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${idFilme}/videos?api_key=${API_KEY}&language=pt-BR`
    );

    // Filtrar só os trailers (site YouTube e tipo Trailer)
    const trailers = data.results.filter(
      video => video.site === "YouTube" && video.type === "Trailer"
    );

    // Extrair apenas a key de cada trailer
    const trailerKeys = trailers.map(video => video.key);

    // Se quiser a URL completa do YouTube
    const trailerUrls = trailerKeys.map(key => `https://www.youtube.com/watch?v=${key}`);

    console.log("Keys:", trailerKeys);
    console.log("URLs:", trailerUrls);

  } catch (err) {
    console.error("Erro:", err.response?.status, err.response?.data || err.message);
  }
})();
