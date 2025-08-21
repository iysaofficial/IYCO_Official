const NewsletterComp = () =>{
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter-container">                
                <div className="newsletter_wrap">
                    <div className="newsletter_item">
                        <div>
                            <h2>Subscribe to our newsletter</h2>
                            <p>Subscribe to our newsletter to receive our latest news and exclusive deals.</p>
                        </div>
                        <form action="https://formspree.io/f/xoqgjrok" method="POST">
                            <div className="input_box">
                                <input type="email" name="email" placeholder="Email Address"/>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
    
            </div>
        </section>
        </>
    )
}

export default NewsletterComp