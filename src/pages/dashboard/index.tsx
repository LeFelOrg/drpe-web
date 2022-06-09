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
              <button>
                <RiExchangeFill />
                <StatusButton />
                Team
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Secondary Data
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Contact Collectivity
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Interview Guide
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Focus Group Guide
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Themes Framework
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
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
                <StatusButton />
                Collectivity Registration
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Presentation
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Historical Mapping
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Transect Walk
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Venn Diagram
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Seasonal Calendar
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Daily Routines
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Input and Output
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Interview & Focus Group
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Reality and Obj. Matrix
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
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
                <StatusButton />
                Extra Information
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Final Considerations
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
                Acknoledgment
              </button>
              <button>
                <RiExchangeFill />
                <StatusButton />
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
