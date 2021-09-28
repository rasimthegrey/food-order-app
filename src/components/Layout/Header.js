import { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton'

import classes from './Header.module.css'
import pizzaHeader from '../../assets/pizza-header.jpg'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header} >
                <h1>Pizza App</h1>
                <HeaderCartButton />
            </header>

            <div className={classes['main-image']}>
                <img src={pizzaHeader} alt='pizza' />
            </div>
        </Fragment>
    )
}

export default Header