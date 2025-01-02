import styles from './App.module.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
import ProjectsTodo from './components/pages/projects/ProjectsTodo';
import Footer from './components/Footer';
const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.bg}></div>
            <Header />
            <main className={styles.content} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/todo-code" element={<ProjectsTodo />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
