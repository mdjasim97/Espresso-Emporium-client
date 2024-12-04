
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard'
import { useState } from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'


function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='lg:mx-24'>
      <Navbar/>
      <Banner/>
      <h1 className='font-["rancho"] text-center text-3xl lg:text-6xl p-5'>Coffe store Project : {loadedCoffees.length}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 lg:my-14'>
        {
          loadedCoffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
