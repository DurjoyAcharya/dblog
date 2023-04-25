import { MDBBtn, MDBContainer, MDBFooter, MDBIcon } from "mdb-react-ui-kit";
import "./custom.css";

export default function Footer() {
  return (
    <MDBFooter className="gray text-center text-dark">
      <MDBContainer className="p-2 pb-0">
        <section className="mb-2">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="http://facebook.com"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/DurjoyAcharya"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-dark" href="https://durjoy.dev">
          www.durjoy.dev
        </a>
      </div>
    </MDBFooter>
  );
}
