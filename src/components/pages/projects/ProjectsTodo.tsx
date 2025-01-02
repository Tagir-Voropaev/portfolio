import { useState } from 'react'
import s from '../../../styles/Projects/ProjectsTodo.module.scss'
import todo_1 from '../../../assets/images/todoapp.png'
import todo_2 from '../../../assets/images/todoapp-2.png'
import todo_3 from '../../../assets/images/todoapp-3.png'
import { Link } from 'react-router-dom'

const ProjectsTodo = () => {
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
        <div className={`${s.project}`}>
            <div className={s.projectHeader}>
                <h2 className={s.projectName}>ToDo</h2>
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
            </div>
            <div className={s.projectPreview}>
                <div className={`${s.projectPreviewList} 
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
                </div>
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
            <div className={s.info}>
                <section className={s.infoBlock}>
                    <h3 className={s.infoTitle}>Почему?</h3>
                    <p className={s.infoDescription}>Для работы в онлайн школе была необходимость вести учёт занятий и задач.</p>
                    <p className={s.infoDescription}>Также требовалась отправка сообщений родителям учеников по определенному шаблону.</p>
                </section>
                <section className={s.infoBlock}>
                    <h3 className={s.infoTitle}>Результат</h3>
                    <p className={s.infoDescription}>По мере того, как увеличивается число преподаваемых групп и школ, нужно было следить за большим количеством данных.</p>
                    <p className={s.infoDescription}>Проблема, с которой я столкнулся заключается в том, что у меня нет простого способа управлять процессом работы в этих школах.</p>
                    <p className={s.infoDescription}>Поэтому мной было принято решение разработать приложение-помощник, упрощающее работу в онлайн школе.</p>
                    <p className={s.infoDescription}></p>
                </section>
            </div>
            <div className={s.projectButtons}>
                <Link className={s.projectButton} to='https://github.com/Tagir-Voropaev/todo-app' target='_blank'><i className="fa-brands fa-github"></i>Посетить репо</Link>
                <Link className={s.projectButton} to='https://tagir-voropaev.github.io/todo-app/' target='_blank'><i className="fa-solid fa-arrow-up-right-from-square"></i>Посетить демо</Link>
            </div>
        </div>
    )
}

export default ProjectsTodo