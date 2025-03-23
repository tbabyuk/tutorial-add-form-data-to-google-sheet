"use server"


const googleScriptURL = ""


export const addRegistration = async (formData) => {

    const fullName = formData.get("fullName")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const numSpots = formData.get("numSpots")

    try {

        const res = await fetch(googleScriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "event": "Pottery Workshop (Apr. 12)",
                fullName,
                phone,
                email,
                numSpots
            })
        })

        if(!res.ok) {
            throw new Error("Failed to add registration to google spreadsheet")
        }

        return {successMessage: `Success! You have been successfully registered for our Pottery Workshop!`}

    } catch (error) {
        return {errorMessage: `Ooops! There was a problem with your registration!`}
    }
}



