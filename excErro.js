// id
// - título
// - data de lançamento
// - descrição

//Importando axios
const axios = require('axios'); 
require('dotenv').config();

//Atribuindo key
const API_KEY = process.env.TMDB_KEY;
//Retornando erro cedo 
if(!API_KEY) throw new Error('Erro no .env');

(async() => {
    try{

        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
            params : {api_key : API_KEY}
        });
            //Extraindo apenas os dados necessários
        const filmes = (data.results || []).map (f => ({
                id:f.id,
                title:f.title,
                release_date: f.release_date,
                overview: f.overview,
            }
        
        });
                //Imprime o resultado no console
        console.log(JSON.stringify(filmes, null, 2));
    } catch (err){
        console.error("Erro", err.response?.status, err.response?.data || err.message);
    }
})();
