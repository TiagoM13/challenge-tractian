import { api } from "../lib/axios"

export const getAllCompanies = async () => {
  try {
    const { data } = await api.get("/companies");

    return data;
  } catch (error) {
    console.error('Error fetching companies:', error);
  }
}

export const getAllAssets = async (id: string) => {
  const { data } = await api.get(`/${id}`);

  return data;
}
