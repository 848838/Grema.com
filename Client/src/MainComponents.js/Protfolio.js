import React from 'react'
import bg from '../Assets/text bg.jpg'
function Protfolio() {
    return (
        <div style={{ backgroundImage: `url(https://media.istockphoto.com/id/1273852653/photo/old-scratched-film-strip-grunge-texture-background.jpg?s=612x612&w=0&k=20&c=OTzQ4ThsRnvLhAnia1iwcE997l-XHrAlfkTZDBrLcZA=)`}}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <h1 className='we_are256' style={{}}>SOON TO BE</h1>


            </div>

            <div style={{ margin: 'auto',  }}>

                <h1 className='we_are2356'  >UPDATED </h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center',  marginTop:200}}>
                <img style={{ height: '45vh', width: '100%', opacity: '40%', borderRadius: 20 }} src={bg} className='responsive-image' />
                <div className='bottom_text'><h1>READY TO ELIVATE YOUR <span style={{ color: 'rgb(181,115,76)' }}>BRAND</span></h1>
                    <p className='para_footer_near'>Pixel Forage is here to bring your ideas to life , Pixel by Pixel . Contact us for exceptional web design, creative branding , and strategic marketing . Let's  create someting incredible!</p>
                    <button className='Button_contact_mes'>Connect With Us
                        <i id='buttonHoverss' className="bi bi-chevron-right"></i>

                    </button>
                </div>


            </div>
        </div>
    )
}

export default Protfolio