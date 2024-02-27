import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";

function ToggleButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      text: "light",
    },
    {
      text: "dark",
    },
    {
      text: "system",
    },
  ];
  function onWindowMatch() {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  useEffect(() => {
    switch (theme) {
      case "dark":
        //   element.classList.add('dark')
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        //   element.classList.remove('dark')
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <div className="flex items-center justify-center gap-2 w-full">
      {options.map((opt) => {
        return theme === opt.text ? (
          <button
            className="w-full bg-indigo-500"
            key={opt.text}
            onClick={() => setTheme(opt.text)}
          >
            {opt.text}
          </button>
        ) : (
          <button
            className="w-full "
            key={opt.text}
            onClick={() => setTheme(opt.text)}
          >
            {opt.text}
          </button>
        );
      })}
    </div>
  );
}

export default ToggleButton;
