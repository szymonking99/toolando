declare module "wawoff2" {
  /** Compress an SFNT (TTF/OTF) buffer into WOFF2. */
  export function compress(input: Uint8Array | Buffer): Promise<Uint8Array>;
  /** Decompress a WOFF2 buffer back into an SFNT (TTF/OTF). */
  export function decompress(input: Uint8Array | Buffer): Promise<Uint8Array>;
}
