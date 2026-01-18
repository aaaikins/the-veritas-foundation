import Header from '@/components/header';
import Footer from '@/components/footer';
import { CheckCircle, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DonationSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center space-y-6">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#002366]">
              Thank You for Your Donation!
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Your donation has been successfully processed. Your support makes a real difference 
              in the lives of our scholars. You will receive a confirmation email shortly.
            </p>
            {searchParams.session_id && (
              <div className="bg-slate-50 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-sm text-slate-600 mb-2">Session ID:</p>
                <p className="font-mono text-sm text-[#002366] break-all">
                  {searchParams.session_id}
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                className="bg-[#facc15] text-[#002366] hover:bg-[#facc15]/90"
              >
                <Link href="/">
                  <HeartHandshake className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white"
              >
                <Link href="/donate">Make Another Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

