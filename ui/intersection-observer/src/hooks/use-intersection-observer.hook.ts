import { useRef }    from 'react'
import { useEffect } from 'react'

const doNothing = () => {
  // do nothing
}

const useIntersectionObserver = (onIntersection: (id: string) => void = doNothing) => {
  const observers: Map<string, { ref: any }> = new Map()

  const getObserverOptions = (id: string): { ref: any } => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef(null)

    observers.set(id, { ref })
    return {
      ref,
    }
  }

  useEffect(() => {
    const intersectionObservers: Map<number, IntersectionObserver> = new Map()

    let isExecutionAllowed = false

    setTimeout(() => {
      isExecutionAllowed = true
    })

    Array.from(observers.keys()).forEach((key) => {
      const observer = observers.get(key)

      const resizeObserver = new ResizeObserver(() => {
        if (observer?.ref.current) {
          const heightCoefficient =
            document.documentElement.clientHeight /
            // eslint-disable-next-line no-unsafe-optional-chaining
            observer?.ref.current.getBoundingClientRect().height
          const observerThreshold = heightCoefficient > 1 ? 1 : heightCoefficient

          if (!intersectionObservers.has(observerThreshold)) {
            intersectionObservers.set(
              observerThreshold,
              new IntersectionObserver(
                (entries) => {
                  if (entries && isExecutionAllowed) {
                    onIntersection((entries[0].target as any).observerId)
                  }
                },
                { threshold: observerThreshold }
              )
            )

            observer!.ref.current.observerId = key

            intersectionObservers.get(observerThreshold)!.observe(observer?.ref?.current)
          } else {
            observer!.ref.current.observerId = key

            intersectionObservers.get(observerThreshold)!.observe(observer?.ref?.current)
          }
        }
      })

      resizeObserver.observe(observer?.ref.current)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    getObserverOptions,
  }
}

export { useIntersectionObserver }
