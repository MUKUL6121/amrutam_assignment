export default function Footer() {
    return (
        <div>
            <footer className="py-5" style={{ backgroundColor: '#cccfc897' }}>
                <div className="container">
                    <div className="row">
                        {/* Column 1: Get in touch */}
                        <div className="col-lg-4 col-md-6 mb-4 justify-content-center" style={{ border: "0px solid black" }}>
                            <h2 className="mb-5" style={{ color: '#3e6a3c', fontWeight: 'bold' }}>A M R U T A M</h2>
                            <h5 className="mb-4" style={{ color: '#3e6a3c' }}>Get in touch</h5>
                            <p className="mb-1" style={{ color: '#555' }}>support@amrutam.global</p>
                            <p className="mb-1" style={{ color: '#555' }}>Amrutam Pharmaceuticals Pvt Ltd.,</p>
                            <p className="mb-1" style={{ color: '#555' }}>chitragupt ganj, Nai Sadak, Lashkar,</p>
                            <p className="mb-1" style={{ color: '#555' }}>Gwalior - 474001</p>
                            <p className="mb-0" style={{ color: '#555' }}>+91 9713171999</p>
                        </div>

                        {/* Column 2: Information */}
                        <div className="col-lg-4  mb-4 ps-5" style={{ border: "0px solid black" }}>
                            <h5 className="mb-3" style={{ color: '#3e6a3c' }}>Information</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#555' }}>About Us</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#555' }}>Terms and Conditions</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#555' }}>Privacy Policy</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#555' }}>Privacy Policy for Mobile App</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#555' }}>Shipping and Return Policy</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#555' }}>International Delivery</a></li>
                                <li className="mb-2"><a href="#" className="text-decoration-none" style={{ color: '#555' }}>For Business, Hotels and Resorts</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Follow Us */}
                        <div className="col-lg-4 mb-4 justify-content-center" style={{ border: "0px solid black" }}>
                            <h5 className="mb-3" style={{ color: '#3e6a3c' }}>Follow Us</h5>
                            <div className="d-flex">
                                {/* Social media icons */}
                                <a href="#" className="btn btn-social d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px', backgroundColor: '#3e6a3c', color: '#fff', borderRadius: '50%' }}><i className="bi bi-facebook"></i></a>
                                <a href="#" className="btn btn-social d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px', backgroundColor: '#3e6a3c', color: '#fff', borderRadius: '50%' }}><i className="bi bi-youtube"></i></a>
                                <a href="#" className="btn btn-social d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px', backgroundColor: '#3e6a3c', color: '#fff', borderRadius: '50%' }}><i className="bi bi-instagram"></i></a>
                                <a href="#" className="btn btn-social d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px', backgroundColor: '#3e6a3c', color: '#fff', borderRadius: '50%' }}><i className="bi bi-twitter"></i></a>
                                <a href="#" className="btn btn-social d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px', backgroundColor: '#3e6a3c', color: '#fff', borderRadius: '50%' }}><i className="bi bi-linkedin"></i></a>
                                <a href="#" className="btn btn-social d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px', backgroundColor: '#3e6a3c', color: '#fff', borderRadius: '50%' }}><i className="bi bi-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}