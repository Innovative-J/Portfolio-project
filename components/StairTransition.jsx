"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// components
import Stairs from "./Stairs"


const StairTransition = () => {
    const pathname = usePathname();

    return (
        <>
    <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="h-name w-screen fixed top-0 left-0 right-0 pointer-events-none">
                <Stairs />
            </div>
        </div>
         </AnimatePresence>
         </>
    );
};

export default StairTransition;