import { createContext, useContext, useState, ReactNode } from "react";

interface EditingContextType {
    isEditing: boolean;
    toggleEditing: () => void;
}

const EditingContext = createContext<EditingContextType | undefined>(undefined);

export const useEditing = () => {
    const context = useContext(EditingContext);
    if (!context) {
        throw new Error("useEditing must be used within an EditingProvider");
    }
    return context;
};

export const EditingProvider = ({ children }: { children: ReactNode }) => {
    const [isEditing, setIsEditing] = useState(true);

    const toggleEditing = () => {
        setIsEditing(prevIsEditing => !prevIsEditing);
    };

    return (
        <EditingContext.Provider value={{ isEditing, toggleEditing }}>
            {children}
        </EditingContext.Provider>
    );
};
