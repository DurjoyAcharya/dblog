import myimg from "./img/myimg.jpg";
const AboutMe = () => {
  return (
    <section className="features4 factm5 cid-topuEVL4zV">
      <div className="container">
        <div className="row justify-content-center">
          <div className="main-wrap col-10 col-lg-10">
            <div className="img-col">
              <div className="image-wrapper">
                <img
                  src={myimg}
                  alt="Durjoy Acharya"
                  height={400}
                  width={400}
                />
              </div>
            </div>

            <div className="card-col">
              <div className="card-wrapper">
                <h6 className="card-title mbr-fonts-style display-5">
                  <strong>Durjoy Acharya</strong>
                </h6>
                <p className="mbr-text mbr-fonts-style display-8">
                  Department Of Computer Science & Engineering
                </p>
                <div className="items-wrap">
                  <div className="item">
                    <h6 className="item-title mbr-fonts-style display-8">
                      <strong>AGE:</strong>
                    </h6>
                    <p className="item-text mbr-fonts-style display-10">25</p>
                  </div>
                  <div className="item">
                    <h6 className="item-title mbr-fonts-style display-8">
                      <strong>PHONE:</strong>
                    </h6>
                    <p className="item-text mbr-fonts-style display-10">
                      (+88) 01876-068550
                    </p>
                  </div>
                  <div className="item">
                    <h6 className="item-title mbr-fonts-style display-8">
                      <strong>EMAIL:</strong>
                    </h6>
                    <p className="item-text mbr-fonts-style display-10">
                      da-durjoy@outlook.com
                    </p>
                  </div>
                  <div className="item">
                    <h6 className="item-title mbr-fonts-style display-8">
                      <strong>ADDRESS:</strong>
                    </h6>
                    <p className="item-text mbr-fonts-style display-10">
                      Khagan,Biruliya,Savar,Dhaka
                    </p>
                  </div>
                </div>
                <div className="mbr-section-btn">
                  <a
                    className="btn btn-secondary display-8"
                    href="https://wa.me/01876068550"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
