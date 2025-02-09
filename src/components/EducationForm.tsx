import {Education} from "./Education.tsx";
import {Trash2} from "lucide-react";

interface EducationFormProps extends Education {
    index: number;
    onChange: (index: number, key: keyof Education, value: string) => void;
    onDelete: (index: number) => void;
}

export default function EducationForm(props: EducationFormProps) {
    return (
        <div className="educationForm">
            <input type="text" placeholder="School Name" value={props.schoolName}
                   onChange={event => props.onChange(props.index, "schoolName", event.currentTarget.value)}/>
            <input type="text" placeholder="Title of Study" value={props.titleOfStudy}
                   onChange={event => props.onChange(props.index, "titleOfStudy", event.currentTarget.value)}/>
            <input type="text" placeholder="Date of Study" value={props.dateOfStudy}
                   onChange={event => props.onChange(props.index, "dateOfStudy", event.currentTarget.value)}/>
            <Trash2 className={"iconEdit"} onClick={() => props.onDelete(props.index)}/>
        </div>
    );
}