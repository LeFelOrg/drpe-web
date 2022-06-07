import styled, { css } from 'styled-components'

interface SubMenuProps {
  toggle?: boolean
}

const toggle = css`
  display: none;
`

export const Main = styled.main`
  margin: 0 auto;
  padding: 20px;
  display: grid;
  justify-items: center;
  justify-content: center;
  gap: 40px;
  grid-template-areas:
    'title'
    'menu'
    'content';

  h1 {
    font-size: 3.6rem;
    color: #ff0042;
    margin-top: 20px;
    grid-area: title;
  }
`

export const Menu = styled.aside`
  width: 260px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-area: menu;

  h2 {
    font-size: 3.2rem;
    font-weight: 700;
    color: #7371ff;
    display: flex;
    align-self: center;
    align-items: center;
    gap: 16px;
  }

  span {
    font-size: 1.4em;
    font-weight: 500;
    color: #828282;
  }

  section {
    & + section {
      border-top: 1px solid #dde7f1;
    }
  }
`

export const SubMenuTitle = styled.button<SubMenuProps>`
  width: 100%;
  margin: 24px 0 16px 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #7371ff;
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #bdbdbd;
    width: 32px;
    height: 32px;
  }

  svg:first-child {
    ${props => !props.toggle && toggle}
  }

  svg:last-child {
    ${props => props.toggle && toggle}
  }
`

export const SubMenuItems = styled.div<SubMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${props =>
    !props.toggle &&
    css`
      visibility: hidden;
      height: 0px;
    `}

  button {
    font-size: 1.4em;
    font-weight: 500;
    color: #828282;
    background-color: transparent;
    border: 0;
    padding: 8px 0;
  }

  button:focus {
    background-color: #f0edee;
    border-radius: 25px 0px 0px 25px;
    width: calc(100% + 24px);
    text-align: left;
  }
`

export const Content = styled.div`
  border: 1px solid black;
  width: 320px;
  height: 100px;
  grid-area: content;
`

export const StatusBtn = styled.button`
  width: 14px;
  height: 14px;
  border: 1px solid #7371ff;
`
