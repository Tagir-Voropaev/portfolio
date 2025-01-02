import React from 'react'
import s from '../styles/Footer.module.scss'
const Footer = () => {
    return (
        <footer className={s.footer}>
            <p className={s.copyright}><span className={s.copyrightYear}>© 2023</span> Tagir Voropaev.</p>
            <p className={s.copyright}>Создано с помощью <span className={s.copyrightReact}>React</span> & <span className={s.copyrightNode}>Node</span></p>
        </footer>
    )
}

export default Footer