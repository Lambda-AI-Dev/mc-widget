const style = {
  background: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  foreground: {
    position: "absolute",
    // left: "10%",
    // right: "10%",
    // top: "10%",
    // bottom: "10%",
    // margin: "auto",
    height: "600px",
    width: "800px",
    marginLeft: "-400px",
    marginTop: "-300px",
    top: "50%",
    left: "50%",
    background: "white",
    borderRadius: "25px"
  },
  header: { margin: "20px" },
  submitButton: {
    marginTop: "3vh",
    width: "150px",
    height: "45px"
  },
  footer: {
    position: "absolute",
    width: "300px",
    marginLeft: "-150px",
    bottom: "10px",
    left: "50%"
  },
  successAnimation: {
    height: "120px",
    width: "120px",
    position: "absolute",
    marginLeft: "-60px",
    marginTop: "-60px",
    top: "50%",
    left: "50%"
  }
};

export default style;
