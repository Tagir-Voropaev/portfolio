import styles from './App.module.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects';
const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.content} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Projects />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
