import type { LegalDocumentData } from "@/components/legal-document"

export const privacyEs: LegalDocumentData = {
  eyebrow: "Política de privacidad",
  title: "Política de privacidad de Toolando.tech",
  intro:
    "Esta Política de privacidad describe qué datos se procesan en Toolando.tech, con qué fines, sobre qué base legal y qué derechos tiene usted. Proceso datos personales de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la legislación polaca aplicable en materia de protección de datos.",
  lastUpdated: "Última actualización: 23 de julio de 2026",
  sections: [
    {
      title: "§1. Responsable del tratamiento",
      paragraphs: [
        "1.1. El responsable del tratamiento («Responsable») es Szymon Badyl, propietario de Toolando.tech, que presta servicios de herramientas en línea.",
        "1.2. Contacto de privacidad: {{email}}.",
        "1.3. El Responsable no ha designado un Delegado de Protección de Datos, ya que no es obligatorio para esta actividad según el RGPD.",
      ],
    },
    {
      title: "§2. Qué datos procesamos",
      paragraphs: ["2.1. Según cómo utilice el Servicio, procesamos las siguientes categorías:"],
      list: [
        "Datos técnicos y de uso: dirección IP, tipo y versión del navegador, sistema operativo, idioma, fecha y hora de la solicitud, páginas visitadas, origen del tráfico, identificadores de cookies (tras el consentimiento).",
        "Datos de la cuenta: dirección de correo electrónico, contraseña (hash), ID de usuario, fecha de registro, estado Premium, ID de cliente de Stripe (si aplica).",
        "Datos de pago: procesados por Stripe — el Responsable no almacena números completos de tarjetas de pago.",
        "Datos de correspondencia: dirección de correo electrónico, contenido del mensaje, fecha de contacto — cuando escribe a {{email}} o utiliza el formulario de contacto.",
        "Archivos del usuario: procesados temporalmente solo para realizar operaciones de herramientas — no se almacenan tras completar la conversión.",
      ],
    },
    {
      title: "§3. Fines y bases legales",
      paragraphs: ["3.1. Procesamos datos para los siguientes fines:"],
      definitions: [
        {
          term: "Prestación del Servicio",
          description:
            "Conversión de archivos, funcionamiento de herramientas, gestión de la Cuenta — base legal: art. 6(1)(b) RGPD (contrato) o (f) (interés legítimo: operación del Servicio).",
        },
        {
          term: "Suscripción Premium",
          description:
            "Gestión de pagos y suscripciones — base legal: art. 6(1)(b) RGPD; contabilidad: art. 6(1)(c) (obligación legal).",
        },
        {
          term: "Análisis de tráfico",
          description:
            "Google Analytics — solo tras consentimiento para cookies analíticas — base legal: art. 6(1)(a) RGPD (consentimiento).",
        },
        {
          term: "Publicidad",
          description:
            "Google AdSense — solo tras consentimiento para cookies publicitarias — base legal: art. 6(1)(a) RGPD (consentimiento).",
        },
        {
          term: "Seguridad",
          description:
            "Prevención de abusos, registros del servidor — base legal: art. 6(1)(f) RGPD (interés legítimo).",
        },
        {
          term: "Contacto y reclamaciones",
          description:
            "Respuesta a mensajes — base legal: art. 6(1)(f) RGPD o (b) (cuando esté relacionado con un contrato).",
        },
      ],
    },
    {
      title: "§4. Cookies y tecnologías similares",
      paragraphs: [
        "4.1. El Servicio utiliza cookies y tecnologías similares. En la primera visita mostramos un banner de consentimiento donde puede aceptar todas las cookies o limitarse a las esenciales.",
        "4.2. Tipos de cookies:",
      ],
      list: [
        "Esenciales — necesarias para el funcionamiento del Servicio (p. ej. idioma, sesión, preferencias de cookies). No requieren consentimiento.",
        "Analíticas — Google Analytics, estadísticas agregadas de visitas. Requieren consentimiento.",
        "Publicitarias — Google AdSense, personalización de anuncios. Requieren consentimiento.",
      ],
      afterList: [
        "4.3. Puede cambiar sus preferencias de cookies en cualquier momento mediante el banner o la configuración del navegador.",
      ],
    },
    {
      title: "§5. Destinatarios y encargados del tratamiento",
      paragraphs: ["5.1. Los datos pueden compartirse con encargados de confianza que actúan en nombre del Responsable:"],
      list: [
        "Vercel Inc. — alojamiento e infraestructura (EE. UU., cláusulas contractuales tipo de la UE).",
        "Stripe, Inc. — procesamiento de pagos Premium (EE. UU./Irlanda, PCI DSS).",
        "Google LLC — Analytics y AdSense (tras consentimiento; política de socios: https://policies.google.com/technologies/partner-sites).",
        "Resend — correos electrónicos transaccionales (p. ej. correo de bienvenida tras el registro), si está configurado.",
        "Proveedores de modelos de IA — procesamiento de prompts y archivos solo dentro de herramientas Premium de IA, sin almacenamiento tras la finalización.",
      ],
      afterList: ["5.2. El Responsable no vende datos personales a terceros."],
    },
    {
      title: "§6. Archivos subidos a las herramientas",
      paragraphs: [
        "6.1. Los archivos subidos a convertidores y otras herramientas no se almacenan tras completar la operación.",
        "6.2. Los archivos no se utilizan para entrenamiento de modelos de IA, elaboración de perfiles ni marketing.",
        "6.3. Algunas herramientas (p. ej. el abridor universal de archivos) procesan archivos completamente de forma local en el navegador — el archivo nunca abandona su dispositivo.",
        "6.4. No suba archivos que contengan datos sensibles (p. ej. datos de salud, números de identificación nacional) a menos que sea absolutamente necesario — lo hace bajo su propio riesgo.",
      ],
    },
    {
      title: "§7. Plazos de conservación",
      paragraphs: ["7.1. Conservamos los datos durante los siguientes períodos:"],
      list: [
        "Datos de la cuenta — hasta la eliminación de la Cuenta o una solicitud de eliminación.",
        "Registros del servidor — hasta 90 días, salvo que se requiera una conservación más prolongada para hacer valer reclamaciones.",
        "Correspondencia — hasta 3 años desde el cierre del caso.",
        "Datos de facturación (Stripe) — según exija la legislación fiscal (normalmente 5 años).",
        "Archivos del usuario — eliminados inmediatamente tras el procesamiento (normalmente segundos o minutos).",
        "Preferencias de cookies — hasta 12 meses o hasta la retirada del consentimiento.",
      ],
    },
    {
      title: "§8. Sus derechos (RGPD)",
      paragraphs: ["8.1. Usted tiene los siguientes derechos:"],
      list: [
        "Derecho de acceso (art. 15 RGPD).",
        "Derecho de rectificación (art. 16 RGPD).",
        "Derecho de supresión — «derecho al olvido» (art. 17 RGPD).",
        "Derecho a la limitación del tratamiento (art. 18 RGPD).",
        "Derecho a la portabilidad de los datos (art. 20 RGPD).",
        "Derecho de oposición al tratamiento basado en el art. 6(1)(f) RGPD (art. 21 RGPD).",
        "Derecho a retirar el consentimiento en cualquier momento — sin afectar a la licitud del tratamiento anterior a la retirada (art. 7(3) RGPD).",
        "Derecho a presentar una reclamación ante una autoridad de control (en Polonia: PUODO, uodo.gov.pl).",
      ],
      afterList: [
        "8.2. Para ejercer sus derechos, escriba a {{email}}. Responderé sin dilación indebida, como máximo en 30 días.",
      ],
    },
    {
      title: "§9. Seguridad de los datos",
      paragraphs: [
        "9.1. Aplico medidas técnicas y organizativas adecuadas al riesgo, incluido el cifrado HTTPS, el acceso limitado a los sistemas y la eliminación de archivos tras el procesamiento.",
        "9.2. Ningún sistema es 100 % seguro. En caso de una violación de la seguridad de los datos personales que pueda entrañar un alto riesgo para sus derechos, le informaré de conformidad con el art. 34 RGPD.",
      ],
    },
    {
      title: "§10. Menores",
      paragraphs: [
        "10.1. El Servicio no está dirigido a menores de 16 años. No proceso conscientemente datos de menores de 16 años sin el consentimiento de un tutor.",
        "10.2. Si cree que un menor ha facilitado datos sin consentimiento del tutor, contacte con {{email}} — los datos serán eliminados.",
      ],
    },
    {
      title: "§11. Cambios en esta Política",
      paragraphs: [
        "11.1. Esta Política puede actualizarse para reflejar cambios en el Servicio, las tecnologías o la legislación.",
        "11.2. Los cambios sustanciales se comunicarán mediante un aviso en el Servicio o por correo electrónico (para usuarios con Cuenta).",
        "11.3. La versión actual está siempre disponible en /polityka-prywatnosci.",
      ],
    },
  ],
  footerNote:
    "Preguntas sobre privacidad: {{email}}. Términos del Servicio disponibles en /regulamin.",
}
