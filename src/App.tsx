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
    <>
      <Navbar />
      <div className="mx-auto max-w-[1750px]">
        <Main />
        <Services />
        <Technologies />
        <TrustedBy />
        <Reviews />
        <WhyUs />
        <Crew />
        <GetStarted />
      </div>
      <Footer />
    </>
  );
};

export default App;
