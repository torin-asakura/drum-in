import Head                  from 'next/head'
import React                 from 'react'
import { PropsWithChildren } from 'react'
import { FC }                from 'react'

export const GoogleTagManager: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TC9C3TF3');
        `,
        }}
      />
    </Head>
    <noscript>
      <iframe
        src='https://www.googletagmanager.com/ns.html?id=GTM-TC9C3TF3'
        height='0'
        width='0'
        style={{ display: 'none', visibility: 'hidden' }}
        title='Google Tag Manager'
      />
    </noscript>
    {children}
  </>
)
