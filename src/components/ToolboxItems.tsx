import React from "react";
import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({techStack, className, itermsWrapperClassName}:{
    techStack: {
        title: string;
        icon: React.ElementType;
    }[];
    className?: string;
    itermsWrapperClassName?: string;
}) => {
    return (
                <div className={twMerge(
                                    "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", 
                                    className)}>
                    <div className={twMerge("flex flex-none gap-6 py-0.5 pr-6", itermsWrapperClassName)}>
                        {techStack.map((tech) => (
                          <div key={tech.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                            <TechIcon component={tech.icon} />
                            <span className="text-sm text-semibold">{tech.title}</span>
                          </div>
                        ))}
                    </div>
                  </div>
    );
}