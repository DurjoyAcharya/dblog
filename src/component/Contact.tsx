const Contact = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center"></div>
          <form className="row">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row no-gutters mb-5">
                    <div className="col-md-7">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Contact Us</h3>
                        <div id="form-message-warning" className="mb-4"></div>
                        <div id="form-message-success" className="mb-4">
                          Your message was sent, thank you!
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label">Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label">Subject</label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label">Message</label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="submitting"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                  <div id="map"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Address:</span> Khagan,Biruliya,Savar Dhaka,1340
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Phone:</span> <a href="#">01876068550</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Email:</span>{" "}
                        <a href="da-durjoy@outlook.com">
                          <span className="__cf_email__">
                            [da-durjoy@outlook.com]
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text">
                      <p>
                        <span>Website</span> <a href="#">www.durjoy.dev</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
