import { Form } from "react-bootstrap";

const Feedbacks = () => {
  return (
    <>
      <div>
        <h2>Send Your Feedback</h2>

        <div>
          <form>
            <input
              type="text"
              placeholder="Have feedback? We'd love to hear it, but please don't share sensitive information. Have question? Try help or support."
              style={{
                width: "50rem",
                height: "10rem",
                backgroundColor: "#bfbfbf",
              }}
            />
            <br></br>

            <button
              type="submit"
              style={{
                padding: "5px",
                color: "#8dc2e3",
                border: "0",
                backgroundColor: "#16181b",
                marginLeft: "60%",
                marginTop: "5px",
              }}
            >
              Send
            </button>
          </form>
          <br></br>
          <div>
            Some{" "}
            <a href="#" style={{ color: "#8dc2e3" }}>
              {" "}
              account and system information
            </a>{" "}
            may be sent to Google. We will use it to fix problems and improve
            our services, subject to our{" "}
            <a href="#" style={{ color: "#8dc2e3" }}>
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: "#8dc2e3" }}>
              Terms of Service
            </a>
            . We may email you for more information or updates. Go to{" "}
            <a href="#" style={{ color: "#8dc2e3" }}>
              Legal Help
            </a>{" "}
            to ask for content changes for legal reasons.
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
