import dogs from '../services/dogs'
import '../styles/card.css'

function Card() {
    return (
        <section className="main">
            {dogs.map(dog => {
                return(
                    <section key={dog.id}  className="cards">
                        <div className="infos">
                            <h3 className="id">{dog.id}</h3>
                            <h2 className="nome">{dog.nome}</h2>
                            <h3 className="origem">{dog.origem}</h3>
                        </div>
                        
                        <img src={dog.imagem} alt={dog.nome} className="img"/>
                    </section>
                )
            })}
        </section>
    )
}

export default Card