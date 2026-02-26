import Image from 'next/image';

const AboutComp = () =>{
    return(
        <>
        <section className="about-section" id="about">
            <div className="about-container">
                <h1>About IYCO</h1>
                <div className="content">
                    <div className="left-side">
                        <Image src="/assets/images/logo/IYCO.png" alt="" width={500} height={500} />
                    </div>
                    <div className="right-side">
                        <h2>Objective</h2>
                        <p>An event for the achievement of talented young academics from various countries around the world     in solving global problems.</p>
                        <h2>Competition Category</h2>
                        <p>Online competition for Indonesia and International Participants.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutComp