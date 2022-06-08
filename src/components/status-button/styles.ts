import styled, { css } from 'styled-components'

interface StatusProps {
  toggle: boolean
}

export const Container = styled.div<StatusProps>`
  position: relative;
  > svg {
    width: 14px;
    height: 14px;
    color: #7371ff;
  }
`

export const StatusList = styled.ul<StatusProps>`
  padding: 8px;
  font-size: 1.4rem;
  z-index: 1;
  transition: 0.3s;
  overflow-y: hidden;
  background-color: #e5e5e5;
  border-radius: 10px;
  height: 160px;
  width: 160px;
  position: absolute;

  ${props =>
    !props.toggle &&
    css`
      visibility: hidden;
      height: 0px;
    `}

  li {
    list-style: none;
    padding: 8px;

    svg {
      width: 14px;
      height: 14px;
      color: #7371ff;
    }
  }
`
