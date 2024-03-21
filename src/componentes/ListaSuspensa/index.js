import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return(

        <div class="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item=> {
                   return <option required={props.obrigatorio} key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}


export default ListaSuspensa