import css from '../styles/linha.module.css'
import Celula from './celula'
export default function initi(props){
    
    return(
        
        <div className= {css.lin}>
            <Celula preto= {props.preto}/>
            <Celula preto= {!props.preto}/>
            <Celula preto= {props.preto}/>
            <Celula preto= {!props.preto}/>
            <Celula preto= {props.preto}/>
            <Celula preto= {!props.preto}/>
            <Celula preto= {props.preto}/>
            <Celula preto= {!props.preto}/>

        </div>
    )
}