export default function PhysicsPage() {
    return (
      <div style={container}>
        <h1 style={title}>Advanced Level : Physics</h1>
  
        <p style={subtitle}>
          Learn Physics that is guaranteed to impress with this fundamentals teaching.
        </p>
  
        <div style={topSection}>
          {/* IMAGE */}
          <div style={{ flex: 2 }}>
            <img
              src="/images/physics.jpg"
              alt="Physics Teacher"
              style={imageStyle}
            />
          </div>
  
          {/* RIGHT CARD */}
          <div style={cardStyle}>
            <h2>Rs: 2000 / 2Hrs</h2>
  
            <button style={primaryBtn}>Book Teacher</button>
            <button style={outlineBtn}>Free Preview</button>
            <button style={outlineBtn}>Message</button>
          </div>
        </div>
  
        <div style={{ marginTop: "40px" }}>
  <h3 style={{ color: "black" }}>
    By Nimesh Dissanayake
  </h3>

  <p style={{ color: "#555" }}>
    BSc(Hons) Computer Science (UCSC)
  </p>
</div>
  
        <div style={{ marginTop: "20px", maxWidth: "800px" }}>
          <h3>About me</h3>
          <p style={{ lineHeight: "1.6", color: "#444" }}>
            An enthusiastic Physics teacher turned engineer, blending the art of
            teaching with coding expertise.
          </p>
        </div>
      </div>
    );
  }
  
  //////////////////////
  // STYLES
  //////////////////////
  
  const container = {
    padding: "60px 100px",
    background: "#f3f4f6",
    minHeight: "100vh",
  };
  
  const title = {
    fontSize: "32px",
    marginBottom: "10px",
    color: "black",
  };
  
  const subtitle = {
    color: "gray",
    marginBottom: "30px",
  };
  
  const topSection = {
    display: "flex",
    gap: "40px",
    color: "black",
  };
  
  const imageStyle = {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "20px",
  };
  
  const cardStyle = {
    flex: 1,
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    color: "black",
  };
  
  const primaryBtn = {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };
  
  const outlineBtn = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "white",
    color: "#2563eb",
    border: "1px solid #2563eb",
    borderRadius: "6px",
    cursor: "pointer",
  };