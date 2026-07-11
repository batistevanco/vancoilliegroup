export default function GradientOrb({ label }: { label: string }) {
  return (
    <div className="relative aspect-square w-72 shrink-0 rounded-full shadow-[0_0_90px_rgba(59,130,246,0.25)] sm:w-80 md:w-96">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 22%, #82b6ff 0%, #2c4a7c 32%, #0b0b12 56%, #3c2712 80%, #ffb454 100%)",
        }}
      />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_105%,rgba(255,180,84,0.55),transparent_60%)]" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.35),transparent_45%)]" />
      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3">
        <span className="text-4xl font-semibold tracking-tight text-white">VG</span>
        <span className="text-lg text-white/90">{label}</span>
      </div>
    </div>
  );
}
