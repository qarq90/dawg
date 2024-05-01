'use client'

import styledGlobal from "@/styles/pages/global.module.css"
import CardGridPlatforms from "@/components/ui/CardGridPlatforms";
import {useRouter} from "next/navigation.js";
import {useEffect} from "react";
import Cookies from "js-cookie";

export default function Android() {
    const router = useRouter()

    useEffect(() => {
        const autoLogin = async () => {
            const storageUserID = Cookies.get("storageUserID") || ""

            if (storageUserID === "") {
                router.push("/auth/login")
            }
        }
        autoLogin()

    }, [])
    return (
        <div className={styledGlobal.container}>
            <h1>Android</h1>
            <CardGridPlatforms
                url={'https://api.rawg.io/api/games?key=9560492cd5c24a7cbe8ae7e99bb58971&platforms=21'}
            />
        </div>
    )
}