import {BriefcaseBusiness, Plus} from "lucide-react";
import {useState} from "react";
import {useEditing} from "./EditingContext.tsx";
import ExperienceShow from "./ExperienceShow.tsx";
import ExperienceForm from "./ExperienceForm.tsx";

export interface Experience {
    companyName: string;
    position: string;
    mainResponsibilities: string;
    startDate: string;
    endDate: string;
}

export default function Experience() {
    const [experience, setExperience] = useState<Experience[]>([]);
    const {isEditing} = useEditing();

    const onChange = (index: number, key: keyof Experience, value: string) => {
        setExperience(prevState => {
            const newState = [...prevState];
            newState[index][key] = value
            return newState;
        });
    };

    const onDelete = (index: number) => {
        setExperience(prevState => prevState.filter((_, key) => index !== key))
    };

    const addExperience = () => {
        setExperience(prevState => [...prevState, {
            companyName: "",
            position: "",
            mainResponsibilities: "",
            startDate: "",
            endDate: ""
        }])
    };


    return (
        <div className="experienceContainer">
            <div className="title">
                <BriefcaseBusiness className="icon"/>
                <h4>Experience</h4>
                <Plus className="iconEdit" onClick={addExperience}/>
            </div>
            {experience.map((value, index) => {
                return !isEditing ? (<ExperienceShow {...value}/>) :
                    (<ExperienceForm index={index} onChange={onChange} onDelete={onDelete} {...value}/>)
            })}
        </div>
    );
}