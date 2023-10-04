import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import 'aos/dist/aos.css';
import AOS from "aos"

import DashboardRouter from './components/routers/router/DashboardRouter'
import PrivateRoute from './components/routers/routes/PrivateRoute'
import SignIn from './components/screens/auth/SignIn'


function App() {

	useEffect(() => {
		AOS.init({
			delay: 1000,
		})
	}, [])

	return (
		<>
			<Routes>
				<Route path="/sign-in" element={<SignIn type="signin" />} />
				<Route path="/*" element={(
					<PrivateRoute>
						<DashboardRouter />
					</PrivateRoute>
				)} />
			</Routes>
		</>
	)
}

export default App

