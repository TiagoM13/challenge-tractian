import IconLocation from "@/assets/location.png"
import IconComponent from "@/assets/component.png"
import IconAsset from "@/assets/asset.png"

export const getIcon = (type: string) => {
  switch (type) {
    case 'location':
      return IconLocation;
    case 'component':
      return IconComponent;
    case 'asset':
      return IconAsset;
    default:
      return '-';
  }
};


