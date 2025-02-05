import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import { EditingProvider } from "./components/EditingContext.tsx";
import CVContainer from "./components/CVContainer.tsx"; // Import EditingProvider

function App() {
    return (
        <EditingProvider>
            <div className="container">
                <Sidebar />
                <CVContainer />
            </div>
        </EditingProvider>
    );
}

export default App;
