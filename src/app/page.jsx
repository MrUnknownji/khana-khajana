"use client";
import { useEffect, useState } from "react";
import CategoryItemCard from "./Components/CategoryItemCard";
import FoodItem from "./Components/FoodItem/FoodItem";
import SearchBar from "./Components/SearchBar/SearchBar";
import SpecialOfferCard from "./Components/SpecialOffers/SpecialOfferCard";
import { specialoffersdata } from "./data/Data";
export default function Home() {
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Beef");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const result = await response.json();
        setCategories(result.categories);
      } catch (error) {
        console.log("Error is: ", error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getFoods = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
        );
        const result = await response.json();
        console.log(result.meals);
        setFoods(result.meals);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    getFoods();
  }, [activeCategory]);

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
  };
  return (
    <div className="px-12 gap-8 flex flex-col">
      <SearchBar />

      <div className="Category">
        <h3 className="text-2xl">Category</h3>
        <div className="flex items-center py-4">
          <span class="material-symbols-rounded cursor-pointer absolute left-12 rounded-full hover:bg-gray-500/50 hover:shadow-sm shadow-black/25 duration-300 transition-all hover:scale-125">
            chevron_left
          </span>
          <div className="flex items-center py-4 px-8 overflow-y-hidden overflow-x-auto gap-8 scrollbar-custom">
            {categories.map((value, index) => (
              <CategoryItemCard
                key={index}
                title={value.strCategory}
                thumbnail={value.strCategoryThumb}
                handleClick={()=>handleCategoryClick(value.strCategory)}
                active = {activeCategory == value.strCategory ? true : false}
              />
            ))}
          </div>
          <span class="material-symbols-rounded cursor-pointer absolute right-12 rounded-full hover:bg-gray-500/50 hover:shadow-sm shadow-black/25 duration-300 transition-all hover:scale-125">
            chevron_right
          </span>
        </div>
      </div>

      <div className="special_offers_container scrollbar-custom snap-mandatory snap-x my-4 py-4 grid grid-flow-col overflow-y-hidden overflow-x-auto gap-4">
        {specialoffersdata.map((value, index) => (
          <SpecialOfferCard
            key={index}
            offer={value.offer}
            description={value.description}
          />
        ))}
      </div>

      <div className="Food_Items">
        <h3 className="text-2xl text-center my-8">{activeCategory}</h3>
        <div
          className="w-full mb-12 grid"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {foods.map((value, index) => (
            <FoodItem key={index} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}
