import Button from "./Button"

function Evento(){

    function meuEvento(){
        console.log("Ativando primeiro evento")
    }

    function segundoEvento(){
        console.log("Ativando o segundo evento")
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento do button"/>
            <br/>
            <Button event={segundoEvento} text="segundo evento do button"/>
        </div>
    )
}

export default Evento