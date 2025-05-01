import React from "react";

const BottomGlowConstant = () => {
    return (
        <>
            {/* <span className="opacity-100 block transition duration-500 absolute h-[2px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent" /> */}
            <span className="opacity-100 blur-sm block transition duration-500 absolute h-[2px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </>
    );
};

export default BottomGlowConstant;
