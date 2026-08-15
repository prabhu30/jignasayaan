import ShareWidget from '@/components/ShareWidget'

/**
 * The white credit strip below the artwork on the standalone pages.
 * The share control sits inline, immediately after the credit sentence.
 */
export default function PageCredits() {
  return (
    <footer className="bg-white/75 backdrop-blur-[3px] border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-8 text-center">
        <h2 className="font-head font-extrabold text-[20px] md:text-[24px] text-midnight">Content &amp; Design</h2>

        <p className="mt-2 text-[15px] md:text-base leading-relaxed text-charcoal/70 max-w-[760px] mx-auto">
          Content development and design by Jignasa Artverse – Jignasayaan, The Modern Desayatana.
          <span className="inline-flex align-middle ml-1.5 -translate-y-px">
            <ShareWidget />
          </span>
        </p>

        <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-charcoal/60">
          Copyright ©️ 2026, Jignasa Artverse. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
