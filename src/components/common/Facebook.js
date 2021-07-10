import React from 'react';
import FacebookProvider, { Comments } from 'react-facebook-next';


export const FbComponent = (url) => {
  return (
    <>
      {url && (
        <FacebookProvider appId="1167265347082574">
          <Comments href={process.env.NEXT_PUBLIC_SITE_URL + url} className="w-100" width="100%" />
        </FacebookProvider>
      )
      }
    </>
  )
}
