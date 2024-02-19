import { GoogleMapsEmbed } from '@next/third-parties/google';

export default function Map() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <GoogleMapsEmbed
      apiKey={apiKey}
      height={200}
      width="100%"
      mode="place"
      q="Av. 9 Nte. #12N - 10"
    />
  );
}
