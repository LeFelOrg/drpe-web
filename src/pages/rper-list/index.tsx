import { useCallback, useState, useRef } from 'react'
import { FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import Header from '../../components/header'
import Button from '../../components/button'
import NewRperModal from './modal-new-rper'
import {
  Card,
  InputContainer,
  Main,
  SortBtn,
  SortContainer,
  SortList,
} from './styles'

const RperList: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [toggleSort, setToggleSort] = useState(false)

  const toggleSortBtn = useCallback(() => {
    toggleSort ? setToggleSort(false) : setToggleSort(true)
  }, [toggleSort])

  const openModal = useCallback(() => {
    modalRef.current?.showModal()
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
        <NewRperModal ref={modalRef} />
      </Main>
    </>
  )
}

export default RperList
