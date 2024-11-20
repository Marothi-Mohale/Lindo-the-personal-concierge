import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 min-h-screen p-8 sm:p-20 font-sans bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold">THE PERSONAL CONCIERGE .</h1>
        <p className="italic text-lg mt-2">"Shop the Best, Hassle-Free"</p>
      </header>

      <main className="flex flex-col items-center gap-12">
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
          <p className="text-lg leading-relaxed">
            I am Lindokuhle Madayi, here to bring you a premium shopping
            experience tailored to your needs. My personal shopping services
            specialize in sourcing high-quality hair and bridal products, latest
            iPhones & luxurious Dubai perfumes, all at cheaper prices. Whether
            you’re looking for head-to-toe styling or simply want the ease of
            having your shopping handled by a trusted professional, I’m here to
            make the process seamless and enjoyable. Let me bring the best of the
            world to you, right from Cape Town!
          </p>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-bold text-center mb-6">OUR SERVICE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold">01. HAIR SERVICES</h3>
              <p className="mt-2">
                Personal Shopping services for all types of hair. You'll pay
                buying this hair at stock price. We will provide delivery fee as
                well as service fee (R250).
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold">02. IPHONES</h3>
              <p className="mt-2">
                iPhones are provided at stock price. Delivery and service fee are
                to be provided by you. Service fee (R200).
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold">03. DUBAI PERFUMES</h3>
              <p className="mt-2">
                Name and a picture of the perfume you want should be provided.
                Dubai perfumes are provided at stock price. Delivery and service
                fee are to be provided by you. Service fee (R200).
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center mt-12">
        <p className="text-lg">
          <strong>Contact:</strong> +27 73 587 9067
        </p>
        <p className="text-lg">
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/lindokuhlemadayi"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @lindokuhlemadayi
          </a>
        </p>
      </footer>
    </div>
  );
}
