import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        id: 1,
        name: 'Pizza Margherita',
        description: 'Italian Pizza',
        price: 22.99
    },
    {
        id: 2,
        name: 'New York Pizza',
        description: 'New Yorker Pizza',
        price: 21.99
    },
    {
        id: 3,
        name: 'Pepperoni Pizza',
        description: 'Pizza',
        price: 12.99
    },
    {
        id: 4,
        name: 'Detroit Style Pizza',
        description: 'American Pizza',
        price: 16.99
    },
    {
        id: 5,
        name: 'Pizza Ortolana',
        description: 'Italian Pizza',
        price: 22.99
    },
]

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => {
        return(
            <MealItem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />    
        )
    })

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
