import { api } from "@/config/apiConfig";
import { IPlatform } from "@/interfaces/IPlatform";

export const getPlatforms = async () => {
  try {
    const response = await api.get<IPlatform[]>("/platforms");
    return response.data;
  } catch (error) {
    console.error("Error fetching platforms:", error);
    throw error;
  }
};
