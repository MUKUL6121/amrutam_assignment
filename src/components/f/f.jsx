import phone from '../../assets/phone.png'
import appstore from '../../assets/app store.png';
import playstore from '../../assets/play store.png';
export default function F() {
    const data = [
        {
            "title": <p>Build Trust and <br />Community with Forum</p>,
            "icon": <i className="bi bi-leaf"></i>
        },
        {
            "title": <p>Earn Money with Pay<br />Per Conversation</p>,
            "icon": <i className="bi bi-coin"></i>
        },
        {
            "title": <p>Attracts Patients with<br />5-Minutes Free Call</p>,
            "icon": <i className="bi bi-telephone"></i>
        },
        {
            "title": <p>Instant Access to Your<br />Earning with Wallet</p>,
            "icon": <i className="bi bi-wallet2"></i>
        }
    ];
    var display = data.map((item, i) => (
        <div key={i} className="cols-5 g-3 w-50" style={{ "minWidth": "100px" }}>
            <div className="d-flex border border-1 border-success rounded-2  p-2 pb-0 gap-2">
                <b className="fs-4 ">{item.icon}</b>
                <b style={{ fontSize: "14px", fontWeight: "600" }}>{item.title}</b>
            </div>
        </div >
    ))
    return (
        <div className=" container  w-100  d-flex text-success p-3" style={{ backgroundColor: "#FFEDBF" }}>
            <div className="borde border-2 border-black mt-5 p-3 pt-5 w-50">
                <div className="w-100">
                    <h2>Get Started Today -<br /> Download the App Now!</h2>
                    <p className="text-muted">Simplify Consultation, Manage Patients, and<br />grow your practice-all in one place.</p>
                </div>
                <div className="row ">
                    {display}
                </div>
                <div className='mt-3 w-75 justify-content-center p-0'>
                    <img src={playstore} alt="" className='w-50' height='75px' />
                    <img src={appstore} alt="" className='w-50' height='55px' />
                </div>
            </div>
            <div className="borde border-2 border-black w-50 pt-3 justify-content-center d-flex">
                <img src={phone} alt="" height="450px" width="250px" style={{ bottom: "0px" }} />
            </div>
        </div >
    )
}