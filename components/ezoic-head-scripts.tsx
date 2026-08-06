/**
 * Ezoic Step 2 — header scripts in <head>, privacy scripts before sa.min.js.
 * @see https://docs.ezoic.com/docs/ezoicads/integration/
 */
export function EzoicHeadScripts() {
  if (process.env.NODE_ENV !== "production") return null
  if (process.env.NEXT_PUBLIC_AD_NETWORK !== "ezoic") return null

  return (
    <>
      {/* Privacy scripts first — data-cfasync before src per Ezoic docs */}
      <script
        data-cfasync="false"
        src="https://cmp.gatekeeperconsent.com/min.js"
      />
      <script
        data-cfasync="false"
        src="https://the.gatekeeperconsent.com/cmp.min.js"
      />
      <script async src="https://www.ezojs.com/ezoic/sa.min.js" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.ezstandalone = window.ezstandalone || {};
            window.ezstandalone.cmd = window.ezstandalone.cmd || [];
          `,
        }}
      />
      <script src="https://ezoicanalytics.com/analytics.js" async />
    </>
  )
}
