import React, { useState } from "react";
import Card from "../../common/Card";
const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user") === true);

    const handleLogin = () => {
        localStorage.setItem("user", "isLogin");
        setIsAuth(true);
    };
    const handLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
        console.log("remove");
    };
    return (
        <Card>
            <Component
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handLogOut}
            />
        </Card>
    );
};
export default withFunctions;
