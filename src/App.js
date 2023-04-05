import { useState } from 'react';
import Banner from './componentes/Banner/Baner.js';
import Formulario from './componentes/formulario/index.js';
import Time from './componentes/Time/index.js';

function App() {

  const times =[
    {
      nome:'Atacantes',
      corPrimaria:'#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Goleiros',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Defensores',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Zagueiros',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Pro Player',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Ñ conseguem voar',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Só faz uma para Deus ver',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    },
    {
      nome:'Nubs',
      corPrimaria:'#67be9b',
      corSecundaria:'#95d0b8'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

     
      


      
    </div>
  );
}

export default App;
