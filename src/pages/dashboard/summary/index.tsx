import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {
  Container,
  Team,
  PlaceholderLoading,
  Info,
  Progress,
  ProgressBarContainer,
  ProgressBar,
  Carousel,
} from './styles'

const Summary: React.FC = () => {
  const [progress, setProgress] = useState(70)

  return (
    <Container>
      <h2>SUMMARY</h2>
      <Team>
        <h3>Team</h3>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name</strong>
        </article>
      </Team>
      <Info>
        <h3>Information and Highlight</h3>
        <p>Last Update: 20/02/2021</p>
        <p>Created on: 13/02/2019</p>
        <img src="https://picsum.photos/250/380" alt="" />
      </Info>
      <Progress>
        <h3>RPER Application Progress</h3>
        <ProgressBarContainer>
          <ProgressBar progress={progress}>
            <div></div>
          </ProgressBar>
          <strong>{progress}%</strong>
        </ProgressBarContainer>
      </Progress>
      <Carousel>
        <h3>Pictures & Photos</h3>
        <div>
          <FiChevronLeft size={20} />
          <FiChevronRight size={20} />
          <img src="https://picsum.photos/248/352" alt="" />
        </div>
      </Carousel>
    </Container>
  )
}

export default Summary
