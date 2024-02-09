import classes from "./meal-item.module.css"
import MealItem from "./meal-item"

export default function MealsGrid({ meals }) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => {
                return <MealItem key={meal.id} {...meal} />
            })
            }
        </ul>
    )
}