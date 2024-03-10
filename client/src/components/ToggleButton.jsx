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
          <button
            className="w-full rounded bg-indigo-500"
            key={opt.text}
            onClick={() => {setTheme(opt.text);window.location.reload()}}
          >
            {opt.text}
          </button>
        ) : (
          <button
            className="w-full rounded bg-white"
            key={opt.text}
            onClick={() => {setTheme(opt.text);window.location.reload()}}
          >
            {opt.text}
          </button>
        );
      })}
    </div>
  );
}

export default ToggleButton;
