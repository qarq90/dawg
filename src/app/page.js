'use client'

import styledGlobal from "@/styles/pages/global.module.css"
import CardGrid from "@/components/ui/CardGrid"
import {useEffect} from "react"
import Cookies from "js-cookie"
import {useRouter} from "next/navigation.js"
import useGameStore from "@/userStore/gameStore.js"
import useUserStore from "@/userStore/userStore.js";

export default function Home() {

	const router = useRouter()

	const {setUserEmail, setUserPassword, setUserName} = useUserStore()
	const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;

	const {
		setGameId,
		setGameTrailer,
		setGameDetails,
		setGameDescription,
		setGameScreenshots,
		setGameReviews
	} = useGameStore()

	useEffect(() => {

		setGameId(0)
		setGameDetails(null)
		setGameTrailer(null)
		setGameDescription([])
		setGameScreenshots(null)
		setGameReviews(null)

		const autoLogin = async () => {

			const storageUserID = Cookies.get("storageUserID") || ""

			if (storageUserID === "") {
				router.push("/auth/login")
			} else {
				const request = {
					_id: storageUserID,
				}

				try {
					const response = await fetch(`/api/auth/post/fetchUser`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(request),
					})

					const data = await response.json()

					if (data.status) {
						setUserName(data.result.user_name)
						setUserEmail(data.result.email_id)
						setUserPassword(data.result.password)
					}

				} catch (error) {
					console.log(error)
				}
			}
		}

		autoLogin()

	}, [])

	return (
		<>
			<div className={styledGlobal.container}>
				<h1>Home</h1>
				<CardGrid
					url={`https://api.rawg.io/api/games?key=${apiKey}`}
				/>
				{/*<SearchDropDown />*/}
			</div>
		</>
	)
}
