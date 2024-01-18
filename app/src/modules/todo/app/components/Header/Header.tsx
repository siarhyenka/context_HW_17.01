import { useContext } from 'react'
import './Header.css'
import { TodoCountContext } from '../../../../../context/TodoCountContext'

export const Header = () => {
    const context = useContext(TodoCountContext)
    const count = context?.countTodo;
    const loading = context?.isLoading;

    console.log(context);
    
    return <header className="header__todo">
        {!loading && <h2>Task in progress: {count}</h2>}
    </header>
}