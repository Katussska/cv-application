import { Eye, Pencil, Printer, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useEditing } from "./EditingContext.tsx"; // Import useEditing

export default function Sidebar() {
    const [theme, setTheme] = useState('light');
    const { isEditing, toggleEditing } = useEditing(); // Použití sdíleného stavu

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
                        <Pencil onClick={toggleEditing} />
                        <Printer />
                    </>
                )}
                {isEditing && <Eye onClick={toggleEditing} />}
                {theme === 'light' ? (
                    <Sun onClick={toggleTheme} />
                ) : (
                    <Moon onClick={toggleTheme} />
                )}
            </div>
        </nav>
    );
}
