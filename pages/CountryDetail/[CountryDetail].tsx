import Link from "next/link";

function CountryDetail() {
  return (
    <section className="text-black dark:text-white">
      <Link href={"/"}>Back</Link>
      <img />

      <p>Native Name</p>
      <p>Population</p>
      <p>Reigon</p>
      <p>Sub Region</p>
      <p>Capital</p>
      <p>Top Level Domain</p>
      <p>Currencies</p>
      <p>Languages</p>

      <p>Border Countries:</p>
    </section>
  );
}

export default CountryDetail;
