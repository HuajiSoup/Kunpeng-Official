import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function TestingCTA() {
  return (
    <section className="py-8 lg:py-10 bg-white scroll-mt-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-6 h-6 text-blue-600" />
        </div>
        
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
          未找到您需要的测试项目？
        </h2>
        
        <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          XXXXXXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX
        </p>

        <Link
          href="/contact"
          className="group inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          <span>联系技术专家</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
