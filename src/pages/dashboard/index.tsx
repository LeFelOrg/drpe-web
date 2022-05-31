import { FiPower, FiSearch, FiChevronDown } from 'react-icons/fi'
import { useAuth } from '../../contexts/auth-context'
import SmLogo from '../../assets/small-logo.svg'
import Button from '../../components/button'
import {
  Card,
  Container,
  Header,
  HeaderContent,
  InputContainer,
  Main,
  SortBtn,
} from './styles'
import ProfileInfo from '../../components/profile-info'

const Dashboard: React.FC = () => {
  const { logOut } = useAuth()

  return (
    <Container>
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
        <Button>+ Add New RPER</Button>
        <SortBtn>
          Sort By
          <FiChevronDown />
        </SortBtn>
        <InputContainer>
          <FiSearch />
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </InputContainer>
        <Card>
          <div>
            <img src="" alt="" />
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
            </div>
          </div>
        </Card>
      </Main>
    </Container>
  )
}

export default Dashboard
