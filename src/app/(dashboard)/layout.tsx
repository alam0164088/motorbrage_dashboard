import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function MotorBridgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-transparent">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur rounded-lg p-6 shadow-sm animate-fade-in transition-smooth animate-float">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
