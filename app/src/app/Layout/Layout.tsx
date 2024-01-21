import { useContext } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { TodoCountContext } from "../../context/TodoCountContext";



export const Layout = () => {

    const context = useContext(TodoCountContext)
    const count = context?.countTodo;
 
    return (
        <>
                <header className='header'>
                    <nav className='nav'>
                        <ul className='nav__items'>
                            <li className='nav__item'><NavLink to="/">Главная</NavLink></li>
                            <li className='nav__item'><NavLink to="/post">Блог</NavLink></li>
                            <li className='nav__item'><NavLink to="/catalog">Каталог</NavLink></li>
                            <li className="nav__item"><NavLink to="/todo" >Журнал задач: <span>{count}</span> </NavLink></li>
                        </ul>
                    </nav>
                </header>
            <div className="content">
                <Outlet />
                <footer>footer</footer>
            </div>
        </>
    )
}