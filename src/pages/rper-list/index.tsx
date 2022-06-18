import { useCallback, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

interface Rper {
  name: string
  coordinator_id: string
  rper_id: string
  created_at: string
  updated_at: string
}

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

  const sortByName = useCallback(() => {
    rpers?.sort((a: Rper, b: Rper) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1
      }
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1
      }
      return 0
    })
    setToggleSort(false)
  }, [rpers])

  const sortByUpdatedDate = useCallback(() => {
    rpers?.sort((a: Rper, b: Rper) => {
      if (a.updated_at.toUpperCase() > b.updated_at.toUpperCase()) {
        return -1
      }
      if (a.updated_at.toUpperCase() < b.updated_at.toUpperCase()) {
        return 1
      }
      return 0
    })
    setToggleSort(false)
  }, [rpers])

  const sortByCreatedDate = useCallback(() => {
    rpers?.sort((a: Rper, b: Rper) => {
      if (a.created_at.toUpperCase() < b.created_at.toUpperCase()) {
        return -1
      }
      if (a.created_at.toUpperCase() > b.created_at.toUpperCase()) {
        return 1
      }
      return 0
    })
    setToggleSort(false)
  }, [rpers])

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
            <li onClick={sortByName}>Name</li>
            <li onClick={sortByUpdatedDate}>Last Update</li>
            <li onClick={sortByCreatedDate}>Created Date</li>
          </SortList>
        </SortContainer>
        <InputContainer>
          <FiSearch />
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </InputContainer>

        {rpers?.map(rper => (
          <Link to={`/dashboard/${rper.rper_id}`} key={rper.rper_id}>
            <Card>
              <img src="https://picsum.photos/300/280" alt="" />
              <div>
                <p>{rper.name}</p>
                <div>
                  <span>
                    Last Update:{' '}
                    {new Date(rper.updated_at).toLocaleDateString('en-US')}
                  </span>
                  <span>
                    Created on:{' '}
                    {new Date(rper.created_at).toLocaleDateString('en-US')}
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}

        <NewRperModal ref={modalRef} />
      </Main>
    </>
  )
}

export default RperList
