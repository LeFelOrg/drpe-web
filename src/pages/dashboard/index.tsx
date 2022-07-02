import { useCallback, useState } from 'react'
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
} from './styles'

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
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                Summary
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
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Team
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Secondary Data
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Contact Collectivity
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Interview Guide
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Focus Group Guide
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Themes Framework
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Tasks and Calendar
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
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Collectivity Registration
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Presentation
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Historical Mapping
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Transect Walk
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Venn Diagram
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Seasonal Calendar
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Daily Routines
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Input and Output
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Interview & Focus Group
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Reality and Obj. Matrix
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Election of Priorities
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
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Extra Information
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Final Considerations
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Acknoledgment
              </SectionsBtn>
              <SectionsBtn isSelected={false}>
                <RiExchangeFill />
                <StatusButton />
                Generate Final Report
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
