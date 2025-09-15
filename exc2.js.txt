
//importando axios
const axios = require("axios");
//Atribuindo Api key
const API_KEY = "65d9dba8957eebc2b5b4dc05537de1bf";

(async () => {
  try {
    // Buscar lista de gêneros
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
    );

    // Filtrar gêneros que começam com "A"
    const generosFiltrados = (data.genres || [])
      .filter(g => g.name.startsWith("A"))
      .map(g => ({
        id: g.id,
        name: g.name
      }));

          //imprimindo no console
    console.log("Gêneros filtrados:", generosFiltrados);
  } catch (err) {
    console.error("Erro:", err.response?.status, err.response?.data || err.message);
      }
})();
