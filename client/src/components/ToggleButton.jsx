import { useEffect, useState } from "react";
// import { ThemeContext } from "../App";

function ToggleButton() {
  // const { theme, setTheme } = useContext(ThemeContext);
  // const element = document.documentElement
  const [theme, setTheme] = useState(localStorage.getItem("theme"))
  const options = [
    {
      text: "light",
    },
    {
      text: "dark",
    }
  ];
  useEffect(() => {
    switch (theme) {
      case "dark":
          // element.classList.add('dark')
        localStorage.setItem("theme", "dark");
        break;
        case "light":
          // element.classList.remove('dark')
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-center gap-2 w-full">
      {options.map((opt) => {
        return theme === opt.text ? (
          <button key={opt.text} onClick={() => {setTheme(opt.text);window.location.reload()}} className="rounded-2xl border-2 border-dashed border-black bg-indigo-500 px-6 w-full py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            {opt.text}
          </button>
        ) : (
          <button key={opt.text} onClick={() => {setTheme(opt.text);window.location.reload()}} className="rounded-2xl border-2 border-dashed border-black bg-white px-6 w-full py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            {opt.text}
          </button>
        );
      })}
    </div>
  );
}

export default ToggleButton;
