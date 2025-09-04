import { HashRouter, Routes, Route } from "react-router"

import Home from './pages/Home'
import Counter from './pages/Counter'
import Todo from './pages/Todo'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Comments from './pages/Comments'
import Weather from './pages/Weather'
import Buttons from './pages/Buttons'
import Navigation from "./components/Navigation"
import styles from './App.module.scss'

function App() {
  return (
    <HashRouter>
        <div className={styles.app}>
            <Navigation/>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/todo" element={<Todo/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/comments" element={<Comments/>}></Route>
                <Route path="/weather" element={<Weather/>}></Route>
                <Route path="/buttons" element={<Buttons/>}></Route>
            </Routes>
        </div>
    </HashRouter>
  )
}

export default App
