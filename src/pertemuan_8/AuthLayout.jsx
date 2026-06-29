import React from 'react';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Sign In to Ember</h1>
          <p className="text-gray-500 mb-8 text-lg">Send, spend and save smarter</p>

          <div className="flex gap-4 mb-8">
            <Button variant="secondary" className="flex-1 py-3">
              <span className="text-xl">G</span> Sign In with Google
            </Button>
            <Button variant="secondary" className="flex-1 py-3">
              <span className="text-xl"></span> Sign In with Apple
            </Button>
          </div>

          <div className="flex items-center mb-8">
            <hr className="flex-1 border-gray-200" />
            <span className="px-4 text-gray-400 text-sm font-medium">or with e-mail</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <form className="space-y-5">
            <InputField type="email" placeholder="olivia@untitledui.com" />
            <InputField type="password" placeholder="Password" icon="👁️‍尋" />
            
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center text-sm text-gray-600 font-medium cursor-pointer">
                <input type="checkbox" className="mr-3 w-4 h-4 rounded text-[#6C5DD3] border-gray-300 focus:ring-[#6C5DD3]" /> 
                Remember me
              </label>
              <a href="#" className="text-sm text-[#6C5DD3] font-medium hover:underline">Forgot Password?</a>
            </div>
            
            <div className="pt-4">
              <Button variant="purple" className="w-full py-3.5 text-lg font-semibold">
                Sign In
              </Button>
            </div>
          </form>

          <p className="text-center mt-10 text-gray-600">
            Don't have an account? <a href="#" className="text-gray-900 font-bold hover:underline">Sign Up</a>
          </p>
        </div>
      </div>

      {/* Right Graphic Section */}
      <div className="hidden lg:flex w-1/2 bg-[#6C5DD3] p-12 flex-col justify-center items-center text-white relative overflow-hidden">
        <div className="w-full max-w-lg z-10 flex flex-col items-center">
          <div className="w-full flex justify-start mb-16">
            <h2 className="text-3xl font-bold flex items-center gap-2">◆ Ember.</h2>
          </div>
          
          {/* Mock Chart Card */}
          <div className="bg-white rounded-2xl p-8 text-black mb-12 shadow-2xl w-full">
            <h3 className="font-bold text-2xl mb-6 text-gray-900">Revenue</h3>
            <div className="h-48 border-b-2 border-l-2 border-gray-100 relative flex items-end">
              <div className="absolute top-4 left-1/4 bg-white shadow-xl p-3 rounded-xl border border-gray-100 text-sm z-10 min-w-[140px]">
                <p className="text-gray-900 mb-1">Feb 11: <strong>$39234</strong></p>
                <p className="text-[#6C5DD3]">Feb 11: <strong>$19865</strong></p>
              </div>
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <path d="M0,40 Q15,10 40,25 T100,10" fill="none" stroke="#111827" strokeWidth="2.5" />
                <path d="M0,48 Q20,25 50,45 T100,30" fill="none" stroke="#6C5DD3" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-6 text-center">Get Better with Money</h2>
          <p className="text-center text-white/80 text-base leading-relaxed mb-12 max-w-md">
            Overpay help you set saving goals, earn cash back offers.
          </p>
        </div>
      </div>
    </div>
  );
}