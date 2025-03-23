"use client"

import { addRegistration } from "../actions"
import { useState } from "react"


export const RegistrationForm = () => {

    const [isPending, setIsPending] = useState(false)
    const [subscribeSuccess, setSubscribeSuccess] = useState("")
    const [subscribeError, setSubscribeError] = useState("")


    const handleRegister = async (e) => {
        e.preventDefault()
        setIsPending(true)
        const formData = new FormData(e.target)
        const res = await addRegistration(formData)
        if(res.successMessage) {
            setSubscribeSuccess(res.successMessage)
        } else {
            setSubscribeError(res.errorMessage)
        }
        setIsPending(false)
    }


    return(
        <>
            {subscribeSuccess && (
                <div className="w-[90%] max-w-[370px] mx-auto px-8 py-6 space-y-4 rounded-lg text-white bg-[#a59072]/80 ring-2 ring-green-500">
                    {subscribeSuccess}
                </div>
            )}
            {subscribeError && (
                <div className="w-[90%] max-w-[370px] mx-auto px-8 py-6 space-y-4 rounded-lg text-white bg-[#a59072]/80 ring-2 ring-red-500">
                    {subscribeError}
                </div>
            )}
            {!subscribeSuccess && !subscribeError && (
                <form 
                className="w-[90%] max-w-[370px] mx-auto px-8 py-6 space-y-4 rounded-lg text-white bg-[#a59072]/80 ring-2 ring-white/80"
                onSubmit={(e) => handleRegister(e)}
                >
                <h2 className="text-center text-2xl font-semibold">Join us for our April 12th Pottery Workshop!</h2>
                <div className="flex flex-col">
                <label htmlFor="fullName">Full Name:</label>
                <input 
                    type="text" 
                    id="fullName"
                    name="fullName" 
                    placeholder="full name" 
                    className="input focus:outline-none w-full bg-white/90 text-[#5b371a] font-semibold"
                    required 
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="phone">Phone:</label>
                <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="phone" 
                    className="input focus:outline-none w-full bg-white/90 text-[#5b371a] font-semibold"
                    required
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="email" 
                    className="input focus:outline-none w-full bg-white/90 text-[#5b371a] font-semibold"
                    required 
                />
                </div>
                <div>
                <label htmlFor="spots">Number of Spots:</label>
                <select 
                    defaultValue="" 
                    id="spots"
                    name="numSpots" 
                    className="select focus:outline-none w-full bg-white/90 text-[#5b371a] font-semibold"
                    required
                >
                    <option value="" disabled hidden>number of spots</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </div>
                <div>
                <button className="btn btn-lg w-full mt-3 bg-[#5b371a]/80 hover:bg-[#5b371a] text-white" disabled={isPending}>Register</button>
                </div>
            </form>
            )}
        </>
    )
}