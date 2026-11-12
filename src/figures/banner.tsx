// ponytail: plugins show their WordPress.org banner instead of a hand-drawn iso figure; draw one if a plugin gets a feature spot.
export default function bannerFigure(src: string, alt: string) {
  return function BannerFigure() {
    return (
      <img
        src={src}
        alt={alt}
        width={1544}
        height={500}
        loading="lazy"
        className="w-full rounded-[20px] shadow-[0_0_0_1px_var(--color-rule-strong)]"
      />
    )
  }
}
