import { useEffect, useState } from "react"
import { formatTime } from "../helper/formatTime";



const CounterTimer = () => {
    // سی دقیقه به استیت دادیم به ثانیه البته که میشه 1800 ثانیه

  const [timeLeft,setTimeLeft]=useState(30*60);

  useEffect(()=>{
    // اگر استیت صفر شد تایم تموم شد ری ترن کن کاری انجام نده
    if(timeLeft<=0) return;

  // تایمر گذاشتیم با استفاده از ست اینترول گفتیم هر یک ثانیه یکدونه از ثانیه استیت کم کن از 1800 ثانیه
    const timer=setInterval(()=>{
      setTimeLeft((prev)=> prev >=0 ? prev - 1 : 0)
    },1000);

    // اینجاهم کلین اپ زدیم تا قبل یوز افکت قبلی پاک بشه و برنامه به باگ نخوره
    return ()=>{
      clearInterval(timer)
    }

     // استیت رو به عنوان دپندنسی دادیم هرموقع تغییر کرد بیاد این یوز افکت رو از اول اجرا گنه

  },[timeLeft])
  return (
    <div className="h-dvh bg-slate-900 flex items-start justify-center p-16">
     <div className="text-white grid gap-6 w-56 rounded p-4 font-semibold outline outline-gray-700/70 p-2 shadow shadow-white">
      <h3 className="text-center decoration underline text-orange-500">تخفیف‌های ویژه</h3>
      {timeLeft > 0 ? <p className="text-center">زمان باقی مانده: <span className="bg-green-500/45 rounded p-1">{formatTime(timeLeft)}</span></p>:(
        <p className="bg-gray-500/35 text-gray-200 py-1  text-center rounded">زمان پایان یافت</p>
      )} 
      <button className="bg-gray-400 cursor-pointer w-25 py-0.5 rounded  block mx-auto hover:bg-orange-500" disabled={timeLeft <= 0}>خرید</button>
     </div>
    </div>
  )
}

export default CounterTimer;