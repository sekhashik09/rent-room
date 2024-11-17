import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img
          src="https://via.placeholder.com/300"
          alt="About Us"
          style={styles.image}
        />
        <div style={styles.text}>
          <h1 style={styles.title}>About Us</h1>
          <p style={styles.paragraph}>
            Welcome to our platform! We are dedicated to delivering the best
            services to our clients. Our team works tirelessly to innovate and
            create solutions that make a difference.
          </p>
          <p style={styles.paragraph}>
            Our mission is to provide top-quality products and outstanding
            customer support. Whether you are looking for creative solutions,
            cutting-edge technology, or a reliable partner, we've got you
            covered.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    maxWidth: "800px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
  image: {
    width: "300px",
    height: "auto",
    borderRadius: "10px",
    objectFit: "cover",
  },
  text: {
    flex: 1,
    textAlign: "left",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#333",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
};

export default About;
