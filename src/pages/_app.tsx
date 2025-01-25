import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"azurich.fr"}
        description={"Azurich personal site"}
        canonical={`https://azurich.fr${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://azurich.fr${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "azurich.fr",
          description: "azurich personal site",
          images: [
            {
              url: "https://r2.e-z.host/4ed8b442-31c9-4738-a919-7ff8dee725df/7tgqsqub.png",
              alt: "kurt",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
