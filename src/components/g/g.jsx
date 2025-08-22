import img from '../../assets/turmeric.png'
export default function G() {
    return (
        <div className="p-5 text-success d-flex  flex-column justify-content-center gap-3 " style={{ backgroundColor: "#FFF6DD", border: "0px solid black" }}>
            <div className="w-100 text-center">
                <h3>Let's Connect</h3>
                <p className="text-dark">We're here to help you on your wellness journey. Reach out to us
                    for any questions,<br />product inquiries, or personalized advice.</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-50" style={{ border: "0px solid black" }}>
                    <img src={img} alt="" className='w-100 rounded-4 p-2' />
                </div>
                {/* for form */}
                <div className="w-75 rounded-3" style={{ border: "1px solid grey" }}>
                    <div className="p-3" style={{ backgroundColor: '', borderRadius: '15px' }}>
                        <div className="row justify-content-cente ps-5">
                            <div className="col-md-8">
                                <form>
                                    {/* Name and Contact Number fields side-by-side */}
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="yourName" className="form-label" style={{ fontWeight: '400' }}>Your Name</label>
                                                <input type="text" className="form-control" id="yourName" placeholder="Vikas Kumar" style={{ border: 'none', borderBottom: '1px solid #a5aab0ff', backgroundColor: 'transparent', borderRadius: '0' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="contactNumber" className="form-label" style={{ fontWeight: '400' }}>Your Contact Number</label>
                                                <input type="text" className="form-control" id="contactNumber" placeholder="8743414476" style={{ border: 'none', borderBottom: '1px solid #a5aab0ff', backgroundColor: 'transparent', borderRadius: '0' }} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email field */}
                                    <div className="mb-3">
                                        <div className="form-group">
                                            <label htmlFor="yourEmail" className="form-label" style={{ fontWeight: '400' }}>Your Email</label>
                                            <input type="email" className="form-control" id="yourEmail" placeholder="vikass@gmail.com" style={{ border: 'none', borderBottom: '1px solid #ced4da', backgroundColor: 'transparent', borderRadius: '0' }} />
                                        </div>
                                    </div>

                                    {/* Message field */}
                                    <div className="mb-4">
                                        <div className="form-group">
                                            <label htmlFor="message" className="form-label" style={{ fontWeight: '400' }}>Message (Optional)</label>
                                            <textarea className="form-control" id="message" rows="3" placeholder="I want to On-board as a Doctor" style={{ border: 'none', borderBottom: '1px solid #ced4da', backgroundColor: 'transparent', borderRadius: '0' }}></textarea>
                                        </div>
                                    </div>

                                    {/* Send Message button */}
                                    <div className="d-grid gap-2 w-50">
                                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#3e6a3c', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: 'bold' }}>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}