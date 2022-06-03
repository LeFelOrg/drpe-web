import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface SortProps {
  toggle: boolean
}

const toggle = css`
  display: none;
`

export const Main = styled.main`
  display: grid;
  padding: 50px 10px;
  justify-content: center;
  justify-items: center;
  gap: 20px;

  h1 {
    font-size: 3.6rem;
    color: #ff0042;
    font-weight: 500;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 700px;
    margin: 0 auto;

    h1 {
      grid-column: 1/3;
    }
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1100px;
    padding: 40px 0;
    gap: 40px;
    align-items: center;

    h1 {
      margin: 0;
      justify-self: start;
    }

    button {
      width: 100%;
    }
  }
`

export const SortContainer = styled.div`
  width: 100%;
  display: grid;
  position: relative;

  @media screen and (min-width: 720px) {
    grid-column: 2/3;
  }

  @media screen and (min-width: 1280px) {
    grid-column: 3/4;
  }
`

export const SortBtn = styled.button<SortProps>`
  width: 100%;
  font-family: 'Roboto Slab', serif;
  font-size: 1.8rem;
  color: #433889;
  background-color: #f2f4f8;
  border: 0;
  padding: 16px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${shade(0.1, '#f2f4f8')};
  }

  svg {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 54px;
    top: 50%;
    transform: translateY(-50%);
  }

  svg:first-child {
    ${props => props.toggle && toggle}
  }

  svg:last-child {
    ${props => !props.toggle && toggle}
  }
`

export const SortList = styled.ul<SortProps>`
  width: 90%;
  font-size: 1.8rem;
  color: #433889;
  position: absolute;
  background-color: ${shade(0.1, '#f2f4f8')};
  cursor: pointer;
  border-radius: 0 0 10px 10px;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  transition: 0.6s;
  height: 152px;
  overflow-y: hidden;

  ${props =>
    !props.toggle &&
    css`
      visibility: hidden;
      height: 0px;
    `}

  li {
    padding: 16px;
    text-align: center;

    & + li {
      border-top: 1px solid #f2f4f8;
    }

    &:hover {
      background-color: ${shade(0.2, '#f2f4f8')};
    }
  }
`

export const InputContainer = styled.div`
  width: 340px;
  height: 56px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #433889;
  display: flex;
  align-items: center;
  overflow: hidden;

  input {
    display: flex;
    max-width: 200px;
    background: transparent;
    border: none;
    margin: 8px;
    font-size: 1.8rem;
    color: #433889;
    font-family: 'Roboto Slab', serif;

    &::placeholder {
      color: #433889;
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    margin-left: 16px;
    width: 20px;
    height: 20px;
  }

  button {
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
    padding: 0;
    width: 84px;
    height: 100%;
    border: 0;
    cursor: pointer;
    background-color: #e62154;
    color: #ffffff;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${shade(0.2, '#e62154')};
    }
  }

  @media screen and (min-width: 720px) {
    grid-column: 1/3;
    width: 100%;

    input {
      display: flex;
      flex: 1;
      max-width: 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    grid-column: 1/3;
    grid-row: 2/3;
  }
`

export const Card = styled.article`
  background-color: #ffffff;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;

  img {
    width: 300px;
    height: 280px;
    border-radius: 10px 10px 0 0;
  }

  div {
    background-color: #f0edee;
    border-radius: 0 0 10px 10px;
    width: 300px;

    p {
      color: #7371ff;
      font-size: 2rem;
      padding: 20px;
      line-height: 160%;
    }

    > div {
      display: flex;
      flex-direction: column;

      span {
        color: #ff0042;
        font-size: 1.4rem;
        padding: 8px 20px;

        & + span {
          padding-top: 0;
          padding-bottom: 16px;
        }
      }
    }
  }

  @media screen and (min-width: 720px) {
    & + article {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`
export const Modal = styled.dialog`
  border-radius: 20px;
  border: 0;
  width: 300px;
  box-sizing: border-box;

  &::backdrop {
    background-color: #00000080;
  }

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 2.4rem;
    color: #7371ff;
  }

  input {
    margin: 16px 0;
    border: 0;
    border-bottom: 1px solid black;
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;

    &:focus {
      outline: 0;
    }
  }

  p {
    margin: 16px 0;
    font-size: 1.4rem;
  }

  span {
    font-weight: 700;
    color: #7371ff;
  }

  strong {
    color: #ff0042;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 8px;

    button {
      width: 100%;
      border: 0;
      background-color: #f2f4f8;
      color: #433889;
      border-radius: 12px;
      font-size: 1.6rem;
      padding: 8px;
      font-family: 'Roboto Slab', serif;
      font-weight: 500;
      border: 1px solid #c3bedd;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: ${shade(0.2, '#f2f4f8')};
      }

      & + button {
        background-color: #e62154;
        color: #f0edee;

        &:hover {
          background-color: ${shade(0.2, '#e62154')};
        }
      }
    }
  }

  @media screen and (min-width: 720px) {
    font-size: 2.6rem;
    width: 600px;
    height: 400px;

    form {
      padding: 30px 40px;
    }

    input {
      margin-top: 30px;
      margin-bottom: 90px;
      font-size: 1.8rem;
    }

    p {
      margin-bottom: 40px;
      font-size: 1.6rem;
    }

    div {
      gap: 40px;
    }
  }
`
