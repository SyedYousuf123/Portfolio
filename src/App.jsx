import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import {
  AboutMe,
  Nav,
  Hero,
  Skills,
  Projects,
  ContactForm,
  Footer,
} from "./Components";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="font-Josefin ">
      {loading ? (
        <PropagateLoader
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "auto",
            height: "100vh",
            backgroundColor: "#191919",
          }}
          color={"#f9004d"}
          loading={loading}
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <Nav />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
