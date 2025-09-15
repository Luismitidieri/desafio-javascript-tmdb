
//Importando axios
const axios = require("axios");
//Atribuindo API KEY
const API_KEY = "65d9dba8957eebc2b5b4dc05537de1bf";

(async () => {
  try {
    // Requisição GET
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
    );

    // Extrair só os campos desejados
    let filmes = (data.results || []).map(filme => ({
      id: filme.id,
      title: filme.title,
      release_date: filme.release_date,
      overview: filme.overview
    }));

    // Ordenar por data de lançamento (mais recente primeiro)
    filmes = filmes.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

    console.log(filmes);
  } catch (err) {
    console.error("Erro:", err.response?.status, err.response?.data || err.message);
  }
})();

