import React, { useState } from "react";
import UserContext from "./Context";

const ContextPrdever = ({childirn}) => {
    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>
            {childirn}
        </UserContext.Provider>
    )

}

export default ContextPrdever
