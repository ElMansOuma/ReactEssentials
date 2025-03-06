import { Routes, Route, Link } from "react-router-dom";
import Formulaire from "./Formulaire/Formulaire";
import DigitalClock from "./DigitalClock/DigitalClock";
import Calculator from "./Calculatrice/Calculator";
import TodoList from "./TodoList/TodoList";
import "./App.css";

export default function App() {
    return (
        <div className="app-container">
            <nav>
                <ul>
                    <li><Link to="/formulaire">Formulaire</Link></li>
                    <li><Link to="/digital-clock">Horloge</Link></li>
                    <li><Link to="/calculator">Calculatrice</Link></li>
                    <li><Link to="/todo-list">Todo List</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/formulaire" element={<Formulaire />} />
                <Route path="/digital-clock" element={<DigitalClock />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/todo-list" element={<TodoList />} />
            </Routes>
        </div>
    );
}
