import {
  Navbar,
  Services,
  Technologies,
  Main,
  TrustedBy,
  Reviews,
  WhyUs,
  Crew,
  GetStarted,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
      <Technologies />
      <TrustedBy />
      <Reviews />
      <WhyUs />
      <Crew />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
