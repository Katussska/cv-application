import {Star} from "lucide-react";

export default function Skill(props: { name: string }) {
    return (
        <div className="item">
            <Star size={16} className="icon"/>
            <p>{props.name}</p>
        </div>
    );
}