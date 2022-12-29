import React             from 'react'
import { createContext } from 'react'
import { useContext }    from 'react'

class Store {
  public setActive: any

  setFunction(func) {
    this.setActive = func
  }
}

const store = new Store()

export const SpyScrollContext = createContext(store)

export const SpyScrollProvider = (props) => <SpyScrollContext.Provider value={store} {...props} />
export const SpyScrollConsumer = SpyScrollContext.Consumer

export const useSpyScroll = () => useContext(SpyScrollContext)
