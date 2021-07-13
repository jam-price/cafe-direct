import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const COFFEES = [
  {
    id: "c1",
    name: "Monsoon Malabar",
    description:
      "Monsoon Malabar is one of India’s most sought-after coffees and is an all-time customer favourite here at Coffee Direct.",
    price: 10.99,
  },
  {
    id: "c2",
    name: "Golden Crema Coffee",
    description:
      "This is the crème de la crème of coffee blends, a robust, rich and bold coffee of the highest quality to spoil yourself with at any time of day.",
    price: 9.95,
  },
  {
    id: "c3",
    name: "Kenya Blue Mountain",
    description:
      "Our Kenya Blue Mountain is grown from seeds originally from Jamaica, which produce a coffee that has the natural sweetness of Blue Mountain Jamaica, but has also taken on the rich aromatic flavours and intensity that is typical of Kenyan coffee. ",
    price: 11.79,
  },
  {
    id: "c4",
    name: "Old Brown Java",
    description:
      "Ideal for espresso, our strong Old Brown Java beans are aged as green beans for at least two years before being roasted, giving the coffee a heavier body and a powerful flavour, but very little acidity.",
    price: 8.49,
  },
];

const AvailableMeals = () => {
  const coffeeList = COFFEES.map((coffee) => (
    <MealItem
      name={coffee.name}
      key={coffee.id}
      description={coffee.description}
      price={coffee.price}
    ></MealItem>
  ));

  return (
    <Card>
      <ul>{coffeeList}</ul>
    </Card>
  );
};

export default AvailableMeals;
