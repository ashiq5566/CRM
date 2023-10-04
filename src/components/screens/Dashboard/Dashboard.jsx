import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../../../assets/images/course1.jpg'

function Dashboard() {
  return (
    <Header>
		<Image>
			<img src={ProfileImage} alt="profile image" />
		</Image>
    </Header>
  )
}

export default Dashboard

const Header = styled.div`
  	display: inline-flex;
	align-items: center;
	gap: 273px;
`;
const Image = styled.div`
  	display: flex;
	width: 95px;
	height: 95px;
	flex-direction: column;
	align-items: flex-end;
	border-radius: 50%;
	

	img{
		display: flex;
		align-items: flex-start;
		align-self: stretch;
		border-radius: 55%;

	}
`;