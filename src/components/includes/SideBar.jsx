import React from 'react'
import styled from 'styled-components';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';

function SideBar() {
  return (
    <SidebarContainer>
    <SidebarTitle>
      <SidebarBrand>
        <BsCart3 className='icon_header' /> SHOP
      </SidebarBrand>
      <CloseIcon className='icon close_icon'>
        X
      </CloseIcon>
    </SidebarTitle>
    <SidebarList>
      <SidebarListItem>
        <SidebarLink href="#">
          <BsGrid1X2Fill className='icon' /> Dashboard
        </SidebarLink>
      </SidebarListItem>
      <SidebarListItem>
        <SidebarLink href="#">
          <BsFillArchiveFill className='icon' /> Products
        </SidebarLink>
      </SidebarListItem>
      <SidebarListItem>
        <SidebarLink href="#">
          <BsFillGrid3X3GapFill className='icon' /> Categories
        </SidebarLink>
      </SidebarListItem>
      <SidebarListItem>
        <SidebarLink href="#">
          <BsPeopleFill className='icon' /> Customers
        </SidebarLink>
      </SidebarListItem>
      <SidebarListItem>
        <SidebarLink href="#">
          <BsListCheck className='icon' /> Inventory
        </SidebarLink>
      </SidebarListItem>
      <SidebarListItem>
        <SidebarLink href="#">
          <BsMenuButtonWideFill className='icon' /> Reports
        </SidebarLink>
      </SidebarListItem>
      <SidebarListItem>
        <SidebarLink href="#">
          <BsFillGearFill className='icon' /> Setting
        </SidebarLink>
      </SidebarListItem>
    </SidebarList>
  </SidebarContainer>
  )
}

export default SideBar



const SidebarContainer = styled.aside`
  grid-area: sidebar;
  height: 100vh;
  background-color: #263043;
  overflow-y: auto;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  width: 250px;
  margin: 15px 0px 0px 30px;
`;

const SidebarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 0px 30px;
  margin-bottom: 30px;
`;

const SidebarBrand = styled.div`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;

  .icon_header {
    margin-right: 10px;
  }
`;

const CloseIcon = styled.span`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const SidebarList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const SidebarListItem = styled.li`
  padding: 20px 20px 20px 20px;
  font-size: 18px;
  color: white;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: #9e9ea4;
`;
