import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82cffa',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#a6d157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#e06b69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#db6EBF',
      corSecundaria:'#FAE9FS'
    },
    {
      nome:'Mobile',
      corPrimaria:'#ffba05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#ff8a29',
      corSecundaria:'#FFEEDF'
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
      <Rodape />
   
    </div>
  );
}

export default App;
