import styled from 'styled-components'
import { shade } from 'polished'

export const Modal = styled.dialog`
  margin: auto;
  border-radius: 20px;
  border: 0;
  width: 300px;
  position: relative;

  &::backdrop {
    background-color: #00000080;
  }

  > button {
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 12px;
    right: 24px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 2.4rem;
      color: #7371ff;
    }

    input {
      margin: 16px 0;
      border: 0;
      border-bottom: 1px solid black;
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

    button {
      margin: 0 auto;
      width: 50%;
      border: 0;
      background-color: #e62154;
      color: #f0edee;
      border-radius: 12px;
      font-size: 1.6rem;
      padding: 8px;
      font-weight: 500;
      transition: all 0.3s;

      &:hover {
        background-color: ${shade(0.2, '#e62154')};
      }
    }
  }

  @media screen and (min-width: 720px) {
    font-size: 2.6rem;
    width: 600px;
    height: 400px;

    > button {
      top: 24px;
      right: 32px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    form {
      padding: 30px 40px;
      margin-top: 40px;

      input {
        margin-top: 30px;
        margin-bottom: 90px;
        font-size: 1.8rem;
      }

      p {
        margin-bottom: 40px;
        font-size: 1.6rem;
      }
    }
  }
`
