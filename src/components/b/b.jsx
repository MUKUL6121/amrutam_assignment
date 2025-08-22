import './b.css'
import toi from "../../assets/toi.png";

function B() {
    var data = [
        {
            title: <>Instant <b>Free</b> 5-Mins Call</>,
            des: <>We Understand the important of building trust with your patients. That's why Amrutam offers a <b>free 5-minutes call</b>, helping you connect instantly and faster lasting patient relationsship with ease.</>,
            img: toi
        },
        {
            title: <b>Forum for Meaningful Connections</b>,
            des: <>We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.</>,
            img: toi
        },
        {
            title: <b>Choose Your Session Mode</b>,
            des: <>Amrutam offers you to connect with patients via instant chat, Instant call , or Schedule Video call. Each option offers flexibility and personized care to suit individual needs.</>,
            img: toi
        },
        {
            title: <b>Smart Wallet</b>,
            des: <>we understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawls.</>,
            img: toi
        },
        {
            title: <b>Flexible Work Timing</b>,
            des: <>We recognize the importance of mangaging your time. with the avilability toggle in the doctor's app, you control when patients can book consultations, ensuring  a balanced and stress-free practice.</>,
            img: toi
        }
    ];
    let show = data.map((item, i) => (
        <div id="card" className=" my-3 p- w-75  " key={i}>
            {i % 2 === 0 ?
                (<div className="d-flex justify-content-between align-items-center my-3 ">
                    <div className="w-50  justify-content-center d-flex align-items-center">
                        <img src={item.img} alt="" height="80px" />
                    </div>
                    <div className="w-50 ps-5 p-2" key={i}>
                        <h5 for="" >{item.title}</h5>
                        <p className="fs-7">{item.des}</p>
                    </div>
                </div>) :
                (<div className="d-flex align-items-center my-3 ">
                    <div className="w-50  justify-content-center p-2" key={i}>
                        <h5 for="" >{item.title}</h5>
                        <p className="fs-7">{item.des}</p>
                    </div>
                    <div className="w-50 ps-5 justify-content-center d-flex align-items-center">
                        <img src={item.img} alt="" height="80px" />
                    </div>
                </div>)
            }
        </div>
    )
    );

    return (
        <div id="main-b" className="containe p-5 text-success">
            <div className="text-center">
                <h3>Why Doctors Choose Us?</h3>
                <p>Unlock the Benefits of Smarter Healthcare Management and Patient Care.</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center ">{show}</div>
        </div>
    )
};

export default B;