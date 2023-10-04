import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../../../assets/images/course1.jpg'

function Header() {
  return (
    <Container>
		<Left>
			<Image>
				<img src={ProfileImage} alt="profile image" />
			</Image>
			<About>
				<Greeting>
					<Welcome>Welcome Back,</Welcome>
					<Name>Sophia Chester</Name>
				</Greeting>	
				<Bottom>
					<Description>
						Here are your monthly store updates.
					</Description>
				</Bottom>
			</About>
		</Left>
		<Right>

		</Right>
    </Container>
  )
}

export default Header

const Container = styled.div`
  	display: inline-flex;
	align-items: center;
	gap: 273px;
`;
const Image = styled.div`
  	display: flex;
	flex-direction: column;
	align-items: flex-end;
	border-radius: 50%;
	

	img{
		display: flex;
		align-items: flex-start;
		align-self: stretch;
		border-radius: 55%;
		height: 90px;
    	width: 90px

	}
`;
const Left = styled.div`
	display: flex;
    align-items: center;
    gap: 28px;
`;
const Right = styled.div`
`;
const About = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
`;

const Bottom = styled.p`
	margin: 0;
	width: 304px;
	height: 26px;

`;
const Greeting = styled.p`
	display: flex;
    align-items: center;
	width: 364px;
	height: 26px;
	margin: 0;
`;
const Welcome = styled.p`
	color: #212529;
    font-size: 24px;
    font-family: 'albertsansbold';
    text-transform: capitalize;
	margin: 0;
`;
const Name = styled.h5`
	color: #9A55FF;
    font-size: 24px;
    font-family: 'albertsansbold';
    text-transform: capitalize;
`;
const Description = styled.p`
	color: #6C757D;
    font-size: 15px;
    font-family: 'barlowsemibold';
	
`;