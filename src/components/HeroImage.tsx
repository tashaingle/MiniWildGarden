import Image, { type ImageProps } from "next/image";

type HeroImageProps = Omit<ImageProps, "fill" | "priority" | "sizes" | "quality"> & {
  /** Slightly lower quality for secondary full-bleed bands */
  compact?: boolean;
};

/**
 * Full-bleed hero photography.
 * Sources are ~1150–1170px wide, so we avoid heavy recompression and keep
 * sizes explicit so Next serves the largest available render of the asset.
 */
export function HeroImage({ className, alt, compact = false, style, ...props }: HeroImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      fill
      priority
      quality={compact ? 85 : 92}
      sizes="100vw"
      style={style}
    />
  );
}
