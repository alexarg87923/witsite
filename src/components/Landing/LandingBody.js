import './LandingBody.css'


function LandingBody() {

  return (
    <div>
        <div className="mt-5 d-flexbox">

            <div style={{ position: 'relative', maxHeight: '300px',maxWidth: '800px'}}>

            <div style={{ 
                position: 'absolute', 
                bottom: '-25px',
                backgroundColor: 'pink',
                width: '103%',
                height: '61%',
                zIndex: -1,
                opacity: .7,
                maxHeight: '183px'
            }}></div>

            <img src="women-tech.jpg" alt="women stock" />

            </div>

            <div className='ms-5 me-5'>
                <div className='mb-5'>
                    <p className="colorBodyText" style={{fontSize:'60px', lineHeight: '57px'}}> <strong>Women in Tech at Miami-Dade College</strong> </p>
                </div>

                <div>
                    <p className="colorBodyText" style={{fontSize:'40px', wordSpacing: '-3px', lineHeight: '37px'}}> Join a <strong>network for women and non-binary leaders </strong>in tech with our student-centered, hands-on approach to learning.</p>
                </div>

            </div>

        </div>

        <div className='mt-5 pt-5'>
            <div className='benefits d-flex pt-5 pb-5 justify-content-between'>

                <div className='ps-5'>
                    <h1 className='text-white'>Connect with mentors and tech organizations outside of MDC</h1>
                </div>

                <div>
                    <h1 className='text-white'>80+ members across all campuses</h1>
                </div>

                <div className='pe-5'>
                    <h1 className='text-white'>Get career support and programming experience</h1>
                </div>

            </div>

        </div>




    </div>
    
  );
}



export default LandingBody;
