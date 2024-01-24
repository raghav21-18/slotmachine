import React from "react";

const SlotM =(props) => {
    let {x,y,z} = props;
    if ((x===y) && (x===z)){
        return (
            <>
                <div className="slot_inner">
                    <h2>{x} {y} {z} </h2>
                    <h2>This Is Matching.</h2>
                    <hr/>
                </div>
            </>
        );
    }
    else {
        return(
            <>
                <div className="slot_inner">
                    <h2>
                        {x} {y} {z}
                    </h2>
                    <h2>
                        This Is Not Matching.
                    </h2>
                    <hr/>
                </div>
            </>
        );
    }
}

export default SlotM;