import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";

function SpringModal({ isOpen, setIsOpen, cartoon_id, chapter_id }) {
  const { chapter, cartoon } = useParams();
  // console.log(chapter.split('_'))
  async function Buy() {
    try {
      await axios.post("/api/buy_chapter", {
        username: localStorage.getItem("user"),
        cartoon_id: cartoon_id,
        chapter_id: chapter_id,
      });
      setIsOpen(false);
      location.reload(false);
    } catch (error) {
      if (error.response && error.response.status === 417) {
        if (error.response.data.error === "coin") {
          alert("Term Cash");
          setIsOpen(false);
          location.href = "/payment";
        } else {
          alert("Login");
          setIsOpen(false);
          location.href = "/login";
        }
      } else {
        console.log("Error.");
      }
    }
    // setQrcode(res.data.image)
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                ทำการซื้อตอน
              </h3>
              <p className="text-center mb-6">
                หลังจากทำการซื้อตอนแล้วจะไม่สามารถขอคืนเงินได้
              </p>
              <div className="flex gap-2">
                {chapter === undefined ? (
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    ไม่ซื้อ
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      window.location.href =
                        Number(chapter.split("_")[0]) > 1
                          ? `/cartoon/${cartoon}/${
                              Number(chapter.split("_")[0]) - 1
                            }_${chapter.split("_")[1]}`
                          : `/cartoon/${cartoon}``${
                              Number(chapter.split("_")[0]) > 1
                            }`;
                    }}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    ไม่ซื้อ
                  </button>
                )}
                <button
                  onClick={() => Buy()}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  ซื้อ
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// to={
//   Number(chapter.split("_")[0]) > 1
//     ? `/cartoon/${cartoon}/${
//         Number(chapter.split("_")[0]) - 1
//       }_${chapter.split("_")[1]}`
//     : `/cartoon/${cartoon}`
// }
export default SpringModal;

// const ExampleWrapper = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="px-4 py-64 bg-slate-900 grid place-content-center">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
//       >
//         Open Modal
//       </button>
//       <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
//     </div>
//   );
// };

// async function Buy() {
//     axios.post('/api/buy_chapter', {
//         username: localStorage.getItem('user'),
//         cartoon_id: ,
//         chapter_id:
//     })
// }
