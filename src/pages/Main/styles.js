import styled, { keyframes, css } from 'styled-components'

export const Title = styled.h1`
  color: #f0f6fb;
  max-width: 700px;
  padding: 30px;
  margin: 50px auto;
  font-size: 52px;
  font-weight: bold;

  svg {
    margin: 0 0 0 10px;
  }
`

export const Image = styled.img`
  position: absolute;
  left: -3rem;
  top: -10px;
  z-index: -1;
  opacity: 0.2;
`

export const Form = styled.form`
  max-width: 700px;
  padding: 30px;
  margin: auto;
  display: flex;
  input {
    width: 500px;
    height: 70px;
    background: #161b22;
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 30px;
    color: #f0f6fb;
  }
`

export const List = styled.ul`
  list-style: none;
  max-height: 350px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  li {
    display: flex;
    padding: 30px;
    background: #161b22;
    border-radius: 5px;
    margin: auto;
    max-width: 635px;
    height: 90px;
    justify-content: space-between;

    & + li {
      margin-top: 10px;
    }
  }

  span {
    font-size: 18px;
    color: #f0f6fb;
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
