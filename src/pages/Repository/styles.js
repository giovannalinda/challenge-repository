import styled from 'styled-components'

export const Loading = styled.div`
  color: #04d361;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Image = styled.img`
  position: absolute;
  left: -3rem;
  top: -10px;
  z-index: -1;
  opacity: 0.2;
`

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  a {
    color: #04d361;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin: 15px;
  }

  h1 {
    color: #f0f6fb;
    font-size: 24px;
    margin: 10px;
  }

  p {
    color: #f0f6fb;
    font-size: 14px;
    text-align: center;
    max-width: 400px;
  }
`
export const IssueList = styled.ul`
  list-style: none;
  max-height: 380px;
  overflow-y: scroll;
  padding-top: 30px;
  margin-top: 30px;

  &::-webkit-scrollbar {
    width: 0;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  li {
    display: flex;
    padding: 19px;
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

  div {
    flex: 1;
    margin-left: 36px;

    strong {
      font-size: 16px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #f0f6fb;

        &:hover {
          color: #04d361;
        }
      }

      span {
        background-color: #333;
        color: #eeee;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 5px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #9999;
    }
  }
`
