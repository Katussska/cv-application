import Skill from "./Skill.tsx";

export default function SkillList() {
    return (
        <div className="skillsContainer">
            <div className="skills">
                <h4>Skills</h4>
                <Skill name="JavaScript"/>
                <Skill name="TypeScript"/>
                <Skill name="React"/>
                <Skill name="Node.js"/>
                <Skill name="Express"/>
                <Skill name="MongoDB"/>
                <Skill name="PostgreSQL"/>
                <Skill name="Python"/>
                <Skill name="Java"/>
            </div>
        </div>
    );
}