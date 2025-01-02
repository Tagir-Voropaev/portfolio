import { useState } from 'react'
import s from '../../../styles/Projects/Projects.module.scss'
import todo_1 from '../../../assets/images/todoapp.png'
import todo_2 from '../../../assets/images/todoapp-2.png'
import todo_3 from '../../../assets/images/todoapp-3.png'
import music from '../../../assets/images/music.png'
import { Link } from 'react-router-dom'
const Projects = () => {
    const [carousel1, setCarousel1] = useState(0)
    const carouselHandler1 = (item: boolean) => {
        if (item === true) {
            if (carousel1 === 2) {
                setCarousel1(2)
            } else {
                setCarousel1(carousel1 + 1)
            }
        } else {
            if (carousel1 === 0) {
                setCarousel1(0)
            } else {
                setCarousel1(carousel1 - 1)
            }
        }
    }
 
    return (
        <>
            <div className={s.topic}>
                <h2 className={s.title}>Проекты</h2>
                <h3 className={s.description}>Здесь находятся проекты, над которыми я работаю.</h3>
            </div>
            <ul className={s.projects}>
                <li className={`${s.project}`}>
                    <div className={s.projectPreview}>
                        <Link to='/projects/todo-code' className={`${s.projectPreviewList} 
                        ${carousel1 === 0 && s.projectPreviewList1}
                        ${carousel1 === 1 && s.projectPreviewList2}
                        ${carousel1 === 2 && s.projectPreviewList3}
                        `}>
                            <div className={s.projectPreviewItem}>
                                <img className={s.projectPreviewImg} src={todo_1} alt="" />
                            </div>
                            <div className={s.projectPreviewItem}>
                                <img className={s.projectPreviewImg} src={todo_2} alt="" />
                            </div>
                            <div className={s.projectPreviewItem}>
                                <img className={s.projectPreviewImg} src={todo_3} alt="" />
                            </div>
                        </Link>
                        <div className={s.previewButtons}>
                            <button onClick={() => carouselHandler1(false)} className={`${s.previewButton} ${carousel1 === 0 && s.previewButtonDisabled}`}><i className={`fa-solid fa-angle-left ${s.previewButtonIcon} `}></i></button>
                            <div className={s.previewDots}>
                                <span className={`${s.previewDot} ${carousel1 === 0 && s.previewDotActive}`}></span>
                                <span className={`${s.previewDot} ${carousel1 === 1 && s.previewDotActive}`}></span>
                                <span className={`${s.previewDot} ${carousel1 === 2 && s.previewDotActive}`}></span>
                            </div>
                            <button onClick={() => carouselHandler1(true)} className={`${s.previewButton} ${carousel1 === 2 && s.previewButtonDisabled}`} disabled={carousel1 === 2 && true}><i className={`fa-solid fa-angle-right ${s.previewButtonIcon} `}></i></button>
                        </div>
                    </div>
                    <div className={s.projectInfo}>
                        <Link to='/projects/todo-code' className={s.projectName}>ToDo</Link>
                        <p className={s.projectDescription}>Приложение-помощник для работы CRM менеджера/рассылки.</p>
                        <ul className={s.projectSkills}>
                            <li className={s.projectSkill}>
                                <i className={`fa-regular fa-circle-check ${s.projectSkillIcon}`}></i>
                                <p className={s.projectSkillName}>React & Redux</p>
                            </li>
                            <li className={s.projectSkill}>
                                <i className={`fa-regular fa-circle-check ${s.projectSkillIcon}`}></i>
                                <p className={s.projectSkillName}>Node JS</p>
                            </li>
                            <li className={s.projectSkill}>
                                <i className={`fa-regular fa-circle-check ${s.projectSkillIcon}`}></i>
                                <p className={s.projectSkillName}>Sequelize ORM</p>
                            </li>
                            <li className={s.projectSkill}>
                                <i className={`fa-regular fa-circle-check ${s.projectSkillIcon}`}></i>
                                <p className={s.projectSkillName}>Express JS</p>
                            </li>
                        </ul>
                        <Link to='/projects/todo-code' className={s.projectButton}>Подробнее</Link>
                    </div>
                </li>
                <li className={`${s.project} ${s.projectReverse}`}>
                    <div className={s.projectPreview}>
                        <Link to='/projects/2' className={`${s.projectPreviewList} 
                        ${s.projectPreviewList1}
                        `}>
                            <div className={s.projectPreviewItem}>
                                <img className={s.projectPreviewImg} src={music} alt="" />
                            </div>
                        </Link>
                        <div className={s.previewButtons}>
                            <button className={`${s.previewButton} ${s.previewButtonDisabled}`}><i className={`fa-solid fa-angle-left ${s.previewButtonIcon} `}></i></button>
                            <div className={s.previewDots}>
                                <span className={`${s.previewDot} ${s.previewDotActive}`}></span>
                            </div>
                            <button className={`${s.previewButton} ${s.previewButtonDisabled}`} disabled={true}><i className={`fa-solid fa-angle-right ${s.previewButtonIcon} `}></i></button>
                        </div>
                    </div>
                    <div className={s.projectInfo}>
                        <Link to='/projects/2' className={s.projectName}>Аналог Яндекс Музыки. Next/Nest FullStack приложение.</Link>
                        <p className={s.projectDescription}>Аналог Яндекс Музыки. Next/Nest FullStack приложение.</p>
                        <ul className={s.projectSkills}>
                            <li className={s.projectSkill}>
                                <i className={`fa-regular fa-circle-check ${s.projectSkillIcon}`}></i>
                                <p className={s.projectSkillName}>Next JS & Zustand</p>
                            </li>
                            <li className={s.projectSkill}>
                                <i className={`fa-regular fa-circle-check ${s.projectSkillIcon}`}></i>
                                <p className={s.projectSkillName}>Nest JS</p>
                            </li>
                            <li className={s.projectSkill}>
                                <i className={`fa-regular fa-circle-check ${s.projectSkillIcon}`}></i>
                                <p className={s.projectSkillName}>Prisma ORM</p>
                            </li>
                            <li className={s.projectSkill}>
                                <i className={`fa-regular fa-circle-check ${s.projectSkillIcon}`}></i>
                                <p className={s.projectSkillName}>PosgtreSQL & Redis</p>
                            </li>
                        </ul>
                        <Link to='/projects/2' className={s.projectButton}>Подробнее</Link>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Projects