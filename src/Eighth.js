import React from "react";
let Frequently = () => {
    return (<>
        <div className="container text-center mt-5 ">
            <h2 className="fw-bold">Frequently Asked Questions</h2>
            <p className="fs-4 mx-5">Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>
            <div className="container col-9 ">
                <div class="accordion" id="accordionPanelsStayOpenExample log mt-5">

                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="card card-body">
                            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                   
                    <div class="accordion-item mx-5 shadow">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                1. How does Osumare measure campaign success?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mx-5 shadow">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                2. How does Osumare measure campaign success?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mx-5 shadow">
                        <h2 class="accordion-header">
                            <button class="accordion-button fw-bold btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                3. How does Osumare measure campaign success?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show ">
                            <div class="accordion-body">
                                <p> We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</p>

                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </>)
}
export default Frequently;  