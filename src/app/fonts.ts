import { Poppins, Comforter_Brush } from 'next/font/google'

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const comforter_Brush = Comforter_Brush({
  weight: "400",
  subsets: ["latin"]
})
