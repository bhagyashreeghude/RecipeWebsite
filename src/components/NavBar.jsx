import { useEffect, useState } from "react";
import MealInfoItem from "./MealItemInfo"

const NavBar = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(data)
  useEffect(() => {
    getMealCards();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const getMealCards = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const json = await get.json();
    console.log(json);
    setData(json.meals || []);
  };
  return (
    <>
      <h1 className="text-4xl font-bold">FOOD RECIPE APP</h1>
      <div className="flex-row m-2 p-2 space-x-3">
        <input
          onChange={handleInput}
          className="border border-black m-2 p-2 rounded-lg w-1/3 text-center"
          placeholder="Search Meals"
        ></input>
        <button
          onClick={() => {
            getMealCards();
          }}
          className="border border-yellow-600 text-white bg-yellow-600 m-2 p-2 rounded-lg"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
     {data.map((item)=>(
      <MealInfoItem key={item.idMeal} detail={item}/>
     ))}

      </div>
      
    
    </>
  );
};

export default NavBar;
