import { Button } from "@/components/ui/button"

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-[#e6e6ff]/[0.3] mt-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're on a mission to revolutionize the way people work and create.
          </p>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Founded in 2020, our company has quickly grown from a small startup to a leader in innovative software solutions. We believe in the power of technology to transform businesses and improve lives.
            </p>
            <p className="text-muted-foreground">
              Our team of passionate developers, designers, and problem-solvers work tirelessly to create intuitive, powerful tools that help our clients achieve their goals. We're committed to excellence, continuous improvement, and putting our customers first.
            </p>
            <p className="text-muted-foreground">
              Whether you're a small business owner, a large corporation, or somewhere in between, we have the expertise and solutions to help you succeed in the digital age.
            </p>
          </div>
          <Button className="mt-8">Learn More</Button>
        </div>
      </div>
    </section>
  )
}
