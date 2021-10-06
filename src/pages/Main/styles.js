import styled, { keyframes, css } from 'styled-components'

export const Title = styled.h1`
  color: #f0f6fb;
  max-width: 700px;
  padding: 30px;
  margin: 50px auto;
  font-size: 52px;
  font-weight: bold;
`

export const Form = styled.form`
  max-width: 700px;
  padding: 30px;
  margin: auto;
  display: flex;
  input {
    width: 500px;
    height: 70px;
    background: #f0f6fb;
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 30px;
  }
`

export const List = styled.ul`
  list-style: none;

  li {
    margin: 15px auto;
    width: 635px;
    height: 90px;
    background: #f0f6fb;
    border-radius: 5px;
    padding: 35px;
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 18px;
    color: #3d3d4d;
  }

  a {
    color: #04d361;
    text-decoration: none;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  padding: 19px 64px;
  width: 80px;
  height: 70px;
  background: #04d361;
  border-radius: 0 5px 5px 0;
  color: #f0f6fb;
  border: none;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`
