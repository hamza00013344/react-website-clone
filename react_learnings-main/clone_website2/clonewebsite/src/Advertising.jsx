import pageimg from './pageimg.webp'
// import { FaPhone } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";


export function Advert() {
    return (
        <>
            <div style={{ width: ' 100%', margin: ' 0', padding: ' 0', boxSizing: 'border-box', display: 'flex', height: '100vh' }}>
                <div style={{ width: '70% ', height: '100%', display: 'flex' }}>
                    <img src={pageimg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div
                    style={{ width: '30%', display: ' flex', backgroundColor: ' #e56a48', color: 'white', alignIems: 'center', justifyContent: 'center', padding: ' 20px', boxSizing: 'borderBox' }}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>ARRIVING SOON IN 2025!</h2>
                        <p style={{ lineHeight: ' 1.5', fontSize: '37px', textAlign: 'left', marginLeft: '40px', marginRight: '40px' }}>
                            Get Ready To Gather, Eat, And Celebrate Country Dining At Lee Anna's Southern Kitchen.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div id="Contactus" style={{ textAlign: 'center', fontSize: '25px', fontWweight: ' 400', marginTop: '100px' }}>
                    CONTACT US
                </div>
                <div style={{ textAlign: 'center', marginTop: '15px ' }}>
                    <span
                        style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#e56a48', borderRadius: '50%', margin: ' 0 1px ' }}></span>
                         <span
                        style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#e56a48', borderRadius: '50%', margin: ' 0 1px ' }}></span>
                    <span
                        style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#e56a48', borderRadius: '50%', margin: '0 1px' }}></span>
                </div>
                <div style={{ display: 'inline-block', marginLeft: '100px', textAlign: 'center' }}>
                    <p style={{ fontSize: 'large' }}>
                        159 Cooper Creek Lane, Willis, TX, USA
                    </p>

                   <a href="#" style={{ textDecoration: 'none', color: '#e56a48' }}> +1-8036163103</a><br />

                    <FaWhatsappSquare style={{ color: 'green', marginRight: ' 6px' }} />
                    <a href="#" style={{ textDecoration: 'none', color: '#e56a48' }}>+1-8036163103</a><br />

                    {/* <FaEnvelopeOpen style="color: #e56a48;margin-right: 6px;" /> */}
                    <a href="#" style={{ textDecoration: 'none', color: ' #e56a48' }}>cbraxton@leeannasouthernkitchen.com</a><br />
                    <p style={{ marginTop: '2px', font: 'large' }}>
                        <FaClock style={{ color: '#e56a48', marginRight: '6px ' }} />
                        SUN 11:30am to 9:30PM</p>
                </div>

                <div style={{ display: 'inline-block', float: 'right', marginRight: '40px', }}>
                    <form action="" style={{border:''}}>
                        <input type="text" placeholder="Name" style={{ padding: '15px 25px', textAlign: 'left' }} />
                        <input type="text" placeholder="Phone Number" style={{ marginLeft: '20px', padding: ' 15px 25px' }} /><br></br>
                        <input type="text" placeholder="Email Address" style={{ marginTop: '20px', padding: '15px 145px' }} /><br></br>
                        <textarea 
                            placeholder="Message"
                            style={{ marginTop: '20px', padding: '30px 145px' }}>
                        </textarea><br></br>
                        <button
                            style={{ marginTop: '20px', padding: '15px 185px', backgroundColor: '#e56a48', color: 'white', border: 'none', borderRadius: '10px' }}>
                            CONTACT US
                        </button>
                    </form>
                </div>
            </div>

                    </>
                    )

}