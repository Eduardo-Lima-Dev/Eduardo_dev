import { motion } from "framer-motion";

export default function Flag() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute right-0 top-0 z-10 rounded-bl-lg bg-primary px-3 py-1 text-sm font-medium text-white"
    >
      Em desenvolvimento
    </motion.div>
  );
} 