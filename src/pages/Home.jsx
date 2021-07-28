import React, {useState} from 'react'
import Axios from 'axios'
import * as S from './styled_home'
import {useHistory} from 'react-router-dom'

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false)

  function handlePesquisa() {
    const baseUrl = 'https://api.github.com/users'
    const targetUrl = 'repos'
    Axios.get(`${baseUrl}/${usuario}/${targetUrl}`)
      .then(response => {
          const repositories = response.data;
          let list = []
          let repositoryName = repositories.map(repo => {
            list.push(repo.name)
          })
          
          localStorage.setItem('repositorios', JSON.stringify(list))
          history.push('/repositories')
        }
      )
      .catch(err => {
        setErro(true) 
      })
  }
  
  return (
    <S.Div>
      <div>
        <S.H1>Usuário do github</S.H1> <br/>
        <S.Input type="text" className="usuarioInput" placeholder="informe o usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button onClick={handlePesquisa}>buscar</S.Button>

          {erro ? <S.P>Ocorreu um erro. Tente novamente</S.P> : ''}

      </div>

      
    </S.Div>
  );
}

export default App;