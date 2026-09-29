import { ReactNode } from "react";

interface Props {
  kind: "phone" | "browser";
  gradient: string; // classes de gradiente do Tailwind, ex.: "from-teal-600 to-cyan-400"
  icon: ReactNode;
  className?: string;
}

// Mockup de dispositivo com o mesmo visual das capas dos projetos
export default function DeviceMockup({ kind, gradient, icon, className = "" }: Props) {
  const isPhone = kind === "phone";

  return (
    <div
      className={`relative overflow-hidden border-2 border-white/30 bg-[#0b0f19] shadow-2xl ${
        isPhone ? "aspect-[9/18] w-40 rounded-[2rem] p-2 md:w-48" : "aspect-[16/10] w-72 rounded-2xl p-2 pt-7 md:w-96"
      } ${className}`}
    >
      {isPhone ? (
        <div className="absolute left-1/2 top-2.5 h-2 w-14 -translate-x-1/2 rounded-full bg-[#0b0f19]" />
      ) : (
        <div className="absolute left-3 top-2.5 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
      )}
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br ${gradient} ${
          isPhone ? "rounded-3xl" : "rounded-lg"
        } p-4 text-white`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15">{icon}</div>
        <div className="h-2 w-3/4 rounded-full bg-white/30" />
        <div className="h-2 w-1/2 rounded-full bg-white/20" />
        <div className="mt-2 h-6 w-2/3 rounded-full bg-white/90" />
      </div>
    </div>
  );
}
