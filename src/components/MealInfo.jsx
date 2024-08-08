
import { useParams } from 'react-router-dom'

const MealInfo = () => {
    const {mealid} = useParams()
    console.log(mealid)

    const getInfo = async()=>{
        const data =await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const json =await data.json()
        console.log(json)
    }
    if(mealid  != " "){
        getInfo()
    }
  return (
    <div>MealInfo</div>
  )
}

export default MealInfo