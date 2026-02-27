import Image from "next/image";

export default function ShopHeader() {
    return (
        <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
            {/* Blurred Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-healthy.png"
                    alt="Shop Background"
                    fill
                    className="object-cover blur-sm brightness-75 scale-110"
                />
            </div>

            {/* Large Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <h1 className="text-[150px] md:text-[200px] font-black text-white/20 tracking-tighter leading-none">
                    Shop
                </h1>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 drop-shadow-lg">
                    SIMBA SHOP
                </h2>
                <p className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">
                    Give All You Need
                </p>
            </div>
        </div>
    );
}
