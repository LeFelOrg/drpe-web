import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface StatusProps {
  toggle: boolean
}

export const Container = styled.div<StatusProps>`
  cursor: pointer;
  position: relative;

  > svg {
    width: 14px;
    height: 14px;
    color: #7371ff;
  }
`

export const StatusList = styled.ul<StatusProps>`
  font-size: 1.4rem;
  z-index: 1;
  transition: 0.6s;
  overflow-y: hidden;
  background-color: #e5e5e5;
  border-radius: 10px;
  height: 144px;
  width: 160px;
  position: absolute;

  ${props =>
    !props.toggle &&
    css`
      visibility: hidden;
      height: 0px;
    `}

  li {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 8px 16px;
    color: #433889;
    border-bottom: 1px solid #f2f4f8;

    &:hover {
      background-color: ${shade(0.2, '#f2f4f8')};
    }

    svg {
      width: 14px;
      height: 14px;
      color: #7371ff;
    }
  }
`
