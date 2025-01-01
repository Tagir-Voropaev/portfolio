import React from 'react'
import s from './ReposSection.module.scss'
import { Link } from 'react-router-dom'
const ReposSection = () => {
    return (
        <section className={s.repos}>
            <h2 className={s.title}>Код</h2>
            <ul className={s.reposList}>
                <li>
                    <Link className={s.reposItem} to='https://github.com/Tagir-Voropaev/todo-app' target="_blank">
                        <div className={s.reposInfo}>
                            <div className={s.reposTitle}>
                                <div className={s.reposLogo}>
                                    <img className={s.reposLogoImg} src="../../public/images/githublogo.jpeg" alt="Тагир Воропаев github портфолио" />
                                </div>
                                <p className={s.reposName}>Tagir-Voropaev <span className={s.reposNameHighlight}>/</span> todo-app</p>
                            </div>
                            <p className={s.reposDescription}>Приложение-помощник для работы CRM менеджера/рассылки.</p>
                            <p className={s.reposLink}>View Repo <i className="fa-solid fa-chevron-right"></i></p>
                        </div>
                        <ul className={s.reposSkills}>
                            <li className={s.reposSkill}>
                                <span className={`${s.reposSkillHighlight} ${s.reposSkillJavascript}`}></span>
                                <p className={s.reposSkillName}>Javascript</p>
                            </li>
                            <li className={s.reposSkill}>
                                <span className={`${s.reposSkillHighlight} ${s.reposSkillCSS}`}></span>
                                <p className={s.reposSkillName}>CSS</p>
                            </li>
                            <li className={s.reposSkill}>
                                <span className={`${s.reposSkillHighlight} ${s.reposSkillHTML}`}></span>
                                <p className={s.reposSkillName}>HTML</p>
                            </li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link className={s.reposItem} to='https://github.com/Tagir-Voropaev/music-app' target="_blank">
                        <div className={s.reposInfo}>
                            <div className={s.reposTitle}>
                                <div className={s.reposLogo}>
                                    <img className={s.reposLogoImg} src="../../public/images/githublogo.jpeg" alt="Тагир Воропаев github портфолио" />
                                </div>
                                <p className={s.reposName}>Tagir-Voropaev <span className={s.reposNameHighlight}>/</span> music-app</p>
                            </div>
                            <p className={s.reposDescription}>Аналог Spotify. Next/Nest FullStack приложение.</p>
                            <p className={s.reposLink}>View Repo <i className="fa-solid fa-chevron-right"></i></p>
                        </div>
                        <ul className={s.reposSkills}>
                            <li className={s.reposSkill}><span className={`${s.reposSkillHighlight} ${s.reposSkillTypeScript}`}></span><p className={s.reposSkillName}>TypeScript</p></li>
                            <li className={s.reposSkill}><span className={`${s.reposSkillHighlight} ${s.reposSkillSCSS}`}></span><p className={s.reposSkillName}>SCSS</p></li>
                            <li className={s.reposSkill}><span className={`${s.reposSkillHighlight} ${s.reposSkillJavascript}`}></span><p className={s.reposSkillName}>JavaScript</p></li>
                        </ul>
                    </Link>
                </li>
                <li>
                    <Link className={s.reposItem} to='https://github.com/Tagir-Voropaev/laslesvpn' target="_blank">
                    <div className={s.reposInfo}>
                        <div className={s.reposTitle}>
                            <div className={s.reposLogo}>
                                <img className={s.reposLogoImg} src="../../public/images/githublogo.jpeg" alt="Тагир Воропаев github портфолио" />
                            </div>
                            <p className={s.reposName}>Tagir-Voropaev <span className={s.reposNameHighlight}>/</span> laslesvpn</p>
                        </div>
                        <p className={s.reposDescription}>Next JS адаптивная вёрстка.</p>
                        <p className={s.reposLink}>View Repo <i className="fa-solid fa-chevron-right"></i></p>
                    </div>
                    <ul className={s.reposSkills}>
                        <li className={s.reposSkill}><span className={`${s.reposSkillHighlight} ${s.reposSkillTypeScript}`}></span><p className={s.reposSkillName}>TypeScript</p></li>
                        <li className={s.reposSkill}><span className={`${s.reposSkillHighlight} ${s.reposSkillSCSS}`}></span><p className={s.reposSkillName}>SCSS</p></li>
                        <li className={s.reposSkill}><span className={`${s.reposSkillHighlight} ${s.reposSkillJavascript}`}></span><p className={s.reposSkillName}>JavaScript</p></li>
                    </ul>
                    </Link>
                </li>

            </ul>
        </section>
    )
}

export default ReposSection