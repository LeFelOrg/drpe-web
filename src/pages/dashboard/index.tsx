import { useCallback, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import Header from '../../components/header'
import { Main, Menu, SubMenu, Content } from './styles'

const Dashboard: React.FC = () => {
  const [togglePreparation, setTogglePreparation] = useState(true)
  const [toggleFieldwork, setToggleFieldwork] = useState(true)
  const [toggleFinalization, setToggleFinalization] = useState(true)

  const togglePreparationBtn = useCallback(() => {
    togglePreparation ? setTogglePreparation(false) : setTogglePreparation(true)
  }, [togglePreparation])

  const toggleFieldworkBtn = useCallback(() => {
    toggleFieldwork ? setToggleFieldwork(false) : setToggleFieldwork(true)
  }, [toggleFieldwork])

  const toggleFinalizationBtn = useCallback(() => {
    toggleFinalization
      ? setToggleFinalization(false)
      : setToggleFinalization(true)
  }, [setToggleFinalization])

  return (
    <>
      <Header />
      <Main>
        <h1>Title</h1>
        <Menu>
          <h2>
            <MdMenu /> Menu
          </h2>
          <section>
            <div>
              <button>Summary</button>
            </div>
          </section>
          <section>
            <SubMenu onClick={togglePreparationBtn} toggle={togglePreparation}>
              Preparation
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </SubMenu>
            <div>
              <button>Team</button>
              <button>Secondary Data</button>
              <button>Contact Collectivity</button>
              <button>Interview Guide</button>
              <button>Focus Group Guide</button>
              <button>Themes Framework</button>
              <button>Tasks and Calendar</button>
            </div>
          </section>
          <section>
            <SubMenu onClick={toggleFieldworkBtn} toggle={toggleFieldwork}>
              Fieldwork
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </SubMenu>
            <div>
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
            </div>
          </section>
          <section>
            <SubMenu
              onClick={toggleFinalizationBtn}
              toggle={toggleFinalization}
            >
              Finalization
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </SubMenu>
            <div>
              <button>Extra Information</button>
              <button>Final Considerations</button>
              <button>Acknoledgment</button>
              <button>Generate Final Report</button>
            </div>
          </section>
        </Menu>
        <Content></Content>
      </Main>
    </>
  )
}

export default Dashboard
