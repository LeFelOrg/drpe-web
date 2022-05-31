import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div``

export const Header = styled.header`
  background-color: #02004d;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    display: none;
  }

  button {
    font-family: 'Roboto Slab', serif;
    font-size: 0;
    font-weight: 500;
    background-color: transparent;
    border: 0;
    color: #e62154;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    gap: 12px;
    transition: color 0.3s;

    &:hover {
      color: ${shade(0.2, '#e62154')};
    }

    &:hover > svg {
      color: ${shade(0.2, '#7371ff')};
    }

    svg {
      color: #7371ff;
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 600px) {
    padding: 30px 60px;
    img {
      display: block;
    }
  }

  @media screen and (min-width: 900px) {
    padding: 30px 80px;

    img {
      display: block;
    }

    button {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 30px 160px;
  }
`
export const HeaderContent = styled.div`
  display: flex;

  @media screen and (min-width: 600px) {
    gap: 50px;
  }

  @media screen and (min-width: 900px) {
    gap: 85px;
  }

  @media screen and (min-width: 1200px) {
  }
`

export const Main = styled.main`
  display: grid;
  padding: 50px 10px;
  justify-content: center;

  h1 {
    font-size: 3.6rem;
    color: #ff0042;
    font-weight: 500;
    margin-bottom: 40px;
  }
`
export const SortBtn = styled.button`
  font-family: 'Roboto Slab', serif;
  font-size: 1.8rem;
  color: #433889;
  background-color: #f2f4f8;
  border: 0;
  padding: 16px;
  margin-top: 16px;
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
`
export const InputContainer = styled.div`
  width: 340px;
  height: 56px;
  padding: 0;
  border-radius: 10px;
  background-color: #ffffff;
  color: #433889;
  display: flex;
  align-items: center;
  margin-top: 16px;
  overflow: hidden;

  input {
    flex: 1;
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
`
export const Card = styled.article``
