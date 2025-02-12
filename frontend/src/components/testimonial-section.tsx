import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatarSrc: string;
}

const TestimonialCard = ({ name, role, content, avatarSrc }:Testimonial) => (
  <Card className="w-full max-w-sm border-[#000080]">
    <CardContent className="pt-6">
      <div className="flex items-start space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-muted-foreground">
        "{content}"
      </blockquote>
    </CardContent>
  </Card>
)

export default function TestimonialSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
          <TestimonialCard
            name="Alex Johnson"
            role="CEO, TechCorp"
            content="This product has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours."
            avatarSrc="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="Sarah Lee"
            role="Marketing Director, InnovateCo"
            content="I can't imagine running our campaigns without this tool. It's been a game-changer for our team's productivity."
            avatarSrc="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="Michael Chen"
            role="Freelance Designer"
            content="As a solo entrepreneur, this product has been invaluable. It's like having a whole team at my fingertips."
            avatarSrc="/placeholder.svg?height=100&width=100"
          />
        </div>
      </div>
    </section>
  )
}

