import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();
  console.log(mealid);
  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const json = await data.json();
    console.log(json?.meals);
    setInfo(json?.meals[0]);
  };
  //   if (mealid != " ") {
  //     getInfo();
  //   }
  return (
    <div className="grid grid-cols-3 h-full w-full my-20 bg-yellow-500">
      <img src={info?.strMealThumb} className="w-96 rounded-lg"></img>
      <div className="col-span-2">
        <h1 className="text-4xl">Recipe Detail</h1>
        

        <h3 className=" p-4">{info?.strIngredient1}, {info?.strIngredient2}, {info?.strIngredient3}, {info?.strIngredient4}, {info?.strIngredient5}, {info?.strIngredient6}, {info?.strIngredient7}</h3>
        <button></button>
        <h3 className="text-2xl">Instruction's</h3>
        <br></br>
        <p>{info?.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealInfo;
