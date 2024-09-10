export interface Asset {
  id: string
  name: string
  status: string | null;
  parentId?: string | null;
  locationId?: string | null;
  sensorType?: string | null;
}