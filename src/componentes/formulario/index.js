import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../botao'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState ('')
    const [rank, setRank] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTIme] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            rank,
            imagem,
            time
        })
        setNome('')
        setRank('')
        setImagem('')
        setTIme('')
    }

return(
    <section className='formulario'>
        <form onSubmit={aoSalvar} className='form'>
            <h2>Preencha os dados para criar o card do integrante</h2>
        <CampoTexto 
            obrigatorio={true}
            label="Nome" 
            placeholder = "Digite seu nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />
        <CampoTexto 
            obrigatorio={true} 
            label="Rank" 
            placeholder = "Digite seu rank"
            valor={rank}
            aoAlterado={valor => setRank(valor)}
            />
        <CampoTexto 
            obrigatorio={true} 
            label="Imagem" 
            placeholder = "Digite o endereço da imagem"
            valor={imagem}
            aoAlterado={valor =>setImagem(valor)}
            />
        <ListaSuspensa 
            obrigatorio={true} 
            label="Time" 
            itens = {props.times}
            valor={time}
            aoAlterado={valor => setTIme(valor)}
            />
        <Botao>Criar Card</Botao>
        </form>
    </section>
)
        
}

export default Formulario