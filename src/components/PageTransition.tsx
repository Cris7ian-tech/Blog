import { motion } from "framer-motion"

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function PageTransition({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeInOut" }}    
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition