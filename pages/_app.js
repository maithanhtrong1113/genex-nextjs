import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="off"
        whileInView={"on"}
        variants={{
          off: {
            opacity: 0,
          },
          on: {
            opacity: 1,
            transition: {
              duration: 0.4,
            },
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
