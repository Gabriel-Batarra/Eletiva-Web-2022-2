import style from '../styles/exemplo003.module.css'

export default function init(){
    return(
        <>
            <h1 className={style.vermelho}>Exemplo css escopado</h1>
            <h1 id={style.cinza}>Estilo por ID</h1>
        </>
    )
}