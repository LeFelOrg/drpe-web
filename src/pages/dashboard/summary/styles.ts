import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    font-size: 3.2rem;
    color: #828282;
    grid-area: title;
  }

  h3 {
    font-size: 1.8rem;
    color: #7371ff;
    padding-bottom: 16px;
    border-bottom: 2px solid #f0edee;
    margin-left: -24px;
    margin-right: -24px;
    padding-left: 24px;
  }

  display: grid;
  gap: 24px;
  grid-template-areas:
    'title'
    'team'
    'info'
    'progress'
    'carousel';
`

export const Team = styled.div`
  padding: 16px 24px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);

  article {
    display: flex;
    align-items: center;
    gap: 32px;
    border-bottom: 1px solid #f0edee;
    padding: 20px;

    > div {
      width: 56px;
      height: 56px;
    }

    strong {
      font-size: 2rem;
      color: #ff0042;
    }
  }
  grid-area: team;
`

export const Info = styled.div`
  padding: 16px 24px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);
  grid-area: info;

  p {
    font-size: 1.4rem;
    color: #ff0042;
    line-height: 24px;
    margin-top: 20px;

    & + p {
      margin-top: 0px;
      margin-bottom: 20px;
    }
  }

  img {
    border-radius: 10px;
    display: block;
    margin: 0 auto;
  }
`

export const Progress = styled.div`
  padding: 16px 24px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);
  grid-area: progress;
`

export const Carousel = styled.div`
  padding: 16px 24px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.25);
  grid-area: carousel;
`
export const PlaceholderLoading = styled.div`
  min-width: 56px;
  min-height: 56px;
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
    width: 100px;
    height: 100px;
    position: absolute;
    background: linear-gradient(
      to right,
      transparent,
      #ffffff 50%,
      transparent
    );
  }

  div {
    width: 22px;
    height: 22px;
    background-color: #c0c1c5;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  div:last-child {
    width: 50px;
    height: 50px;
    background-color: #c0c1c5;
    border-radius: 50%;
    position: absolute;
    top: 110%;
  }

  @keyframes is-passing {
    from {
      transform: translateX(-100%);
    }
  }
`