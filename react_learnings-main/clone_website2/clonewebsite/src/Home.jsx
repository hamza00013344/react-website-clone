import img from './2000_660e7bf3461df.webp'
import btnimg from './cutlery5f22837ab74ff.svg'
export function HomePage() {
return(
    <>
         <div style={{ width: "613px", height: "640px", float: "left", backgroundColor: "#e8e5e3", textAlign: "start" }}>

<p style={{ marginTop: "100px", marginLeft: "80px", fontWeight: "bold", fontSize: "72px", fontFamily: " Arial, Helvetica, sans-serif" }}>
    Delicious
    <br /> Comfort<br />Food!
</p>
<hr style={{ height: "2px", borderWidth: "0px", color: "#e56a48", backgroundColor: "#e56a48", padding: "2px", width: "90px", marginLeft: "80px" }} />

<p style={{ marginLeft: "80px", fontSize: "25px" }}>
    Savor the Soulful Taste of Lee<br /> Anna's Southern Kitchen
    Authentic <br /> Dishes!
</p>

<button style={{ marginLeft: "80px", backgroundColor: " #e56a48", fontFamily: "sans-serif", borderRadius: "15px", borderColor: "white", padding: " 20px 40px", color: "white", fontSize: " 15px" }}>
<img src={btnimg} style={{ backgroundColor: "e56a48", width: "1em", height: " 1em", marginRight: "5px", display: "inline-block" }}/>ORDER
        NOW
        </button>
</div>
<div style={{backgroundColor:"#e8e5e3",float: "right",height:" 640px"}}>
    <img src={img} width="650" height="560" />
    </div>
    </>
)               

}
