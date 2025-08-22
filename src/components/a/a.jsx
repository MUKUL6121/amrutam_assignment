import './a.css'
import img from '../../assets/doctor.png';
import img2 from '../../assets/toi.png';
import img3 from '../../assets/conde-nast-traveler.svg';
import { useEffect, useState } from 'react';
function A() {
    const [title, settitle] = useState('')
    var slogan = [
        {
            'title': "Grow Your Practice"
        },
        {
            'title': "Reach More Patients"
        },
        {
            'title': "Enhance Expertise"
        }
    ];
    useEffect(() => {
        let i = 0;
        let vit = setInterval(() => {
            settitle(slogan[i].title);
            i = (i + 1) % slogan.length;
        }, 3000);
        Animation()
        return () => clearInterval(vit);
    });
    return (
        <div id="main" className=" p-4">
            <div id="main-a">
                <h2 className="mb-3" style={{ color: '#3e6a3c', fontWeight: "500" }}>A M R U T A M</h2>
                <div className='pt-2'>
                    <ul>
                        <li>About Us</li>
                        <li>Onboarding</li>
                        <li>FAQ</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>
            <div id="main-b" className='bg-red p-5 d-flex'>
                <div className='w-50'>
                    <p>Namaste, Welcome to Amrutam</p>
                    <h3 className='text-success'><b className='text-black'>Join Amrutam -</b> {title}</h3>
                    <p>connect with more patients, set your own schedule,<br />and grow your Ayurvedic practice effortlessly.</p>
                    <button className="bg-success p-1 ps-5 pe-5 border-3 ms-5">Join Now</button>
                    <div className='d-flex p-3 text-black'>
                        <p className="w-25 text-center p-1"><b>500+</b><br /> Average Active Users</p>
                        <div className='border border-1 border-dark align-self-center mb-3 m-2' style={{ height: "50px" }}></div>
                        <p className="w-25 text-center p-1"><b>40+</b><br /> Average Daily Free Calls</p>
                    </div>
                </div>
                <div className='w-50' style={{ backgroundColor: "#f4e4b1" }}>
                    <img src={img} alt="" style={{ height: "300px", width: "340px" }} />
                </div>
            </div>
            <div id="main-c">
                <div className='text-center p-2'>
                    <h3 className='text-success text-center'>Featured</h3>
                    <p>Recognized and celebrated by leading publications - Amrutam in the spotlight.</p>
                </div>
                <div className='p-3 text-center'>
                    <img src={img2} alt="" height="50px" width="140px" className='me-4' />
                    <img src={img3} alt="" height="50px" width="140px" className='me-4' />
                    <img src={img2} alt="" height="50px" width="140px" className='me-4' />
                    <img src={img3} alt="" height="50px" width="140px" className='me-4' />
                    <img src={img2} alt="" height="50px" width="140px" className='me-4' />
                    <img src={img3} alt="" height="50px" width="140px" className='me-4' />
                    <img src={img2} alt="" height="50px" width="140px" className='me-4' />
                </div>
            </div>
        </div>
    );
};

export default A;