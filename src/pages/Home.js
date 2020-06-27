import getData from '../utils/getData';
import Character from './Character';
//parte de la funcion
const Home = async () =>{
    //son llamadas comias francesas -- que van a ser el template, porque nos permite utilizar multi linea , para html
    const Characters = await getData();
    const view = `
    <div class="Characters">
       ${Characters.results.map(character => `
        <article class="Character-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </a>
        </article>
        `).join('')}
    </div>    
    `;
    return view;
}
//exportar el elemnto, porque nos va a permitir a nosotros a identificar si este archivo puede ser utilizado en otros archivos de javascript
export default Home;