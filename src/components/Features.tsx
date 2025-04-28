
import { Grid3x3, LayoutGrid, Grid2X2, Grid3X3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      title: "Responsive Design",
      description: "Create websites that look great on any device, from mobile phones to desktop computers.",
      icon: <LayoutGrid className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Customizable Components",
      description: "Choose from hundreds of components and customize them to fit your brand's unique style.",
      icon: <Grid2X2 className="h-10 w-10 text-blue-600" />
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed to ensure your website loads quickly and provides an excellent user experience.",
      icon: <Grid3X3 className="h-10 w-10 text-blue-600" />
    },
    {
      title: "SEO Friendly",
      description: "Built with search engine optimization in mind to help your website rank higher in search results.",
      icon: <Grid3x3 className="h-10 w-10 text-blue-600" />
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600">
            Our platform offers everything you need to create stunning websites that engage visitors and drive conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
