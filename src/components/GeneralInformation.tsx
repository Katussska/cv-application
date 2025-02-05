import {AtSign, MapPinHouse, Phone} from "lucide-react";

export default function GeneralInformation() {
    return (
        <div className="generalInformationContainer">
            <div className="name">
                <h3>Name</h3>
                <h3>Surname</h3>
            </div>
            <div className="contact">
                <div className="item">
                    <Phone size={16} className="icon"/>
                    <p>+123 456 789</p>
                </div>
                <div className="item">
                    <AtSign size={16} className="icon"/>
                    <p>example@gmail.com</p>
                </div>
                <div className="item">
                    <MapPinHouse size={16} className="icon"/>
                    <p>1234 Example St, City, Country</p>
                </div>
            </div>

        </div>
    );
}