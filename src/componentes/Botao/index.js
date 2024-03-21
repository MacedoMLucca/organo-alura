import './Botao.css'


const Botao = (props) =>{
    return(<button class="botao">
        {props.children}
    </button>)
}

export default Botao