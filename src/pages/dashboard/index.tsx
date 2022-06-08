import { useCallback, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { RiExchangeFill } from 'react-icons/ri'
import Header from '../../components/header'
import StatusButton from '../../components/status-button'
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
            <SubMenuItems>
              <button>
                <RiExchangeFill />
                Summary
              </button>
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
              <StatusButton />
              <button>
                <RiExchangeFill />
                Team
              </button>
              <button>
                <RiExchangeFill />
                Secondary Data
              </button>
              <button>
                <RiExchangeFill />
                Contact Collectivity
              </button>
              <button>
                <RiExchangeFill />
                Interview Guide
              </button>
              <button>
                <RiExchangeFill />
                Focus Group Guide
              </button>
              <button>
                <RiExchangeFill />
                Themes Framework
              </button>
              <button>
                <RiExchangeFill />
                Tasks and Calendar
              </button>
            </SubMenuItems>
          </section>
          <section>
            <SubMenuTitle onClick={toggleFieldworkBtn} toggle={toggleFieldwork}>
              Fieldwork
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </SubMenuTitle>
            <SubMenuItems toggle={toggleFieldwork}>
              <button>
                <RiExchangeFill />
                Collectivity Registration
              </button>
              <button>
                <RiExchangeFill />
                Presentation
              </button>
              <button>
                <RiExchangeFill />
                Historical Mapping
              </button>
              <button>
                <RiExchangeFill />
                Transect Walk
              </button>
              <button>
                <RiExchangeFill />
                Venn Diagram
              </button>
              <button>
                <RiExchangeFill />
                Seasonal Calendar
              </button>
              <button>
                <RiExchangeFill />
                Daily Routines
              </button>
              <button>
                <RiExchangeFill />
                Input and Output
              </button>
              <button>
                <RiExchangeFill />
                Interview & Focus Group
              </button>
              <button>
                <RiExchangeFill />
                Reality and Obj. Matrix
              </button>
              <button>
                <RiExchangeFill />
                Election of Priorities
              </button>
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
              <button>
                <RiExchangeFill />
                Extra Information
              </button>
              <button>
                <RiExchangeFill />
                Final Considerations
              </button>
              <button>
                <RiExchangeFill />
                Acknoledgment
              </button>
              <button>
                <RiExchangeFill />
                Generate Final Report
              </button>
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
