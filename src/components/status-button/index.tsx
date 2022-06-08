import { useCallback, useState } from 'react'
import {
  MdPanoramaFishEye,
  MdErrorOutline,
  MdLens,
  MdCancel,
} from 'react-icons/md'
import { Container, StatusList } from './styles'

const StatusButton: React.FC = () => {
  const [toggleStatus, setToggleStatus] = useState(false)

  const toggleStatusBtn = useCallback(() => {
    toggleStatus ? setToggleStatus(false) : setToggleStatus(true)
  }, [toggleStatus])

  console.log(toggleStatus)

  return (
    <Container toggle={toggleStatus} onClick={toggleStatusBtn}>
      <MdPanoramaFishEye />
      {/* <MdErrorOutline />
      <MdLens />
      <MdCancel /> */}

      <StatusList toggle={toggleStatus}>
        <li>
          <MdErrorOutline />
          In Progress
        </li>
        <li>
          <MdLens />
          Completed
        </li>
        <li>
          <MdCancel />
          Not Applicable
        </li>
        <li>
          <MdPanoramaFishEye />
          Unstarted
        </li>
      </StatusList>
    </Container>
  )
}

export default StatusButton
