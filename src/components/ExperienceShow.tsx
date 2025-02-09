import {Experience} from "./Experience.tsx";

export default function ExperienceShow(props: Experience) {
    return (
        <div className="experienceShow">
            <h4>{props.companyName === "" ? "Company name" : props.companyName}</h4>
            <p>{props.position === "" ? "Position" : props.position}</p>
            <p>{props.startDate === "" ? "Start date" : props.startDate}</p>
            <p>{props.endDate === "" ? "End date" : props.endDate}</p>
            <p>{props.mainResponsibilities === "" ? "Main responsibilities" : props.mainResponsibilities}</p>
        </div>
    );
}