import {Star, Trash2} from "lucide-react";
import {SkillProps} from "./SkillList.tsx";

interface SkillForm extends SkillProps {
    index: number;
    onChange: (index: number, key: keyof SkillProps, value: string) => void;
    onDelete: (index: number) => void;
}

export default function SkillForm(props: SkillForm) {
    return (
        <div className="item">
            <Star size={16} className="icon"/>
            <input type="text" placeholder="Skill" value={props.name}
                   onChange={event => props.onChange(props.index, "name", event.currentTarget.value)}/>
            <Trash2 size={16} className="iconEdit"
                    onClick={() => props.onDelete(props.index)}/>
        </div>
    );
}