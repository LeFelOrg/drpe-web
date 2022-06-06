import { useCallback, useState, useRef } from 'react'
import { FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { useAuth } from '../../contexts/auth-context'
import Header from '../../components/header'
import Button from '../../components/button'
import {
  Card,
  InputContainer,
  Main,
  Modal,
  SortBtn,
  SortContainer,
  SortList,
} from './styles'

const RperList: React.FC = () => {
  const [toggleSort, setToggleSort] = useState(false)
  const modalRef = useRef<HTMLDialogElement>(null)

  const { user } = useAuth()

  const toggleSortBtn = useCallback(() => {
    toggleSort ? setToggleSort(false) : setToggleSort(true)
  }, [toggleSort])

  const openModal = useCallback(() => {
    modalRef.current?.showModal()
  }, [modalRef])

  const closeModal = useCallback(() => {
    modalRef.current?.close()
  }, [modalRef])

  return (
    <>
      <Header btnType="signOut" />
      <Main>
        <h1>RPER List</h1>
        <Button onClick={openModal}>+ Add New RPER</Button>
        <SortContainer>
          <SortBtn onClick={toggleSortBtn} toggle={toggleSort}>
            Sort By
            <FiChevronDown />
            <FiChevronUp />
          </SortBtn>
          <SortList toggle={toggleSort}>
            <li>Name</li>
            <li>Last Update</li>
            <li>Created Date</li>
          </SortList>
        </SortContainer>
        <InputContainer>
          <FiSearch />
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </InputContainer>

        <Card>
          <img src="https://picsum.photos/300/280" alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              expedita quis optio, nobis recusandae qui? Deleniti voluptatibus
              odio perferendis laudantium.
            </p>
            <div>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
            </div>
          </div>
        </Card>
        <Card>
          <img src="https://picsum.photos/300/280" alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              expedita quis optio, nobis recusandae qui? Deleniti voluptatibus
              odio perferendis laudantium.
            </p>
            <div>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
            </div>
          </div>
        </Card>
        <Card>
          <img src="https://picsum.photos/300/280" alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              expedita quis optio, nobis recusandae qui? Deleniti voluptatibus
              odio perferendis laudantium.
            </p>
            <div>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
            </div>
          </div>
        </Card>
        <Card>
          <img src="https://picsum.photos/300/280" alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              expedita quis optio, nobis recusandae qui? Deleniti voluptatibus
              odio perferendis laudantium.
            </p>
            <div>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
            </div>
          </div>
        </Card>
        <Modal ref={modalRef}>
          <button type="button" onClick={closeModal}>
            <AiOutlineClose />
          </button>
          <form>
            <label htmlFor="rperName">RPER Name:</label>
            <input type="text" name="rperName" id="rperName" />
            <p>
              <span>Coordinator: </span>
              <strong>{user.name}</strong>
            </p>
            <button>Create RPER</button>
          </form>
        </Modal>
      </Main>
    </>
  )
}

export default RperList