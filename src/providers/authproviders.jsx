import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const authproviders = () => {
    return (
        <div>
            
        </div>
    );
};

export default authproviders;