import styled from 'styled-components'

export const Div = styled.div`
  width: 100hw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  border-radius: .25rem 0 0 .25rem;
  padding: 0 .5rem;

  &focus, &active {
    outline: none;
    box-shadow: none;
  }

`
export const Button = styled.button`
  height: 1.6rem;
  border: 1px solid black;
  border-radius: 0 .25rem .25rem 0;
`
export const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const P = styled.p`
  font-family: sans-serif;
  text-align: center;
  display: block;
  font-size: .8rem;
  color: red;
  font-weight: 600;
`