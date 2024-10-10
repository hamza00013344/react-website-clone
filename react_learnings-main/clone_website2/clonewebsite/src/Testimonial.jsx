import bndabulb from './bndabulb.webp'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";


export function Testimonials(){
    return(
        <>
             <div id="test" style={{marginTop: '100px'}}>
        <h4 style={{textAlign: 'center' , fontSize: '25px'}}>TESTIMONIALS</h4>
        <div style={{marginTop: '0px', textAlign: 'center'}}>
            <span
                style={{display: 'inline-block', width: '10px', height: '10px',  backgroundColor:' #e56a48', borderRadius: '50%', margin: '0 1px'}}></span>
            <span
                style={{display: 'inline-block', width: '10px', height: '10px',  backgroundColor:' #e56a48', borderRadius: '50%', margin: '0 1px'}}></span>
            <span
                style={{display: 'inline-block', width: '10px', height: '10px',  backgroundColor:' #e56a48', borderRadius: '50%', margin: '0 1px'}}></span>
        </div>
        <div style={{marginLeft: '120px', display: 'inline-block', marginBottom:'100px' }}>
            <img src={bndabulb} alt="bulb jesa bnda" width="220px" height="220px" style={{marginBottom:'100px'}} />
        </div>
        <div style={{display: 'inline-block', marginLeft: '40px'}}>
        <RiDoubleQuotesL   style={{fontSize: 'large', marginLeft:'0px',paddingBottom:'300px'}} />
        </div>
        <div style={{display: 'inline-block' , marginLeft: '10px' , marginTop: '20px'}}>
        <FaStar style={{color: 'yellow'}} />
        <FaStar style={{color: 'yellow'}} />
        <FaStar style={{color: 'yellow'}} />
        <FaStar style={{color: 'yellow'}} />
        <FaStar style={{color: 'yellow'}} />
            <p style={{lineHeight: '1.5' , fontSize: '18px'}}>1st order from Lee Ann's southern Kitchen, April 6, 2024. We
                ordered the Catfish meal<br/> with 3 sides
                Corn, amazing Mac & cheese and dirty rice . Also wonderful<br/> Cheeseburger meal with corn on cob, dirty
                Rice & perfectly cooked French fries. The<br/> Catfish was absolutely fantastic and big pieces, all the
                sides were very tasty and you<br/> can tell everything is made with great ingredients & homemade. Great
                portions also.<br/> Included utensils, napkins, ketchup, tarter sauce. We most diffently will be
                ordering<br/>
                again from this wonderful new establishment.</p>
            <div>
            <RiDoubleQuotesR style={{fontSize: 'large' , marginLeft:'400px' , paddingBottom: '20px'}} />
            </div>
            <hr style={{height: '4px' , width: '50px' ,  backgroundColor: '#e56a48' , border: '#e56a48',marginLeft: '2px'}} />
            <b>
                Mr. & Mrs. Doug Tharp:
            </b>
            Willis, Texas
        </div>
    </div>
        </>
    )
}