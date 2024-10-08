import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import {Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, Tickets} from './pages';
import './App.css'

function App() {
  return (
    <div className='containers flex justify-between'>
			<Sidebar/>
			<div className='w-[80%] h-[100vh] py-[36px] px-[30px] overflow-y-auto'>
				<Header/>
				<Routes>
					<Route path='/' element={<Overview/>}/>
					<Route path='/tickets' element={<Tickets/>}/>
					<Route path='/ideas' element={<Ideas/>}/>
					<Route path='/contacts' element={<Contacts/>}/>
					<Route path='/agents' element={<Agents/>}/>
					<Route path='/articles' element={<Articles/>}/>
					<Route path='/settings' element={<Settings/>}/>
					<Route path='/subscription' element={<Subscription/>}/>
				</Routes>
			</div>
    </div>
  )
}

export default App
