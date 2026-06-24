import Button from "./Button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Stay Connected With Your Parents
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Automated multilingual check-in calls that help families stay informed
        and connected.
      </p>

      <div className="flex gap-4">

  <Link to="/signup">
    <Button text="Get Started" />
  </Link>

  <Link to="/login">
    <Button text="Learn More" />
  </Link>

</div>

    </section>
  );
}

export default Hero;