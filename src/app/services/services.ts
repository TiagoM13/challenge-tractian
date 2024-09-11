import { api } from "../lib/axios"

export const getAllCompanies = async () => {
  const { data } = await api.get("/companies");

  return data;
}

export const getAllAssets = async (id: string) => {
  const { data } = await api.get(`/${id}`);

  return data;
}
