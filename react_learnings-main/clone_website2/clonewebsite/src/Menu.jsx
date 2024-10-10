import roast from './roast.webp'
import corpchop from './corpchop.webp'
import chicagoburger from './chicagoburger.webp'
import wingplate from './wingplate.webp'
export function Menu() {
    return (
        <>
            <div id="menu" style={{ backgroundColor: '#e8e5e3', paddingBottom: '100px' }}>
                <div style={{ padding: '30px 90px' }}>
                    <p style={{ textAlign: 'center', fontSize: '25px'}}>
                        MENU
                    </p>
                    <div style={{ marginTop: '0px', textAlign: 'center' }}>
                        <span
                            style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#e56a48', borderRadius: ' 50%', margin: ' 0 1px' }}></span>
                        <span
                            style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#e56a48', borderRadius: ' 50%', margin: ' 0 1px' }}></span>
                        <span
                            style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#e56a48', borderRadius: ' 50%', margin: ' 0 1px' }}></span>
                    </div>
                    <div>
                        <p style={{ textAlign: 'center', fontSize: '20px' }}> <em>Your choice of sides: Corn on the cob, crinkle ranch
                            fries, white rice, dirty rice and mac & cheese.</em>
                        </p>
                        <div style={{ display: 'flex', marginLeft: '250px' }}>
                            <button
                                style={{ borderRadius: '5px', backgroundColor: '#e56a48', border: ' 1px solid #e56a48', textAlign: 'center', padding: ' 10px 15px', color: 'white', margin: ' 5px' }} >
                                Savor the South with Us
                            </button>
                            <button
                                style={{ borderRadius: '5px', backgroundColor: '#e56a48', border: ' 1px solid #e56a48', textAlign: 'center', padding: ' 10px 15px', color: 'white', margin: ' 5px' }}>
                                Sides
                            </button>
                            <button style={{borderRadius: '5px', backgroundColor: '#e56a48',border:' 1px solid #e56a48', textAlign: 'center', padding:' 10px 15px', color: 'white',margin:' 5px'}}>
                                Drinks
                            </button>
                            <button
                                style={{borderRadius: '5px', backgroundColor: '#e56a48',border:' 1px solid #e56a48', textAlign: 'center', padding:' 10px 15px', color: 'white',margin:' 5px'}}>
                                Lunch Special - Served 11 AM to 2 pm only
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: '40px'}}>
                    <p>
                        <h3 style={{fontSize: '24px'}}>Savor the South with Us</h3>
                    </p>
                </div>
                <div style={{width: '93%', backgroundColor:'white', marginLeft:'40px', marginRight:'40px', display: 'flex'}}>
                    <div><img src={roast} width="250px" style={{margin: '10px;'}}/></div>
                    <div style={{marginLeft: '10px'}}>
                        <h4>
                            Lee Anna's Fish Plate
                        </h4>
                        <p style={{fontSize: '20px', display: 'inline-block',marginTop: '0px'}}>2 Catfish deep fried, served with a
                            Texas toast and
                            your choice of 3 sides.
                        </p>
                        <span style={{display: 'inline-block' , marginLeft: '150px',fontSize: '23px'}}>
                            $ 18.99
                        </span>
                    </div>
                </div>
                <div
                    style= {{width: '93%' , backgroundColor:'white' , marginLeft: '40px', marginRight: '40px', display: 'flex',  marginTop: '40px'}}>
                    <div><img src={corpchop} width="250px" style={{margin: '10px'}} /></div>
                    <div style={{marginLeft: '10px'}}>
                        <h4>
                            Pork Chop Plate
                        </h4>
                        <p style={{fontSize: '20px', display: 'inline-block' , marginTop: '0px'}} >2 Juicy pork chops grilled to
                            perfection, served with
                            your choice of 3 sides
                        </p>
                        <span style={{display: 'inline-block' , marginLeft: '150px',fontSize: '23px'}}>
                            $ 16.99
                        </span>
                    </div>
                </div>
                <div
                    style={{width: '93%', backgroundColor:'white', marginLeft:' 40px', marginRight:' 40px', display: 'flex' , marginTop: '40px'}}>
                    <div><img src={chicagoburger} width="250px" style={{margin: '10px'}} /></div>
                    <div style={{marginLeft: '10px' , marginBottom: '0px'}}>
                        <h4>
                            Lee Anna's Chicago Style Burgers
                        </h4>
                        <p style={{fontSize: '20px', display: 'inline-block',marginTop: '0px'}}>Sink your teeth into our signature
                            Lee Anna's Chicago
                            Style Burgers, topped with<br/> Lea Anna's Sauce, melted cheese and fresh lettuce, tomatoes, grilled
                                onion and<br/> green bell peppers served with 2 sides of choice.
                                </p>
                                <span style={{display:' inline-block', marginLeft: '100px',fontSize: '23px'}}>
                                    $ 18.99
                                </span>
                            </div>
                    </div>

                    <div
                        style={{width: '93%', height: "200px", backgroundColor:'white', marginLeft: '40px', marginRight: '40px', display: 'flex',marginTop: '40px'}}>
                        <div><img src={wingplate} width="250px" style={{margin: '10px'}} /></div>
                        <div style={{marginLeft: '10px'}}>
                            <h4>
                                Wing Plate
                            </h4>
                            <p style={{fontSize: '20px' , display: 'inline-block'}}>3 whole wings your choice of traditional or lemon
                                pepper wings with a country<br/> bread and served with your choice of 2 sides.

                            </p>
                            <span style={{display: 'inline-block' , marginLeft: '150px',fontSize: '23px'}}>
                                $ 14.99
                            </span>
                        </div>
                    </div>
                </div>
            </>
            )
}