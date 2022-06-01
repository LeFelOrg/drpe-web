import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    height: 144px;
    background-color: #02004d;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: #e62154;
      margin-right: 20px;
      text-decoration: none;
      z-index: 1;

      svg {
        color: #7371ff;
        width: 24px;
        height: 24px;
      }

      &:hover {
        opacity: 0.9;
      }
    }

    @media screen and (min-width: 600px) {
      a {
        margin-right: 40px;
      }
    }

    @media screen and (min-width: 900px) {
      a {
        margin-right: 80px;
      }
    }

    @media screen and (min-width: 1200px) {
      a {
        margin-right: 130px;
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -90px auto;

  form {
    width: 340px;
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: 500;
      color: #ff0042;
      margin-bottom: 24px;
      text-align: left;
    }

    div:nth-child(4) {
      margin-top: 24px;
    }

    button {
      margin-top: 16px;
    }
  }
`

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 48px;
    height: 48px;
    background-color: #e62154;
    border-radius: 50%;
    right: 8px;
    bottom: 8px;
    border: 0;
    cursor: pointer;
    transition: background-color 0.3s;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #f0edee;
    }

    &:hover {
      background-color: ${shade(0.2, '#e62154')};
    }
  }
`

export const PlaceholderLoading = styled.div`
  min-width: 186px;
  min-height: 186px;
  background-color: #dddee0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-self: center;
  align-items: center;
  position: relative;

  &::before {
    animation: is-passing 0.8s ease-in infinite;
    content: '';
    display: block;
    width: 300px;
    height: 300px;
    position: absolute;
    background: linear-gradient(
      to right,
      transparent,
      #ffffff 50%,
      transparent
    );
  }

  div {
    width: 70px;
    height: 70px;
    background-color: #c0c1c5;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div:last-child {
    width: 130px;
    height: 130px;
    background-color: #c0c1c5;
    border-radius: 40%;
    position: absolute;
    top: 100%;
  }

  @keyframes is-passing {
    from {
      transform: translateX(-100%);
    }
  }
`
