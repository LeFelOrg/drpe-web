import { useCallback, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import Header from '../../components/header'
import Summary from './summary'
import { Main, Menu, SubMenuTitle, SubMenuItems, Content } from './styles'

const Dashboard: React.FC = () => {
  const [togglePreparation, setTogglePreparation] = useState(false)
  const [toggleFieldwork, setToggleFieldwork] = useState(false)
  const [toggleFinalization, setToggleFinalization] = useState(false)

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
  }, [toggleFinalization])

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
            <SubMenuItems toggle={true}>
              <button>Summary</button>
            </SubMenuItems>
          </section>
          <section>
            <SubMenuTitle
              onClick={togglePreparationBtn}
              toggle={togglePreparation}
            >
              Preparation
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </SubMenuTitle>
            <SubMenuItems toggle={togglePreparation}>
              <button>Team</button>
              <button>Secondary Data</button>
              <button>Contact Collectivity</button>
              <button>Interview Guide</button>
              <button>Focus Group Guide</button>
              <button>Themes Framework</button>
              <button>Tasks and Calendar</button>
            </SubMenuItems>
          </section>
          <section>
            <SubMenuTitle onClick={toggleFieldworkBtn} toggle={toggleFieldwork}>
              Fieldwork
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </SubMenuTitle>
            <SubMenuItems toggle={toggleFieldwork}>
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
            </SubMenuItems>
          </section>
          <section>
            <SubMenuTitle
              onClick={toggleFinalizationBtn}
              toggle={toggleFinalization}
            >
              Finalization
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </SubMenuTitle>
            <SubMenuItems toggle={toggleFinalization}>
              <button>Extra Information</button>
              <button>Final Considerations</button>
              <button>Acknoledgment</button>
              <button>Generate Final Report</button>
            </SubMenuItems>
          </section>
        </Menu>
        <Content>
          <Summary />
        </Content>
      </Main>
    </>
  )
}

export default Dashboard
