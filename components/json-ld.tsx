/**
 * Renders a schema.org structured-data block as a JSON-LD <script> tag.
 *
 * Accepts one object or an array of objects. The `<` character is escaped so a
 * value can never prematurely close the script element (XSS-safe since the data
 * is our own, but escaping is good practice).
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
