import React, {useEffect, useState} from 'react'
import * as S from './styled_repo';
import {useHistory} from 'react-router-dom';

export default function Repositories() {
  const history = useHistory();
  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositorios')
    if(repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName)
      setRepositories(repositoriesName)
      localStorage.clear('repositorios')
    } else {
      history.push('/')
    }
  }, [])

  return(
    <S.Div>
      <S.H1>Repositórios</S.H1>

      <S.Ul>
        {repositories.map((repo, i) => {
          return(
            <S.Li key={i}>{i + 1} - {repo}</S.Li>
          )          
        })}
      </S.Ul>
      <S.Linkk to="/" > Voltar </S.Linkk>
    </S.Div>
  )
}