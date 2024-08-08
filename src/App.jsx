
import './App.css'
import {Route, Routes} from "react-router-dom"
import MainPage from './components/MainPage'
import Meal from './components/MealItemInfo'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/:mealid' element={<MealInfo/>}/>

     
    </Routes>
      
       
    </>
  )
}

export default App
