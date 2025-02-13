import React from "react";

export const TechIcon = ({ component }: { component: React.ElementType }) => { 
    
    const Component= component;

    return(
        <>
            {/* <span className="fill-[url(#tech-icon-gradient)]">{React.createElement(component, { size: 32, className: "w-10 h-10" })}</span> */}
            <Component className=" size-10 fill-[url(#tech-icon-gradient)]"/>
            <svg className="size-0 absoulte">
                <linearGradient id="tech-icon-gradient">
                    <stop offset="0%" stopColor="rgb(110 231 183)" />
                    <stop offset="100%" stopColor="rgb(56 189 248)" />
                </linearGradient>
            </svg>
        </>
    ); }