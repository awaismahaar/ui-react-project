import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'
import RightSideBar from './components/RightSideBar'
import { SideBar } from './components/SideBar'
import { data, data2 } from './Data'

function App() {
  return (
    <>
    <Navbar/>
    <div className='main-container'>
    <div className='left-sidebar'>
    <SideBar/>
    </div>
    <div className='main'>
    {data.map(item => <Main key={item.id} item={item}/>)}
    </div>
    <div className='right-sidebar bg-gray-900'>
    {data2.map(data => <RightSideBar key={data.id} data={data}/>)}
    </div>
    </div>
    </>
  )
}

export default App
