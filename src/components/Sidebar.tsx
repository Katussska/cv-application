import {Eye, Moon, Pencil, Printer, Sun} from "lucide-react";
import {useEffect, useState} from "react";
import {useEditing} from "./EditingContext.tsx";

export default function Sidebar() {
    const [theme, setTheme] = useState('light');
    const {isEditing, toggleEditing} = useEditing();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav>
            <h1>CV Generator</h1>
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
    );
}
