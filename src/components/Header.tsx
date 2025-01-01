import React, { useState } from 'react'
import s from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    const [page, setPage] = useState('home')

    return (
        <header className={s.header}>
            <Link to='/'>
                <div className={s.logo}>
                    <img className={s.img} src='../../public/images/myphoto.jpg' alt="" />
                </div>
            </Link>
            <div className={s.content}>
                <div className={s.me} >
                    <Link to='/'><h1 className={s.name}>Тагир Воропаев<span></span></h1></Link>
                    <p className={s.profession}>Frontend developer</p>
                </div>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <li >
                            <NavLink className={({ isActive }) => isActive ? s.itemActive : s.item} to='/projects'>Проекты</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? s.itemActive : s.item} to='/works'>
                                Готовые работы
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? s.itemActive : s.item} to='/notes'>
                                Заметки
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? s.itemActive : s.item} to='/contacts'>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header