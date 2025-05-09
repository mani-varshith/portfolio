import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="font-bold text-xl">MAVA</div>
        <div>
          <a href="mailto:varshith@gmail.com" className="text-sm hover:underline">
            varshith@gmail.com
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-none tracking-tighter">
          DREAM BIG<span className="text-black">.</span>
        </h1>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/placeholder.svg?height=600&width=500"
            alt="Mani Varshith"
            width={500}
            height={600}
            className="rounded-md object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            MANI VARSHITH
            <span className="block text-2xl md:text-3xl font-normal text-neutral-600">/ENTREPRENEUR</span>
          </h2>
          <p className="text-neutral-700">
            Tech-savvy entrepreneur with a background in Computer Science and Technology. Skilled in Python, Java,
            Photoshop, Premiere Pro, and financial trading across Indian markets, crypto, commodities, and forex.
            Currently serving as Managing Director at Light Engineering Industries, Hyderabad while actively building my
            own business for future growth. Passionate about innovation, technology, and strategic investments.
          </p>
        </div>
      </section>

      {/* Project X Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">PROJECT - X</h2>
            <h3 className="text-2xl font-medium">
              Crafting a New Era of Innovation, Quality, and Value — Made in India
            </h3>
            <p className="text-neutral-700">
              In a world full of choices, what truly stands out is something that combines purpose, quality, and vision.
              We are a group of passionate creators, driven by the belief that world-class products should not be a
              luxury—they should be accessible to everyone. And not just accessible, but born from a place of pride:
              India.
            </p>
            <p className="text-neutral-700">
              At the heart of our mission is a simple idea—build something exceptional. We're building a brand that
              reflects the spirit of modern India: bold, resilient, and forward-thinking. Our goal is to challenge the
              conventional, break barriers, and create something that speaks to the new generation of Indian
              consumers—those who expect more, demand better, and know that they deserve it.
            </p>
            <p className="text-neutral-700">
              We believe that when something is made with integrity, it speaks for itself. Every detail matters. Every
              decision—from design to material to price—is intentional. We're not just launching a product; we're
              building a movement—one that values craftsmanship, celebrates local innovation, and sets new benchmarks in
              affordability and quality.
            </p>
            <p className="text-neutral-700">
              The journey has already begun. Alongside my co-founders, I've been working tirelessly to shape a brand
              that isn't just another name in the market but a powerful statement. It's more than business—it's a
              mission to rewrite the rules and raise the bar.
            </p>
            <p className="text-neutral-700">And very soon, we'll be ready to share it with you.</p>
          </div>
          <div className="order-first md:order-last">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Project X - Shoes"
              width={600}
              height={600}
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Y Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Project Y - Global"
              width={600}
              height={600}
              className="rounded-md object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">PROJECT - Y</h2>
            <h3 className="text-2xl font-medium">Built to Move Business Forward</h3>
            <p className="text-neutral-700">
              Every once in a while, a new idea emerges—not just to participate in an industry, but to challenge its
              very structure. That's the spirit we're building with.
            </p>
            <p className="text-neutral-700">
              Alongside my co-founders, I've embarked on a journey to reshape how businesses operate in a traditionally
              rigid space. We're not here to follow outdated norms. We're here to offer smarter, sharper, and more
              flexible solutions to companies that deserve better. Our work is about removing the barriers that slow
              things down and replacing them with systems that respond faster, adapt easier, and scale smarter.
            </p>
            <p className="text-neutral-700">
              This isn't just about innovation. It's about relevance. In today's world, businesses need partners that
              understand complexity and solve it—not add to it. That's where we come in, offering tailored solutions
              that are efficient, dependable, and forward-looking.
            </p>
            <p className="text-neutral-700">
              And while our roots are proudly Indian, our mindset is global. We believe the best solutions are made when
              you combine local insight with world-class execution. That's what we're bringing to the table—something
              fresh, something powerful, and something that will soon be hard to ignore.
            </p>
            <p className="text-neutral-700">We're building quietly for now—but we won't be quiet for long.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">MANI - VARSHITH</h2>
        <div className="flex justify-center mb-6">
          <a href="mailto:varshith250@gmail.com" className="text-lg hover:underline">
            varshith250@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-8">
          <Link href="#" className="text-lg font-medium hover:underline">
            LINKEDIN
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline">
            INSTAGRAM
          </Link>
        </div>
      </section>
    </main>
  )
}
