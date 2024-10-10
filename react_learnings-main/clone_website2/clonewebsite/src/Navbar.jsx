import myimage from './400_660e426d71914.webp'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export function Navbar() {

    return (
        <>
       
            <div style={{display:'inline-flex'}}>
                <img src={myimage} width={80} />
                <h3 style={{marginTop:'20px',marginLeft: "3px", display: "inline-flex", fontsize: "22px", fontstyle: "inherit", fontweight: "bold", display:'inline-block' }}>Lee ANNA's Southern Kitchen</h3>
                <a href="" style={{ marginTop:'30px',textDecoration: "none", marginLeft: "200px", color: 'black', fontWeight: "bold", fontFamily: 'Arial,Helvetica, sans-serif', }} >Home</a>
                <a href="" style={{marginTop:'30px', textDecoration: "none", marginLeft: "20px", color: 'black', fontWeight: "bold", fontFamily: 'Arial,Helvetica, sans-serif', }}>About</a>
                <a href="" style={{marginTop:'30px', textDecoration: "none", marginLeft: "20px", color: 'black', fontWeight: "bold", fontFamily: 'Arial,Helvetica, sans-serif', }}>Delivery/Pick Up  </a>
                <a href="" style={{marginTop:'30px', textDecoration: "none", marginLeft: "20px", color: 'black', fontWeight: "bold", fontFamily: 'Arial,Helvetica, sans-serif', }}>Menu</a>
                <a href="" style={{marginTop:'30px', textDecoration: "none", marginLeft: "20px", color: 'black', fontWeight: "bold", fontFamily: 'Arial,Helvetica, sans-serif', }}>More</a>
                <FaEnvelope style={{margin: '15px', marginTop:'32px'}} />
                <FaPhoneAlt style={{margin:'15px', marginTop:'32px'}} />
                <button style={{ marginLeft: "20px", padding: "10px 15px", borderBottom: "#e56a48", borderRadius: "18px", fontFamily: "Cambria", backgroundColor: "#e56a48", color: "white", margin: "15px", border: "1px solid #e56a48", fontSize: "large", fontWeight: "bold", }} >ORDER ONLINE</button>
            </div>
            
        </>
         
    );
}