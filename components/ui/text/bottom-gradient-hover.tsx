import React from "react";

const BottomGradientHover = () => {
    return (
        <>
            <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-[2px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-100 absolute h-[2px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </>
    );
};

export default BottomGradientHover;
