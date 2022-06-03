import { MdMenu } from 'react-icons/md'
import Header from '../../components/header'
import { Main, Menu, SubMenu } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Main>
      <Header />
      <h1>Title</h1>
      <Menu>
        <h2>
          <MdMenu /> Menu
        </h2>
        <span>Summary</span>
        <div>
          <SubMenu>Preparation</SubMenu>
          <section>
            <button>Team</button>
            <button>Secondary Data</button>
            <button>Contact Collectivity</button>
            <button>Interview Guide</button>
            <button>Focus Group Guide</button>
            <button>Themes Framework</button>
            <button>Tasks and Calendar</button>
          </section>
        </div>
        <div>
          <SubMenu>Fieldwork</SubMenu>
          <section>
            <button>Collectivity Registration</button>
            <button>Presentation</button>
            <button>Historical Mapping</button>
            <button>Transect Walk</button>
            <button>Venn Diagram</button>
            <button>Seasonal Calendar</button>
            <button>Daily Routines</button>
            <button>Input and Output</button>
            <button>Interview & Focus Group</button>
            <button>Reality and Obj. Matrix</button>
            <button>Election of Priorities</button>
          </section>
        </div>
        <div>
          <SubMenu>Finalization</SubMenu>
          <section>
            <button>Extra Information</button>
            <button>Final Considerations</button>
            <button>Acknoledgment</button>
            <button>Generate Final Report</button>
          </section>
        </div>
      </Menu>
    </Main>
  )
}

export default Dashboard
