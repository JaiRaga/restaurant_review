import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantDetail from './pages/RestaurantDetail'
import RestaurantUpdate from './pages/RestaurantUpdate'

import './App.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/restaurants/:id' element={<RestaurantDetail />} />
				<Route path='/restaurants/:id/update' element={<RestaurantUpdate />} />
			</Routes>
		</Router>
	)
}

export default App
