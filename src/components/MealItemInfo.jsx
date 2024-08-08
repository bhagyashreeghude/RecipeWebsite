import { NavLink } from "react-router-dom"

const MealItemInfo = ({detail}) => {
    console.log(detail)
    console.log(detail.idMeal)
  return (
    <div className="w-96 m-2 p-2 shadow-xl ">
        <img  src={detail?.strMealThumb} className="broder border-black rounded-lg shadow-lg"/>
        <p className="font-bold text-2xl">{detail?.strMeal}</p>
        <NavLink to={`/${detail?.idMeal}`}><button className="border border-yellow-500 bg-yellow-500 rounded-lg m-2.5 p-2">Recipe</button></NavLink>
        
    </div>
  )
}

export default MealItemInfo

