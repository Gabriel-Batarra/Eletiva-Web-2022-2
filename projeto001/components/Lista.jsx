export default function init(props){
  
    var vet=[]
 
    return(
        <>
        <h1>{vet}</h1>
        <h1>{listar(props.vet, vet)}</h1>
        </>
    )
}

function listar(n, vet){
    for(let i=0; i<=n; i++){
        vet.push(<span>{i} </span>)
    }
    return vet
}