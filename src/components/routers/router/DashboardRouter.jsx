import { useState } from 'react'
import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import Dashboard from '../../screens/Dashboard/Dashboard'
import SideBar from '../../includes/SideBar'


const DashboardRouter = () => {
	return (
		<Wrapper>
			<Container>
				<SideBar />
				<Screen>
					<Dashboard />
				</Screen>
			</Container>
		</Wrapper>
	)
}

export default DashboardRouter

const Wrapper = styled.section`
	
`
const Container = styled.div`
	display: flex;
`
const Screen = styled.div`
	padding: 20px;
	width: calc(100vw - 250px);
	height: calc(100vh - 98px);
	overflow-y: scroll;
	overflow-x: hidden;
`