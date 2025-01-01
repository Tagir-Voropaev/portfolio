import React from 'react'
import s from './AboutSection.module.scss'
import { Link } from 'react-router-dom'
const AboutSection = () => {
    return (
        <section className={s.about}>
            <div className={s.profession}>
                <img className={s.professionLogo} src="../../public/images/hacker.png" alt="программист" />
                <h2 className={s.professionName}>Frontend разработчик</h2>
            </div>
            <div className={s.description}>
                <h3>Я создаю веб-сайты и приложения с помощью <span className={s.descriptionNode}>Node</span> & <span className={s.descriptionReact}>React</span> .</h3>
                <h4>Я из Казани, Россия, и в настоящее время занимаюсь личными проектами.</h4>
                <p>Найдите меня в <Link className={s.link} to="https://t.me/tagirvorop" target="_blank">Telegram</Link> и <Link className={s.link} to="https://github.com/Tagir-Voropaev" target="_blank">GitHub</Link> .</p>
            </div>
        </section>
    )
}

export default AboutSection