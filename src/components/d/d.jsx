import img from '../../assets/doc2.png'
import './d.css'
export default function D() {
    var data = [
        {
            "name": "Dr. Pooja Deshmukh",
            "deg": "BAMS",
            "rating": "4",
            "cmt": "Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
        },
        {
            "name": "Dr. Rajesh Iyer",
            "deg": "Ayurvedic Practitioner",
            "rating": "4",
            "cmt": "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."
        },
        {
            "name": "Dr. Ananya Sharma",
            "deg": "BAMS",
            "rating": "4",
            "cmt": "As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients usug their products."
        }
    ];
    var dis = () => {
        return (
            <>
                {data.map((item, i) => {
                    return (
                        i % 2 == 0 ? (
                            <div className="container text-muted border border-1 border-dark rounded-1 p-3 " style={{ margin: "20px", backgroundColor: "#FFEEC3" }}>
                                <div className='d-flex gap-2'>
                                    <img src={img} alt="" id="cmt_img" />
                                    <div>
                                        <p className='p-0 m-0' style={{ fontSize: "14px" }}><b className="text-dark">{item.name}</b>, {item.deg}</p>
                                        <p className='p-0 fs-7'><span className='bi bi-star'></span>{item.rating}</p>
                                    </div>
                                </div>
                                <div className='fs-8' style={{fontSize:"12px"}}>
                                    {item.cmt}
                                </div>
                            </div>
                        ) : (
                            <div className="container text-muted border border-1 border-dark rounded-1 p-3 pb-4 " style={{ backgroundColor: "#FFEEC3" }}>
                                <div className='d-flex gap-2'>
                                    <img src={img} alt="" id="cmt_img" className='img-fluid' />
                                    <div>
                                        <p className='p-0 m-0 ' style={{ fontSize: "14px" }}><b className="text-dark">{item.name}</b>, {item.deg}</p>
                                        <p className='p-0 fs-7'><span className='bi bi-star'></span>{item.rating}</p>
                                    </div>
                                </div>
                                <div className='fs-8 d-flex gap-3' style={{fontSize:"14px"}}>
                                    {item.cmt}
                                </div>
                            </div>
                        )
                    )
                })}

            </>
        )
    };

    return (
        <div className="p-5 pt-3" style={{backgroundColor: "#FFF7E2"}}>
            <div className="text-center">
                <h3>What other Ayurvedic Doctors are Saying</h3>
                <p className="text-muted">Trusted by experts - Hear what Ayurvedic doctors say about Amrutam!</p>
            </div>
            <div className='d-flex' >
                {dis()}
            </div>
        </div>
    )
}