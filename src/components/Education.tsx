import {GraduationCap, Plus} from "lucide-react";
import {useState} from "react";
import {useEditing} from "./EditingContext.tsx";
import EducationShow from "./EducationShow.tsx";
import EducationForm from "./EducationForm.tsx";

export interface Education {
    schoolName: string;
    titleOfStudy: string;
    dateOfStudy: string;
}

export default function Education() {
    const [education, setEducation] = useState<Education[]>([]);
    const {isEditing} = useEditing();

    const onChange = (index: number, key: keyof Education, value: string) => {
        setEducation(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState;
        });
    };
    const onDelete = (index: number) => {
        setEducation(prevState => prevState.filter((_, key) => index !== key))
    };

    const addEducation = () => {
        setEducation(prevState => [...prevState, {schoolName: "", titleOfStudy: "", dateOfStudy: ""}])
    };

    return (
        <div className="educationContainer">
            <div className="title">
                <GraduationCap className="icon"/>
                <h4>Education</h4>
                <Plus className="iconEdit" onClick={addEducation}/>
            </div>
            {education.map((value, index) => {
                return !isEditing ? (<EducationShow {...value}/>) :
                    (<EducationForm index={index} onChange={onChange} onDelete={onDelete} {...value}/>)
            })}
        </div>
    );
}