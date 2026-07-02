"use client";
 import { useRouter } from "next/navigation"
 import style from '../dhasboard/style.module.css'

const page = () => {
    const router = useRouter();
    console.log(router)
  return (
    <div>
     <h1 className={style.main}>welcome to dhasboard</h1> 
     <button onClick={()=> router.back()}>Go Back</button>
    </div>
  )
}

export default page;
