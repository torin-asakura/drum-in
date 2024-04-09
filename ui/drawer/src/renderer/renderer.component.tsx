import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { Children }        from 'react'
import { useState }        from 'react'
import { useEffect }       from 'react'
import { createPortal }    from 'react-dom'

import { Layout }          from '@ui/layout'

const Renderer = ({ children, active }) => {
  const [doc, setDoc] = useState<any>(null)

  useEffect(() => {
    setDoc(document)
  }, [])

  return doc?.body
    ? createPortal(
        <Layout>
          {Children.map(children, (child) => (
            <AnimatePresence>{active && child}</AnimatePresence>
          ))}
        </Layout>,
        (doc as any).body
      )
    : null
}

export { Renderer }
