import Image from 'next/image';
import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                <Image src="/assets/images/logo/IYCO.png" alt="" width={500} height={500}/>
                <h1>International Youth Chemistry Olympiad</h1>
                <p>Registration is now open for the International Youth Chemistry Olympiad! <br /> Join this prestigious event and gain an unforgettable experience!
                </p>
                <br />
                {/* <Link href="registration" className="registration-button">Registration Here!</Link> */}
                <Link href="#" className="registration-button">Registration Closed!</Link>
                {/* <Link href="https://drive.google.com/file/d/1-eIYaEq6btaO41-XnlutwoGWxhnsgHeH/view?usp=sharing" target="_blank" className="registration-button">GuideBook</Link> */}
            </div>
        </section>
        </>
    )
}

export default HeroComp