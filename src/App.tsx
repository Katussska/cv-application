import './App.css'
import {Eye, Moon, Pencil, Printer, Sun} from 'lucide-react';
import {useEffect, useState} from "react";

function App() {
    const [theme, setTheme] = useState('light');
    const [isEditing, setIsEditing] = useState(true);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const toggleEditing = () => {
        setIsEditing(prevIsEditing => !prevIsEditing);
    }

    return (
        <div className="container">
            <nav>
                <h1>CV Maker</h1>
                <div className="functionsContainer">
                    {!isEditing && (
                        <>
                            <Pencil onClick={toggleEditing}/>
                            <Printer/>
                        </>
                    )}
                    {isEditing && <Eye onClick={toggleEditing}/>}
                    {theme === 'light' ? (
                        <Sun onClick={toggleTheme}/>
                    ) : (
                        <Moon onClick={toggleTheme}/>
                    )}
                </div>
            </nav>
            <div className="cvContainer">
                CV
            </div>
        </div>
    )
}

export default App
