import styles from './App.module.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/home/Home';
const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.content} >
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
