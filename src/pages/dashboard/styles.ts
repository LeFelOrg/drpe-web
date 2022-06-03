import styled from 'styled-components'

export const Main = styled.main`
  h1 {
    font-size: 3.6rem;
    color: #ff0042;
  }
`

export const Menu = styled.div`
  width: 253px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px 0px 0px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 3.2rem;
    font-weight: 700;
    color: #7371ff;
    display: flex;
    align-self: center;
  }

  span {
    font-size: 1.4em;
    font-weight: 500;
    color: #828282;
  }

  div {
    border-top: 1px solid #dde7f1;

    section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      button {
        font-family: 'Roboto Slab', serif;
        font-size: 1.4em;
        font-weight: 500;
        color: #828282;
        padding: 0;
        background-color: transparent;
        border: 0;
        cursor: pointer;
      }
    }
    section button:active {
      background-color: #f0edee;
      border-radius: 25px 0px 0px 25px;
      width: calc(100% + 24px);
      text-align: left;
      padding: 8px 91px 8px 52px;
    }
  }
`

export const SubMenu = styled.button`
  font-family: 'Roboto Slab', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #7371ff;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`
