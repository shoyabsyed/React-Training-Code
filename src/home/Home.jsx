import React from 'react'
import CounterView from './components/CounterView'
import HomeBanner from './components/HomeBanner'
import Services from './components/Services'

export default function Home() {
    return <>
        <HomeBanner />
        <Services />
        <CounterView />
    </>
}
