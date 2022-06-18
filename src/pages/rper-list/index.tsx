import { useCallback, useState, useRef, useEffect } from 'react'
import { FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useRper } from '../../contexts/rper-context'
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
  const { rpers, getRpers } = useRper()

  useEffect(() => {
    getRpers()
  }, [])

  const toggleSortBtn = useCallback(() => {
    toggleSort ? setToggleSort(false) : setToggleSort(true)
  }, [toggleSort])

  const openModal = useCallback(() => {
    modalRef.current?.showModal()
  }, [modalRef])

  console.log(rpers)

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

        {rpers?.map(rper => (
          <Card key={rper.rper_id}>
            <img src="https://picsum.photos/300/280" alt="" />
            <div>
              <p>{rper.name}</p>
              <div>
                <span>{rper.updated_at}</span>
                <span>{rper.created_at}</span>
              </div>
            </div>
          </Card>
        ))}

        <NewRperModal ref={modalRef} />
      </Main>
    </>
  )
}

export default RperList
