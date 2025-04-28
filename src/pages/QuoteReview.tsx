
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const QuoteReview = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="border-b">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Work Order #733</h1>
                <p className="text-gray-600 mt-1">Steve's Demo Bronico Trees and Landscaping, LLC</p>
              </div>
              <img 
                src="/lovable-uploads/5e15c6f2-7d2d-4fbe-9686-d3a8f8f16767.png" 
                alt="Company Logo" 
                className="w-24 h-auto"
              />
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 pt-6">
            {/* Client Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-semibold text-gray-900">Client Details</h2>
                <div className="mt-2 text-gray-600">
                  <p>609 River Street 22320</p>
                  <p>Jeff McKin</p>
                  <p>Austin, TX 28322</p>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Location</h2>
                <div className="mt-2 text-gray-600">
                  <p>609 River Street</p>
                  <p>Chesapeake, VA 23320</p>
                </div>
              </div>
            </div>

            {/* Service Details */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-3">Service Details</h2>
              <div className="bg-white border rounded-lg p-4">
                <h3 className="font-medium text-gray-900">Take Down and Remove (TDR)</h3>
                <p className="text-gray-600 mt-1">Cut down and remove (log, branches, brush). Location to be prune-less than 16 inches in diameter.</p>
              </div>
            </div>

            {/* Duration and Cost */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-semibold text-gray-900">Duration</h2>
                <p className="text-gray-600 mt-1">1.2 Man Hours</p>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">Number of Stumps</h2>
                <p className="text-gray-600 mt-1">3</p>
              </div>
            </div>

            {/* Approval Button */}
            <div className="flex justify-end pt-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Check className="w-4 h-4 mr-2" />
                Approve Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteReview;
