import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Div = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
`

export const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`
export const Li = styled.li`
  margin: 0.5rem 0;
  background-color: black;
  color: white;
  padding: 0.5rem;
`

export const Linkk = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  color: white;
  background-color: black;
  text-decoration: none;
  margin: 2rem auto;
  padding: .5rem;
`
