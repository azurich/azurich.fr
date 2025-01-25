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
        description={"Aiden's (aka SKRRRTT) personal site"}
        canonical={`https://azurich.fr${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://azurich.fr${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "azurich.fr",
          description: "azurich personal site",
          images: [
            {
              url: "https://cdn.discordapp.com/attachments/1032647397328830495/1032648354909397053/unknown.png?ex=67943ff9&is=6792ee79&hm=588014cae26e22c2bb4441f78f1a21a0abd500e52d5e091c68002f6415a6912c&",
              alt: "kurt",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
