import burgerimg from './burger.webp'
import btnimg from './cutlery5f22837ab74ff.svg'
export function Burger() {
    return (
        <>
            <div style={{ backgroundColor: '#e8e5e3', float: "left", height: '590px' }}>
                <img src={burgerimg} width="650" height="780" />
            </div>
            <div id="abt" style={{ width: "612px", height: "780px", float: " left", backgroundColor: "white", textAlign: "start" }}>
                <p
                    style={{ marginTop: "100px", marginLeft: "80px", fontWeight: "bold", fontSize: "42px", fontFamily: "Arial, Helvetica, sans-serif" }}>
                    Welcome to Lee<br /> Anna's<br />
                    Southern Kitchen
                </p>
                <hr
                    style={{ height: "2px", borderWidth: "0px", color: "#e56a48", backgroundColor: "#e56a48", padding: "2px", width: "90px", marginLeft: "80px" }} />
                <div style={{marginRight: "50px"}}>
                    <p style={{ marginLeft: "80px", fontSize: "20px" }}>
                        Indulge in the heartwarming flavors of Lee<br /> Anna's southern
                        kitchen. Our menu features a<br /> delightful range of country-style dishes that<br /> will transport you
                        back to your
                        grandmother's<br /> kitchen. Each recipe is crafted with love and<br />care, passed down through
                        generations.<br /><br />

                        Lee Anna herself was a remarkable woman<br /> whose spirit lives on through the magnificent meals we serve
                        to our
                        family and community.</p><br /><br />
                    <button
                        style={{ backgroundColor: " #e56a48", fontFamily: "sans-serif", borderRadius: "15px", borderColor: "white", padding: "20px 40px", color: "white", fontSize: "15px" }}>
                            <img
                            src={btnimg}
                            style={{ backgroundColor: "#e56a48", width: "1em", height: "1em", marginRight:"5px" }} />SEE
                            OUR MENU</button>
                </div>
            </div>
        </>
    );

}