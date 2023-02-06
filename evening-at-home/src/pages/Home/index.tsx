import React from 'react'
//components
import Collection from '../../Components/Collection'
import Main from '../../Components/Main'
import FAQ from '../../Components/FAQ'
import About from '../../Components/About'
//types 

const Home: React.FC = () => {
    return (
        <div>
            <Main />
            <Collection />
            {/* <About />
            <FAQ />  */}
        </div>
    )
}

export default Home