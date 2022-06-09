import styled, { css } from 'styled-components'

interface SubMenuProps {
  toggle?: boolean
}

const toggle = css`
  display: none;
`

const hide = css`
  visibility: hidden;
  height: 0px;
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

  > h1 {
    font-size: 3.6rem;
    color: #ff0042;
    margin-top: 20px;
    grid-area: title;
  }

  @media screen and (min-width: 768px) {
    grid-template-rows: minmax(0, auto) minmax(0, auto) 1fr;
    grid-template-areas:
      'title title'
      'menu content'
      '. content';
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 40px;
    grid-template-areas:
      'title title title'
      'menu content content'
      '. content content';
  }
`

export const Menu = styled.aside`
  width: 100%;
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

  @media screen and (min-width: 768px) {
    width: 260px;
    border-radius: 12px 0 0 12px;
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

  @media screen and (min-width: 768px) {
    svg:first-child,
    svg:last-child {
      display: block;
    }

    svg:first-child {
      ${props => props.toggle && toggle}
    }

    svg:last-child {
      ${props => !props.toggle && toggle}
    }
  }
`

export const SubMenuItems = styled.div<SubMenuProps>`
  &:first-child {
    visibility: visible;
    margin-bottom: 40px;

    button {
      gap: 22px;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${props => !props.toggle && hide}

  > button {
    font-size: 1.4rem;
    font-weight: 500;
    color: #828282;
    background-color: transparent;
    border: 0;
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 4px;

    > svg {
      width: 22px;
      height: 22px;
      color: #ff0042;
      margin-right: 4px;
    }
  }

  > button:focus {
    background-color: #f0edee;
    border-radius: 25px 0px 0px 25px;
    width: calc(100% + 24px);
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    &:first-child {
      margin-bottom: 0;
    }

    visibility: visible;
    height: 100%;

    ${props => props.toggle && hide}
  }
`

export const Content = styled.div`
  width: 320px;
  grid-area: content;

  @media screen and (min-width: 768px) {
    width: 428px;
  }

  @media screen and (min-width: 1024px) {
    width: 644px;
  }

  @media screen and (min-width: 1280px) {
    width: 900px;
  }
`
