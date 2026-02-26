import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                <img src="/assets/images/logo/IYCO.png" alt=""/>
                <h1>International Youth Chemistry Olympiad</h1>
                <p>Registration is now open for the International Youth Chemistry Olympiad! <br /> Join this prestigious event and gain an unforgettable experience!
                </p>
                <br />
                <Link href="registration" className="registration-button">Registration Here!</Link>
                <Link href="https://drive.google.com/file/d/1SSiUElHm2Hcb0WD2Dmm8lkQA5uKzNM_v/preview" target="_blank" className="registration-button">GuideBook</Link>
            </div>
        </section>
        </>
    )
}

export default HeroComp