import {Star} from "lucide-react";
import {SkillProps} from "./SkillList.tsx";

export default function SkillShow(props: SkillProps) {
    return (
        <div className="item">
            <Star size={16} className="icon"/>
            <p>{props.name === "" ? "Skill" : props.name}</p>
        </div>
    );
}