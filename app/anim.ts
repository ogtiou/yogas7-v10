import { Variants } from "framer-motion"

export const menu: Variants = {
    closed: {
        opacity: 0,
        transition: {duration: 0.2}
    },
    open: {
        opacity: 1,
        transition: {duration: 0.2}
    }
}