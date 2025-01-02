import s from '../styles/Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import myphotoImg from '../assets/images/myphoto.jpg'
const Header = () => {

    return (
        <header className={s.header}>
            <Link to='/'>
                <div className={s.logo}>
                    <img className={s.img} src={myphotoImg} alt="Тагир Воропаев frontend разработчик программист React" />
                </div>
            </Link>
            <div className={s.content}>
                <div className={s.me} >
                    <Link to='/'><h1 className={s.name}>Тагир Воропаев<span></span></h1></Link>
                    <p className={s.profession}>Frontend разработчик</p>
                </div>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <li >
                            <NavLink className={({ isActive }) => isActive ? s.itemActive : s.item} to='/'>Главная</NavLink>
                        </li>
                        <li >
                            <NavLink className={({ isActive }) => isActive ? s.itemActive : s.item} to='/projects'>Проекты</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? s.itemActive : s.item} to='/works'>Готовые работы</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? s.itemActive : s.item} to='/contacts'>Контакты</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header