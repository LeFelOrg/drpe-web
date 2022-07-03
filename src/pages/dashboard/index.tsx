import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import { RiExchangeFill } from 'react-icons/ri'
import Header from '../../components/header'
import StatusButton from '../../components/status-button'
import {
  Main,
  Menu,
  SubMenuTitle,
  SubMenuItems,
  Content,
  SectionsBtn,
  LinkBtn,
  IconBtn,
} from './styles'

const Dashboard: React.FC = () => {
  const [togglePreparation, setTogglePreparation] = useState(false)
  const [toggleFieldwork, setToggleFieldwork] = useState(false)
  const [toggleFinalization, setToggleFinalization] = useState(false)
  const [selectedButton, setSelectedButton] = useState('Summary')

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

  const diselectOtherButtons = useCallback(
    (currentButton: string) => {
      if (selectedButton !== currentButton) {
        setSelectedButton(currentButton)
      }
    },
    [selectedButton],
  )

  const handleClick = useCallback(
    (button: string) => {
      diselectOtherButtons(button)
    },
    [selectedButton],
  )

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
              <SectionsBtn isSelected={selectedButton === 'Summary'}>
                <IconBtn>
                  <IconBtn>
                    <RiExchangeFill />
                  </IconBtn>
                </IconBtn>
                <LinkBtn onClick={() => handleClick('Summary')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Summary
                  </Link>
                </LinkBtn>
              </SectionsBtn>
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
              <SectionsBtn isSelected={selectedButton === 'Team'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Team')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Team
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Secondary Data'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Secondary Data')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Secondary Data
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn
                isSelected={selectedButton === 'Contact Collectivity'}
              >
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Contact Collectivity')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Contact Collectivity
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Interview Guide'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Interview Guide')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Interview Guide
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Focus Group Guide'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Focus Group Guide')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Focus Group Guide
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Themes Framework'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Themes Framework')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Themes Framework
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Tasks and Calendar'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Tasks and Calendar')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Tasks and Calendar
                  </Link>
                </LinkBtn>
              </SectionsBtn>
            </SubMenuItems>
          </section>
          <section>
            <SubMenuTitle onClick={toggleFieldworkBtn} toggle={toggleFieldwork}>
              Fieldwork
              <IoMdArrowDropup />
              <IoMdArrowDropdown />
            </SubMenuTitle>
            <SubMenuItems toggle={toggleFieldwork}>
              <SectionsBtn
                isSelected={selectedButton === 'Collectivity Registration'}
              >
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn
                  onClick={() => handleClick('Collectivity Registration')}
                >
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Collectivity Registration
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Presentation'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Presentation')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Presentation
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Historical Mapping'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Historical Mapping')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Historical Mapping
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Transect Walk'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Transect Walk')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Transect Walk
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Venn Diagram'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Venn Diagram')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Venn Diagram
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Seasonal Calendar'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Seasonal Calendar')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Seasonal Calendar
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Daily Routines'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Daily Routines')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Daily Routines
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Input and Output'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Input and Output')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Input and Output
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn
                isSelected={selectedButton === 'Interview & Focus Group'}
              >
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Interview & Focus Group')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Interview & Focus Group
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn
                isSelected={selectedButton === 'Reality and Obj. Matrix'}
              >
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Reality and Obj. Matrix')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Reality and Obj. Matrix
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn
                isSelected={selectedButton === 'Election of Priorities'}
              >
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Election of Priorities')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Election of Priorities
                  </Link>
                </LinkBtn>
              </SectionsBtn>
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
              <SectionsBtn isSelected={selectedButton === 'Extra Information'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Extra Information')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Extra Information
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn
                isSelected={selectedButton === 'Final Considerations'}
              >
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Final Considerations')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Final Considerations
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn isSelected={selectedButton === 'Acknoledgment'}>
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Acknoledgment')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Acknoledgment
                  </Link>
                </LinkBtn>
              </SectionsBtn>
              <SectionsBtn
                isSelected={selectedButton === 'Generate Final Report'}
              >
                <IconBtn>
                  <RiExchangeFill />
                </IconBtn>
                <StatusButton />
                <LinkBtn onClick={() => handleClick('Generate Final Report')}>
                  <Link to="/dashboard/c7b5c09b-a51d-4ad4-83a3-542e378629ad">
                    Generate Final Report
                  </Link>
                </LinkBtn>
              </SectionsBtn>
            </SubMenuItems>
          </section>
        </Menu>
        <Content>
          <Outlet />
        </Content>
      </Main>
    </>
  )
}

export default Dashboard
