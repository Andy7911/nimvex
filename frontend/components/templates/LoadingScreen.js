import React,{CSSProperties} from 'react'
import { ClockLoader} from 'react-spinners'
import bonjour from '../../public/img/bonjour.gif'
import Image from 'next/image'
import gsap from 'gsap';




export default function LoadingScreen() {
    const override  = {
        position:"absolute",
        top:'50%',
        left:'50%',
        display: "block",
        margin: "auto auto",
        borderColor: "blue",
      };
    return (
        <div className='loadingScreen'>

            {/* <ClockLoader
                color='#B9FF66'
                cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}

            <Image src={bonjour} width={100} height={100}/>
        </div>
    )
}
