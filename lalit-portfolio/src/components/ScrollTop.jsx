import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handle = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handle);

    return () =>
      window.removeEventListener(
        "scroll",
        handle
      );

  }, []);

  return (

    show && (

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-400 shadow-lg flex items-center justify-center z-50"
      >
        <FaArrowUp />
      </button>

    )

  );
}

export default ScrollTop;