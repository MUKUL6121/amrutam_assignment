export default function E() {
    const data = [
        {
            "title": "What is Amrutam?",
            "des": ""
        },
        {
            "title": "How does Amrutam help me grow as a practitiioner?",
            "des": ""
        },
        {
            "title": "How do I become a part of Amrutam?",
            "des": ""
        },
        {
            "title": "What is Amrutam Global as a platform?",
            "des": ""
        },
        {
            "title": "What documents do I need to provide?",
            "des": ""
        },
        {
            "title": "Is there a fee to join Amrutam?",
            "des": ""
        }
    ];
    var display = data.map((item, i) => (
        <div>
            <div className="accordion container w-75 border border-0 text-muted" id="accordionExample" key={i}>
                {/* Customer Detail */}
                <div className="accordion-item border border-0 ">
                    <h2 className="accordion-header">
                        <button className="btn w-100 d-flex justify-content-between ps-5 pe-5 text-muted" style={{ backgroundColor: '#FFF6DD' }} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`}>
                            {item.title}<i className="bi bi-plus"></i>
                        </button>
                    </h2>
                    <div id={`collapse${i}`} className="accordion-collapse collapse" style={{ backgroundColor: '#FFF6DD' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body  ps-5 pe-5">
                            Something is here.
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        </div>
    ))
    return (
        <div className="p-5" style={{ backgroundColor: '#FFF6DD' }}>
            <div className="text-center">
                <h3 className="text-success">Frequently Asked Questions</h3>
                <p className="text-muted">Find quick answers to common questions to help your navigate the app and its features easily.</p>
            </div>
            <div className="pt-4">
                {display}
            </div>
            <div className="container  text-center pt-3" style={{}}>
                <button className="bg-success ps-3 pe-3 p-2 fs-6">See More</button>
            </div>
        </div>
    );
}