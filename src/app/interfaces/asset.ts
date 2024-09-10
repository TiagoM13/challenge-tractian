export interface Asset {
  id: string;
  name: string;
  staus: 'active' | 'inactive';
  children?: Asset[];
}
