import { Fragment } from "react"
import { headers } from "next/headers"

export async function SEO() {
  const headersList = headers()
  const domain = (await headersList).get("host") || "yourdomain.com"

  return (
    <Fragment>
      <link rel="canonical" href={`https://${domain}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Brand" />
      <meta name="application-name" content="Brand" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />
    </Fragment>
  )
}

