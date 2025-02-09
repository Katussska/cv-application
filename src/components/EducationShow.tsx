import {Education} from "./Education.tsx";

export default function EducationShow(props: Education) {
    return (
        <div className="educationShow">
            <h4>{props.schoolName === "" ? "School name" : props.schoolName}</h4>
            <p>{props.titleOfStudy === "" ? "Title of study" : props.titleOfStudy}</p>
            <p>{props.dateOfStudy === "" ? "Date of study" : props.dateOfStudy}</p>
        </div>
    );
}