import styled from 'styled-components'

export const Container = styled.div`
  width: 340px;
  height: 56px;
  padding: 0;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  color: #433889;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    margin: 16px;
    font-size: 1.8rem;
    color: #433889;

    &::placeholder {
      color: #433889;
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    margin-left: 16px;
  }
`
