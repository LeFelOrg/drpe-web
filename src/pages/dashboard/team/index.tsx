import { useCallback, useRef } from 'react'
import { RiExchangeFill } from 'react-icons/ri'
import { IoMdAdd } from 'react-icons/io'
import AddTeamModal from './modal-add-team'
import {
  Container,
  TeamContainer,
  TeamHeader,
  PlaceholderLoading,
} from './styles'

const Team: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const openModal = useCallback(() => {
    modalRef.current?.showModal()
  }, [modalRef])

  return (
    <Container>
      <h2>
        <RiExchangeFill />
        TEAM
      </h2>
      <TeamContainer>
        <TeamHeader>
          <h3>Team</h3>
          <button onClick={openModal}>
            <IoMdAdd />
          </button>
        </TeamHeader>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname (Coordinator)</strong>
        </article>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname</strong>
        </article>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname</strong>
        </article>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname</strong>
        </article>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname</strong>
        </article>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname</strong>
        </article>
        <article>
          <div>
            <PlaceholderLoading>
              <div></div>
              <div></div>
            </PlaceholderLoading>
          </div>
          <strong>Name Surname</strong>
        </article>
      </TeamContainer>

      <AddTeamModal ref={modalRef} />
    </Container>
  )
}

export default Team
