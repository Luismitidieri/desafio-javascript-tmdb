
// Importando axios
const axios = require("axios");
//Atribuindo Api key
const API_KEY = "65d9dba8957eebc2b5b4dc05537de1bf";

// Exemplo: gênero Ação (id = 28 no TMDB)
const genreId = 16;

(async () => {
  try {
    // Buscar filmes por gênero
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=pt-BR`
    );

    // Extraindo apenas os dados necessários 
    const filmes = (data.results || []).map(filme => ({
      id: filme.id,
      title: filme.title,
      poster: filme.poster_path
        ? `https://image.tmdb.org/t/p/w500${filme.poster_path}`
        : null // caso não tenha poster
    }));
        //Imprimindo no console
    console.log(filmes);
  } catch (err) {
    console.error("Erro:", err.response?.status, err.response?.data || err.message);
  }
})();
