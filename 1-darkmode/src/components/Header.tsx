import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    // اول چک کن ویندو اندیفایند نباشه
    if (typeof window === "undefined") return "light";
    //داخل لوکال استوریج کلید تم رو بگیر
    const saved = localStorage.getItem("theme");
    // اگه داخلش ولیو باشه همونو ری ترن کن
    if (saved) return saved;
    // سیستم پری فرس رو بگیر
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    //  اگر ترو لایت برگدونه اگه نه فالس
    return systemPrefersDark ? "dark" : "light";
  });

  useEffect(() => {
    // تگ اچ تی ام ال سلکت می کنیم
    const htmlElement = document.documentElement;
    // براش اتربیوت دیتا تم ست میکنیم تیلویند 4 اینجوریه و مقدارش رو برابر مقدار استیت میذارم همون تم
    htmlElement.setAttribute("data-theme", theme);
    // داخل لوکال استوریج این کلید تم و مقدار استیت تم رو ذخیره میکنم
    localStorage.setItem("theme", theme);
    // در اخرم اگر استیت تغییر کرد این یوز افکت دوباره اجرا بشه
  }, [theme]);


  // تابع تغغیر تم اگر تم لایت بیا دارکش کن اگه نه همون لایت
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className=" flex items-center font-sans  shadow shadow-white  justify-between py-5 px-5 bg-gray-300 text-black dark:bg-slate-800 dark:text-gray-200">
      <nav>
        <ul className="flex gap-4 font-medium capitalize">
          <li>home</li>
          <li>aboutUs</li>
          <li>contact us</li>
        </ul>
      </nav>
      <div>
        <button
          onClick={toggleTheme}
          className="cursor-pointer transition-all delay-150 ease-in-out"
        >
          {theme === "dark" ? "Switch to Light 🌞" : "Switch to Dark 🌙"}
        </button>
      </div>
    </div>
  );
};

export default Header;
