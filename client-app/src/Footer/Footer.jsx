import "./Footer.css"

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerLogo'>
            <h1>HOME CONNECT LOGO</h1>
        </div>
        <div className='footerServices'>
            <div className="footerServicess">
                <p>Our intuitive online platform is designed to streamline the home rental process. Whether you are a landlord looking to list your property or a tenant searching for the ideal home, our user-friendly interface ensures a smooth and efficient experience.<br/><br/>We believe that everyone deserves access to quality housing without breaking the bank. Our platform offers a range of affordable rental options, ensuring that cost is never a barrier to finding a comfortable and safe place to call home.<br/><br/>We are dedicated to making home rentals accessible to a diverse range of individuals and families. Our platform caters to various needs and preferences, providing a wide selection of rental properties in different locations.<br/><br/>Transparency and security are at the core of our operations. Landlords and tenants can trust our platform for secure transactions, clear communication, and a hassle-free rental experience.
                Whether you are a property owner eager to connect with responsible tenants or an individual searching for the perfect home, HOME CONNECT is here to simplify the process and elevate your rental experience.</p>
            </div>
            <div className='footerContact'>
                <div>
                    <ul>
                        <li><img src="/icon/facebookicon.png" alt="" /><a href="">Facebook</a></li>
                        <li><img src="/icon/instangramicon.png" alt="" /><a href="">Instagram</a></li>
                        <li><img src="/icon/linkedinicon.png" alt="" /><a href="">Linkedin</a></li>
                        <li><img src="/icon/twittericon.png" alt="" /><a href="">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footerRightReserved'>
            <p className='Reserved'>	&#169; 2023 HOME CONNECT. All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer