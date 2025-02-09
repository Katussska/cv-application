import SkillForm from "./SkillForm.tsx";
import {Plus} from "lucide-react";
import {useState} from "react";
import {useEditing} from "./EditingContext.tsx";
import SkillShow from "./SkillShow.tsx";

export interface SkillProps {
    name: string;
}

export default function SkillList() {
    const [skills, setSkills] = useState<SkillProps[]>([]);
    const {isEditing} = useEditing();

    const onDelete = (index: number) => {
        setSkills(prevState => prevState.filter((_, key) => index !== key))
    }


    const onChange = (index: number, key: keyof SkillProps, value: string) => {
        setSkills(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState;
        });
    };

    const addSkill = () => {
        setSkills(prevState => [...prevState, {name: ""}])
    };

    return (
        <div className="skillsContainer">
            <div className="skills">
                <div className="title">
                    <h4>Skills</h4>
                    <Plus className="iconEdit" onClick={addSkill}/>
                </div>
                {skills.map((value, index) => {
                    return isEditing ? (
                            <SkillForm {...value} index={index} onChange={onChange} onDelete={onDelete}/>) :
                        <SkillShow {...value}/>
                })}
            </div>
        </div>
    );
}