import deliveryimg from './800_660e43b144931_filter_660e50f0cd028.webp'
import carimg from './car.webp'
import bag from './bag.webp'
import kabab from './kabab.jpg'
export function Deliverypage() {
    return (
        <>
            <div id="delivery" style={{ backgroundColor: "#e8e5e3" }}>
                <h1
                    style={{ marginTop: '0px', fontSize: "32px", fontWeight: "normal", marginBottom: "0px", textAlign: "center", fontSize: "1.953em", textShadow: "1px 1px 1px rgba(0,0,0,.1)", fontFamily: "'Caladea', Arial, sans-serif" }}>
                    DELIVERY/PICK UP</h1>
                <div style={{ marginTop: " 0px", textAlign: "center" }}><br />
                    <span
                        style={{ display: 'inline-block', width: "10px", height: "10px", backgroundColor: "#e56a48", borderRadius: " 50%", margin: "1px" }} ></span>
                    <span
                        style={{ display: 'inline-block', width: "10px", height: "10px", backgroundColor: "#e56a48", borderRadius: " 50%", margin: "1px" }} ></span>
                    <span
                        style={{ display: 'inline-block', width: "10px", height: "10px", backgroundColor: "#e56a48", borderRadius: " 50%", margin: "1px" }} ></span>
                </div>



                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8e5e3' }}>
                    <div style={{ flex: '1', maxWidth: '350px', height: '400px', padding: '20px' }}>
                        <img src={deliveryimg} style={{ width: '350px', height: ' 400px', objectFit: 'cover' }} />
                    </div>

                    <div
                        style={{ flex: '1', maxWidth: '350px', height: '360px', padding: '20px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '15px', textAlign: 'left' }}>Pick Up</h2>
                        <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#555', textAlign: 'left' }}>
                            Swing by and grab your favorite dishes to<br /> enjoy at home—we promise you won't be<br /> disappointed!
                            You can
                            order your food over<br /> the phone or online. Call or text us when<br /> you arrive. Order Now!
                        </p>
                    </div>
                    <div style={{ flex: '1', maxWidth: '350px', height: '400px', padding: '20px' }}>
                        <img src={bag} alt="Pick Up Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
            {/* second three images */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: ' #e8e5e3' }}>
                <div style={{ flex: '1', maxWidth: '310px', height: '360px', padding: '20px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '15px', textAlign: ' left' }}>Pick Up</h2>
                    <p style={{ fontSize: '16px', lineHeight: '1.2', color: "#555 ", textAlign: 'left' }}>
                        Delivery is only available in the Conroe and<br /> Willis areas. Don't wait any longer to<br /> satisfy your
                        cravings—place an order today<br /> and treat yourself to a mouthwatering<br /> meal. Give us a call now to
                        experience
                    </p>
                </div>
                <div style={{ flex: '1', maxWidth: '390px', height: '400px', padding: '20px' }}>
                    <img src={carimg} alt="Delivery Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div
                    style={{ flex: '1', maxWidth: '310px', height: '360px', padding: '20px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '15px', textAlign: 'left' }}>Order Online</h2>
                    <p style={{ fontSize: '16px', lineHeight: '1.2', color: '#555', textAlign: 'left' }}>
                        Explore our mouthwatering menu at your convenience! With our easy online ordering system, you can
                        indulge in our delicious food wherever you are. Plus, you have the flexibility to choose between ointed!
                        You can
                        order your food over the phone or online. Call or text us when you arrive. Order Now!
                    </p>
                    <br />
                    <a  style={{textDecoration:'none',color:' #e56a48', textAlign: 'left'}}>
                        ORDER NOW <b /><b />
                    </a>
                </div>
            </div>
{/* pic advert */}
<div style={{backgroundColor:'#e8e5e3', display: 'flex', height: '100%'}}>

<div style={{float: 'left', backgroundColor:' #e56a48', marginTop: '100px', justifyContent: 'center'}}>
    <p style={{textAlign: 'center'}}>
    <h1 style={{color: 'white',lineHeight: '1.2',marginLeft: '60px', fontSize: '48px'}}>Experience<br/>the legacy
        of<br/>Lee Anna<br/>herself</h1>
    </p>
    <p style={{color: 'white',lineHeight: '1.2', fontSize: '28px',marginLeft:'60px',paddingRight: '40px'}}>Don't wait
        any longer,<br/> call us now and place<br/> your order! We are ready<br/> to treat your taste buds<br/> with
        our exquisite<br/> southern cuisine.</p>
    <button
        style={{backgroundColor: 'white', color: '#e56a48', textAlign:' justify' , borderRadius:'10px', marginLeft: '60px',padding:' 15px', borderColor:'white',border:' 0px',fontWeight:' 400',paddingRight:' 50px'}}>
        <i class="fa-solid fa-phone" style={{color:' #e56a48', marginLeft:'15px',marginRight:' 1px'}}></i>CALL LEE
        ANNA TODAY</button>
</div>
<div style={{marginTop: '100px'}}>
    <img src={kabab} alt=" "  style={{float: "right" , width : "860px" ,height : "669px" }} />
</div>
</div>
        </>

    )
}