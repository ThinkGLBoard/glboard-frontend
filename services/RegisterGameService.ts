import { api } from "@/config/apiConfig"
import { IErrorDetails } from "@/interfaces/IErrorDetails"
import { IGame } from "@/interfaces/IGame"

export const registerGame = async (gameData: IGame) => {
  try {
    const response = await api.post("/games", gameData)
    return response.data
  } catch (error: unknown) {
    const errorDetails = error as IErrorDetails
    console.error("Error registering game:", errorDetails)
    throw errorDetails
  } 
}