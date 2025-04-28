
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Create Beautiful Websites with Our Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Build stunning, responsive websites quickly and easily with our intuitive platform and professional templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-blue-100 absolute -top-4 -right-4 w-full h-full rounded-xl"></div>
              <div className="bg-blue-600 absolute -bottom-4 -left-4 w-full h-full rounded-xl opacity-10"></div>
              <div className="relative bg-white p-6 shadow-lg rounded-xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Hero image" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
