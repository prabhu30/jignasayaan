/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { dev, isServer }) => {
    // Next minifies CSS with cssnano, whose colormin pass rewrites rgba() as hsla()
    // using integer percentages. That does not round-trip: text-ivory/90 became
    // #F9F9F6 (from #FAFAF7) and text-charcoal/70 became #121212 (from #111111).
    // Both shifts are 1/255 and invisible in practice, but this port is verified
    // pixel-for-pixel against reference/original-index.html, so the pass is removed.
    //
    // Cost: the stylesheet ships unminified (~51KB raw, still gzips to ~8KB).
    // Delete this block if you would rather have the smaller file than exact colours.
    if (!dev && !isServer && Array.isArray(config.optimization?.minimizer)) {
      config.optimization.minimizer = config.optimization.minimizer.filter(
        m => !String(m).includes('CssMinimizerPlugin')
      )
    }
    return config
  },
}

export default nextConfig
