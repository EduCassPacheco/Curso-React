import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" carro="vergolinno"/>
                <Item marca="Chevrolet" carro="Chevette"/>
            </ul>
        </>
    )
}

export default List;