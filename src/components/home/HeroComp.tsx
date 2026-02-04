import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                <img src="/assets/images/logo/IYCO.png" alt=""/>
                <h1>International Youth Chemistry Olympiad</h1>
                {/* <p>Registration is now open for the International Youth Chemistry Olympiad! <br /> Join this prestigious event and gain an unforgettable experience!
                </p> */}
                <br />
                <Link href="#"  className="registration-button">Coming Soon 2026</Link>
            </div>
        </section>
        </>
    )
}

export default HeroComp