// Círculos suaves de fundo, no mesmo estilo das capas dos projetos
export default function GlowBackground({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute right-1/4 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
    </div>
  );
}
