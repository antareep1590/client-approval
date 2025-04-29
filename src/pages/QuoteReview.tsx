
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X, Image } from "lucide-react";
import SignatureCanvas from 'react-signature-canvas';
import { useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const QuoteReview = () => {
  const sigPadRef = useRef<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(250);
  const [subTotal, setSubTotal] = useState(250);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(250);
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const { toast } = useToast();

  const clearSignature = () => {
    if (sigPadRef.current) {
      sigPadRef.current.clear();
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value) || 0;
    setAmount(newAmount);
    
    // Update subtotal and total based on new amount
    setSubTotal(quantity * newAmount);
    setTotal((quantity * newAmount) - discount);
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDiscount = parseFloat(e.target.value) || 0;
    setDiscount(newDiscount);
    setTotal(subTotal - newDiscount);
  };

  const handleApproveQuote = () => {
    toast({
      title: "Quote Approved",
      description: "The quote has been successfully approved.",
    });
  };

  const handleRejectQuote = () => {
    if (rejectionReason.trim() === "") {
      toast({
        title: "Error",
        description: "Please provide a reason for rejecting the quote.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Rejected",
      description: "The quote has been rejected with your comments.",
      variant: "destructive",
    });
    setRejectDialogOpen(false);
    setRejectionReason("");
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

            {/* Item Description, Quantity and Amount in Single Row */}
            <div className="grid grid-cols-12 gap-6">
              {/* Item Description */}
              <div className="col-span-7">
                <h2 className="font-semibold text-gray-900 mb-3">Item Description</h2>
                <div className="bg-white border rounded-lg p-4">
                  <p className="text-gray-600">Cut down and remove (log, branches, brush). Location to be prune-less than 16 inches in diameter.</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="col-span-2">
                <h2 className="font-semibold text-gray-900 mb-3">Quantity</h2>
                <Input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-full bg-gray-100 cursor-not-allowed"
                />
              </div>

              {/* Amount */}
              <div className="col-span-3">
                <h2 className="font-semibold text-gray-900 mb-3">Amount</h2>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">$</span>
                  <Input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full pl-8"
                    min={0}
                  />
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="grid grid-cols-1 gap-4 max-w-sm ml-auto">
              {/* Sub-total */}
              <div className="flex items-center justify-between">
                <label htmlFor="subtotal" className="font-semibold text-gray-900 w-24">Sub-total:</label>
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">$</span>
                  <Input
                    id="subtotal"
                    type="number"
                    value={subTotal}
                    readOnly
                    className="w-full pl-8 bg-gray-100 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Discount */}
              <div className="flex items-center justify-between">
                <label htmlFor="discount" className="font-semibold text-gray-900 w-24">Discount:</label>
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">$</span>
                  <Input
                    id="discount"
                    type="number"
                    value={discount}
                    onChange={handleDiscountChange}
                    className="w-full pl-8"
                    min={0}
                  />
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between">
                <label htmlFor="total" className="font-semibold text-gray-900 w-24">Total:</label>
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">$</span>
                  <Input
                    id="total"
                    type="number"
                    value={total}
                    readOnly
                    className="w-full pl-8 bg-gray-100 cursor-not-allowed font-bold"
                  />
                </div>
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

            {/* Action Buttons */}
            <div className="flex justify-end pt-4 gap-4">
              <Button 
                variant="outline" 
                className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={() => setRejectDialogOpen(true)}
              >
                <X className="w-4 h-4 mr-2" />
                Reject Quote
              </Button>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={handleApproveQuote}
              >
                <Check className="w-4 h-4 mr-2" />
                Approve Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rejection Reason Dialog */}
      <AlertDialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Quote</AlertDialogTitle>
            <AlertDialogDescription>
              Please provide a reason for rejecting this quote. This feedback will be shared with the service provider.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="py-4">
            <Textarea
              placeholder="Enter your reason for rejecting the quote..."
              className="min-h-[100px]"
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleRejectQuote}
              className="bg-red-600 hover:bg-red-700"
            >
              Submit Rejection
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default QuoteReview;
