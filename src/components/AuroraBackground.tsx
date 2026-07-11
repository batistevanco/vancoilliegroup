const STARS = Array.from({ length: 92 }, (_, i) => ({
  x: (i * 47 + 11) % 100,
  y: (i * 31 + 7) % 88,
  size: i % 13 === 0 ? 2 : i % 5 === 0 ? 1.5 : 1,
  opacity: 0.18 + (i % 5) * 0.11,
  delay: -((i * 0.37) % 5),
}));

export default function AuroraBackground() {
  return (
    <div className="hero-sky" aria-hidden="true">
      <div className="hero-nebula" />
      <div className="hero-rays" />
      <div className="hero-horizon" />

      <div className="hero-stars">
        {STARS.map((star, index) => (
          <i
            key={index}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-vignette" />
      <div className="hero-grain" />
    </div>
  );
}
