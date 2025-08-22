import './c.css';
import phone_img from '../../assets/phone.png'

export default function C() {
    var data = [
        {
            'title': "Get Your Referral Code",
            'des': 'Contact us to recieve your referral code.'
        },
        {
            'title': 'Register on Amrutam',
            'des': 'Signup on the Amrutam Doctors app or website to join our specialist network.'
        },
        {
            'title': 'Complete Your KYC',
            'des': 'Fill in your details and upload the required documents for verification.'
        },
        {
            'title': 'Start Consulting',
            'des': 'Once verified, being offeing consultations and help patients.'
        }
    ];
    var steps = data.map((item, i) => {
        return (
            <div className='container border border-1 border-dark p-2 pb-0 mb-2 rounded-3 d-flex flex-column gap-0'>
                <h5 id={`${i}`}>Step {i + 1} : {item.title}</h5>
                <p id="splp" className=''>{item.des}</p>
            </div>
        )
    })

    var phone_data = [
        {
            'title': 'Value Your Practice',
            'img': <img src={phone_img} alt="" height="330px" width="190px" />
        },
        {
            'title': "Today's Healing Journey",
            'img': <img src={phone_img} alt="" height="330px" width="190px" />
        },
        {
            'title': 'Consultation Details',
            'img': <img src={phone_img} alt="" height="330px" width="190px" />
        }
    ];
    var phone = () => {
        return (
            <>
                {phone_data.map((item, i) => {
                    return (
                        <div key={i} className='text-center'>
                            {i % 2 == 0 ?
                                (
                                    <div className='pe-3'>
                                        <h5 className='text-success '>{item.title}</h5>
                                        <img src={phone_img} alt="" height="330px" width="180px" />
                                    </div>
                                ) :
                                (
                                    <div className='pe-3'>
                                        <img src={phone_img} alt="" height="330px" width="180px" />
                                        <h5 className='text-success '>{item.title}</h5>
                                    </div>
                                )
                            }
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div id="main-c" className="">
            <div className='text-center '>
                <h3 className='text-success'>Join Our Circle of Care</h3>
                <p className='text-muted'>Becoming a part of Amrutam is simple.</p>
            </div>
            <div className='container d-flex borde border-2 border-danger p-5 gap-5 text-success'>
                <div className='w-50 me-3'>{steps}</div>
                <div className='w-50 border border-1 border-dark'>img is here </div>
            </div>
            <div id="btn_container" className=' container  d-flex justify-content-center gap-4'>
                <button>Consultations</button>
                <button>Payment Withdrawal</button>
                <button>Schedule</button>
            </div>
            <div className='container d-flex justify-content-center gap-5 p-5'>
                {phone()}
            </div>
            <div className='container text-center p-3'>
                <button className='bg-success p-4 pt-2 pb-2 fs-6'>Join Now </button>
            </div>
        </div>
    )
}