import Image from 'next/image';

const LogoComp = () =>{
    return(
        <>
        <section className="brand-logo-section">
        <div className="brand-logo-container">
            <h1>Organized By</h1>
            <div className="brand-logo">
                <ul>
                    <li>
                        <Image src="/assets/images/logo/LogoIYSA.webp" alt="" width={150} height={150}/>
                    </li>
                    {/* <li>
                        <img src="/assets/images/logo/LOGOAKTUARIA.png" alt=""/>
                    </li> */}
                     <li>
                        <Image src="/assets/images/logo/warmadewa.png" alt="" width={150} height={150}/>
                    </li>
                </ul>
            </div>
            <br/>
            <h1>Supported By</h1>
            <div className="brand-logo">
                <ul>
                    <li>
                        <Image src="/assets/images/logo/MIICA.png" alt="" width={150} height={150}/>
                    </li>
                    {/* <li>
                        <img src="./assets/images/logo/MYSA.png" style={{height: "170px"}} alt=""/>
                    </li> */}
                </ul>
            </div>
        </div>
        </section>
        </>
    )
}

export default LogoComp