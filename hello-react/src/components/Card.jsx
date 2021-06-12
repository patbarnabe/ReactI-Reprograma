import dogs from '../services/dogs'
import '../styles/card.css'

function Card() {
    return (
        <section class="main">
            {dogs.map(dog => {
                return(
                    <section class="cards">
                        <div class="infos">
                            <h3 class="id">{dog.id}</h3>
                            <h2 class="nome">{dog.nome}</h2>
                            <h3 class="origem">{dog.origem}</h3>
                        </div>
                        
                        <img src={dog.imagem} alt={dog.nome} class="img"/>
                    </section>
                )
            })}
        </section>
    )
}

export default Card