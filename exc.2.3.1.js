//Mesmo que o 2.3

const axios = require("axios");

const API_KEY = "SUA_API_KEY_AQUI";

// Exemplo: gênero Ação (id = 28 no TMDB)
const genreId = 28;

(async () => {
  try {
    // Buscar filmes por gênero
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=pt-BR`
    );

    // Extrair apenas id, título e poster
    const filmes = (data.results || []).map(filme => ({
      id: filme.id,
      title: filme.title,
      poster: filme.poster_path
        ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
        : null // caso não tenha poster
    }));
        //  imprimindo no console
    console.log(filmes);
  } catch (err) {
    console.error("Erro:", err.response?.status, err.response?.data || err.message);
  }
})();
