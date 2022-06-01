import { useCallback, useState, useRef } from 'react'
import { FiPower, FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useAuth } from '../../contexts/auth-context'
import SmLogo from '../../assets/small-logo.svg'
import Button from '../../components/button'
import {
  Card,
  Header,
  HeaderContent,
  InputContainer,
  Main,
  Modal,
  SortBtn,
  SortContainer,
  SortList,
} from './styles'
import ProfileInfo from '../../components/profile-info'

const Dashboard: React.FC = () => {
  const [toggleSort, setToggleSort] = useState(false)
  const modalRef = useRef<any>(null)

  const { logOut } = useAuth()

  const toggleSortBtn = useCallback(() => {
    toggleSort ? setToggleSort(false) : setToggleSort(true)
  }, [toggleSort])

  const openModal = useCallback(() => {
    modalRef.current.showModal()
  }, [modalRef])

  return (
    <>
      <Header>
        <HeaderContent>
          <img
            src={SmLogo}
            alt="Rapid Participatory Emancipatory Research logo"
          />
          <ProfileInfo />
        </HeaderContent>
        <button type="button" onClick={logOut}>
          <FiPower />
          Sign Out
        </button>
      </Header>

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
          <h2>RPER Name</h2>
        </Modal>
      </Main>
    </>
  )
}

export default Dashboard
