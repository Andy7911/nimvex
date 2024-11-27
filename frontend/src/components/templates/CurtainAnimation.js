import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CurtainAnimation() {

    const leftCurtain = useRef(null)
    const rightCurtain = useRef(null)
    useEffect(() => {

        const t1 = gsap.timeline();

        t1.to(leftCurtain.current, {
            x: "-100%", // Déplace le rideau gauche hors de l'écran
            duration: 2.5,
            ease: "power2.out",
        })
        t1.to(rightCurtain.current, {
            x: "100%", // Déplace le rideau gauche hors de l'écran
            duration: 2.5,
            ease: "power2.out",
        })

    }, [])

    return (
        <div style={{ position: "absolute", height: "100vh", width:'100vw', top:0, overflow: "hidden" }}>
        {/* Rideau gauche */}
        <div
          ref={leftCurtain}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#000",
            zIndex: 10,
          }}
        ></div>
  
        {/* Rideau droit */}
        <div
          ref={rightCurtain}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#000",
            zIndex: 10,
          }}
        ></div>
  
        {/* Contenu sous le rideau */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "#fff",
            textAlign: "center",
            paddingTop: "40vh",
          }}
        >
          <h1 style={{font:45, color:'red'}}>Bienvenue dans notre site !</h1>
        </div>
      </div>


    )

}
