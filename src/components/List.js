import Item from './Item'

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2000} />
                <Item marca="Chevrolet" ano_lancamento={1989}/>
                <Item/>
            </ul>
        </>
    )
}

export default List;