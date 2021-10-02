import styled from 'styled-components'

export const Title = styled.h1`
  color: #f0f6fb;
  max-width: 700px;
  padding: 30px;
  margin: 50px auto;
  font-size: 32px;
`

export const Form = styled.form`
  max-width: 700px;
  padding: 30px;
  margin: auto;
  display: flex;
  input {
    width: 350px;
    height: 70px;
    background: #f0f6fb;
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 30px;
  }
`

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  padding: 19px 64px;
  width: 80px;
  height: 70px;
  background: #04d361;
  border-radius: 0 5px 5px 0;
  color: #f0f6fb;
  border: none;
`
