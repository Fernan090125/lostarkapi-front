import type { NextPage } from 'next'
import Navbar from '../Components/navbar/navbar'
import HomePage from './Home'
const Home: NextPage = () => {
  return (
    <>
      <div className='pagesContainer'>
      <HomePage/>
      </div>
      
    </>
  )
}

export default Home
