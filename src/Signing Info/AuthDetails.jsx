import React, {useEffect, useState} from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate(); // added to navigate back to log in page

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) =>{
            if (user){
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () =>{
            listen();
        }

    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("sign out successfully")
            navigate('/');         // return to log in page
        }).catch(error => console.log(error));
    }


    return (
    <div>
        {authUser ?<><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></>: <p>Signed Out</p>}
    </div>
    );
    
};



export default AuthDetails