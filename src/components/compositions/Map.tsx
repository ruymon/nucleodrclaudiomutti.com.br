import { general } from "@/helpers/general";

const { googleMapsApi: mapUrl } = general;

export function Map() {
  return (
    <iframe 
      className="w-full h-full rounded-xl border-none border-0"
      src={mapUrl} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade" 
    />
  );
};
