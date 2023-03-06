import './LandingBody.css'


function LandingBody() {

  return (
    <div>
        <div className="my-5 pt-5 container-fluid">
            <div class="row">
                <div className="col-lg imageDiv">

                <div className='shadow'></div>

                <img src="women-tech.jpg" alt="women stock" />

                </div>

                <div className='ms-5 me-5 mt-5 col-lg ps-5'>
                    <div className='mb-5'>
                        <p className="colorBodyText bodyTitle"> <strong>Women in Tech at Miami-Dade College</strong> </p>
                    </div>

                    <div>
                        <p className="colorBodyText me-5 bodyP"> Empower yourself with our student-centered, hands-on approach to learning by joining a network for women and non-binary leaders in tech</p>
                    </div>

                </div>

            </div>
        </div>
        <div className='mt-5 pt-5'>

            <div className='benefits d-flex py-5 text-center justify-content-center'>

                <div>
                    <p className='text-white banner'>Access to <strong>mentorship</strong> opportunities that can help you develop your skills and career path</p>
                </div>

                <div>
                    <p className='text-white banner' >Expand your tech network by joining our community of <strong>80+ members </strong>across all campuses</p>
                </div>

                <div>
                    <p className='text-white banner'>Support in your career goals through <strong>events</strong>, <strong>workshops</strong>, and <strong>resources</strong> offered by the club</p>
                </div>

            </div>

        </div>




    </div>
    
  );
}



export default LandingBody;
