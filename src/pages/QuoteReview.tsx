import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Image } from "lucide-react";
import SignatureCanvas from 'react-signature-canvas';
import { useRef, useState } from "react";

const QuoteReview = () => {
  const sigPadRef = useRef<any>(null);
  const [quantity, setQuantity] = useState(0);

  const clearSignature = () => {
    if (sigPadRef.current) {
      sigPadRef.current.clear();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-fluid px-4 mx-auto">
        <Card className="max-w-6xl mx-auto">
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

            {/* Item Description and Quantity in Single Row */}
            <div className="grid grid-cols-12 gap-6">
              {/* Item Description */}
              <div className="col-span-9">
                <h2 className="font-semibold text-gray-900 mb-3">Item Description</h2>
                <div className="bg-white border rounded-lg p-4">
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-medium text-gray-900">Take Down and Remove (TDR)</h3>
                    <p className="text-gray-600">Cut down and remove (log, branches, brush). Location to be prune-less than 16 inches in diameter.</p>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="col-span-3">
                <h2 className="font-semibold text-gray-900 mb-3">Quantity</h2>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                  min={0}
                  className="w-full"
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            {/* Signature Section */}
            <div className="border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-gray-900">Signature</h2>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={clearSignature}
                >
                  Clear
                </Button>
              </div>
              <div className="border rounded bg-white">
                <SignatureCanvas
                  ref={sigPadRef}
                  canvasProps={{
                    className: "w-full h-32"
                  }}
                />
              </div>
            </div>

            {/* Images Section */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-3">Work Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'photo-1509316975850-ff9c5deb0cd9',
                  'photo-1513836279014-a89f7a76ae86',
                  'photo-1518495973542-4542c06a5843',
                  'photo-1472396961693-142e6e269027',
                  'photo-1426604966848-d7adac402bff'
                ].map((photo, index) => (
                  <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=400&h=400`}
                      alt={`Work site image ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
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
