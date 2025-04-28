
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const QuoteReview = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="border-b pb-6">
            <div className="flex flex-col items-center justify-center">
              <img 
                src="/lovable-uploads/8b5f4ffc-4e36-4941-ac5f-619e4a87483d.png" 
                alt="Timber Pros Tree Service" 
                className="h-32 w-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-900">Work Order #733</h1>
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
