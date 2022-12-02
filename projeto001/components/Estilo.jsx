export default function init(props){

    return(
        <>
         <h1 style={{
            backgroundColor: props.numero >=0?"blue":"red",
            color: '#fff',
            textAlign: props.direita? "right":"left"
         }}>Valor:{props.numero}</h1>

         <h2 className={props.numero >=0?"verde":"cinza"}>
            Valor condicional: {props.numero}
         </h2>

        </>
    )
}