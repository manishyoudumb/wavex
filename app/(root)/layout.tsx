import React, { Children, ReactNode } from 'react'

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
        Navbar
        {children}
        Footer
    </main>
  )
}

export default Rootlayout