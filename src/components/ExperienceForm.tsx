import {Experience} from "./Experience.tsx";
import {Trash2} from "lucide-react";

interface ExperienceFormProps extends Experience {
    index: number;
    onChange: (index: number, key: keyof Experience, value: string) => void;
    onDelete: (index: number) => void;
}

export default function ExperienceForm(props: ExperienceFormProps) {
    return (
        <div className="experienceForm">
            <input type="text" placeholder="Company Name" value={props.companyName}
                   onChange={event => props.onChange(props.index, "companyName", event.currentTarget.value)}/>
            <input type="text" placeholder="Position" value={props.position}
                   onChange={event => props.onChange(props.index, "position", event.currentTarget.value)}/>
            <input type="text" placeholder="Main Responsibilities" value={props.mainResponsibilities}
                   onChange={event => props.onChange(props.index, "mainResponsibilities", event.currentTarget.value)}/>
            <input type="text" placeholder="Start Date" value={props.startDate}
                   onChange={event => props.onChange(props.index, "startDate", event.currentTarget.value)}/>
            <input type="text" placeholder="End Date" value={props.endDate}
                   onChange={event => props.onChange(props.index, "endDate", event.currentTarget.value)}/>
            <Trash2 className={"iconEdit"} onClick={() => props.onDelete(props.index)}/>
        </div>
    );
}