import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
const srcLogo = '/assets/images/logo/mapstore-logo-xs.png'

const Logo = ({title, className, children}) => {
  return (
    <Link href="/">      
      <a className={`${className || ''} d-block logo-link `} href="/" title={title}>
        <Image className="logo-img" alt={title} width={200} height={200} src={srcLogo}/>
        {children && children != '' && children}
      </a>
    </Link>
    
  )
}
export default React.memo(withRouter(Logo))