import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    innerClassName?: string;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const RevealOnScroll = ({
    children,
    className = "",
    innerClassName = "",
    delay = 0,
    width = "100%"
}: RevealOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div
            ref={ref}
            style={{ width }}
            className={`${className}`}
        >
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
                className={innerClassName}
            >
                {children}
            </motion.div>
        </div>
    );
};
