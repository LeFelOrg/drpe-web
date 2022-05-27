import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface ContainerProps {
  type?: 'success' | 'error' | 'info'
  hasDescription: boolean
}

const toastTypeVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
}

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  font-size: 1.6rem;
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 0 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 1.4rem;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 15px;
    opacity: 0.6;
    border: 0;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
    `}
`
