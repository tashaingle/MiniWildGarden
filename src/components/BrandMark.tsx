type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark ${compact ? "brand-mark--compact" : ""}`} aria-hidden="true">
      <span className="brand-mark__sun" />
      <span className="brand-mark__leaf brand-mark__leaf--one" />
      <span className="brand-mark__leaf brand-mark__leaf--two" />
      <span className="brand-mark__stem" />
    </span>
  );
}
