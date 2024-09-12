import { api } from "@/app/lib/axios"

import { Location } from "../interfaces/location";
import { Companie } from "../interfaces/companie";
import { Asset } from "../interfaces/asset";

export const getAllCompanies = async () => {
  const { data } = await api.get<Companie[]>("/companies");

  return data;
}

export const getAllAssets = async (id: string) => {
  const { data } = await api.get<Asset[]>(`companies/${id}/assets`);

  return data;
}

export const getAllLocations = async (id: string) => {
  const { data } = await api.get<Location[]>(`companies/${id}/locations`);

  return data;
}
