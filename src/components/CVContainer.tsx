import GeneralInformation from "./GeneralInformation.tsx";
import Education from "./Education.tsx";
import Experience from "./Experience.tsx";
import SkillList from "./SkillList.tsx";

export default function CVContainer() {
    return (
        <div className="cvContainer">
            <GeneralInformation/>
            <div className="cvContent">
                <div className="cvLeft">
                    <Education/>
                    <Experience/>
                </div>
                <div className="cvRight">
                    <SkillList/>
                </div>
            </div>
        </div>
    );
}