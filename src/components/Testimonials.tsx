
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how we approach web development. Highly recommended!",
      author: "Jane Cooper",
      role: "CEO at TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      quote: "The ease of use and flexibility of this platform saved our team countless hours of development time.",
      author: "John Mitchell",
      role: "Lead Designer at CreativeStudio",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      quote: "We've received so many compliments on our new website since using this platform. It's been a game-changer.",
      author: "Sarah Williams",
      role: "Marketing Director at GrowthLabs",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what people are saying about our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
