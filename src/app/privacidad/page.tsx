import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text`}>
          Aviso de Privacidad
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Última actualización: &quot;Marzo 04, 2024&quot;</p>

          <p className="mb-8">
            En Datagora Inteligencia Digital S.A.S. de C.V. (en adelante, &quot;Datagora&quot;), estamos comprometidos con la protección de los datos personales de nuestros clientes, proveedores y cualquier persona que interactúe con nosotros. Este Aviso de Privacidad se emite en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            1. Identidad y Domicilio del Responsable
          </h2>
          <p>Datagora Inteligencia Digital S.A.S. de C.V.</p>
          <p>Dirección: Fracc. Desarrollo, Blvd. Antonio Rocha Cordero, Del Pedregal 157-D201, 78295 San Luis Potosí, S.L.P.</p>
          <p>Correo Electrónico: contacto@datagora.mx</p>
          <p>Teléfono: +52 (556) 429 9653</p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            2. Datos Personales que Recabamos
          </h2>
          <p>Podremos recabar los siguientes datos personales:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Datos de identificación: Nombre completo, domicilio, teléfono, correo electrónico.</li>
            <li>Datos fiscales: RFC, razón social, información de facturación.</li>
            <li>Datos financieros: Información bancaria y métodos de pago, cuando sea necesario para la prestación de servicios.</li>
            <li>Datos técnicos: Información relacionada con los sistemas o proyectos contratados.</li>
            <li>Datos de navegación: Tipo de navegador, sistema operativo, páginas visitadas, tiempo de navegación, dirección IP, y ubicación geográfica.</li>
          </ul>

          <p className="mt-6">
            En ciertos casos, Datagora podrá recibir datos personales de terceros, como socios comerciales o proveedores. Estos datos se utilizarán exclusivamente para los fines establecidos en este Aviso de Privacidad y se protegerán conforme a nuestras políticas de seguridad.
          </p>
          <p className="mt-4">
            No recabamos datos personales sensibles. Solicitamos abstenerse de proporcionar datos relacionados con origen étnico, opiniones políticas, creencias religiosas, afiliaciones sindicales, salud, orientación sexual, o antecedentes penales.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            3. Finalidades del Tratamiento de Datos
          </h2>
          <p>Los datos personales que recabamos serán utilizados para las siguientes finalidades:</p>
          <p className="font-bold mt-4">Primarias:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Proveer los servicios contratados, incluyendo desarrollo de software y soluciones de inteligencia artificial.</li>
            <li>Emitir facturas y cumplir con obligaciones fiscales.</li>
            <li>Contactar al Cliente para cuestiones relacionadas con el proyecto o servicio.</li>
          </ul>
          <p className="font-bold mt-4">Secundarias:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Realizar estudios de mercado y encuestas de satisfacción.</li>
            <li>Enviar información sobre nuevos servicios, promociones o eventos relacionados con Datagora.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            4. Transferencia de Datos Personales
          </h2>
          <p>
            Datagora no compartirá, venderá ni transferirá sus datos personales a terceros sin su consentimiento previo, salvo en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Cuando sea necesario para el cumplimiento de obligaciones legales.</li>
            <li>Cuando sea requerido por autoridades competentes.</li>
            <li>Para la ejecución de proyectos que involucren a terceros contratados por Datagora, bajo estrictas obligaciones de confidencialidad.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            5. Medidas de Seguridad
          </h2>
          <p>
            Implementamos medidas de seguridad administrativas, físicas y técnicas para proteger sus datos personales contra pérdida, robo, acceso no autorizado, uso indebido o alteración. Estas medidas incluyen:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Control de acceso restringido a la información.</li>
            <li>Uso de tecnologías seguras para el almacenamiento y transmisión de datos.</li>
            <li>Capacitación periódica a nuestro personal sobre protección de datos personales.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            6. Derechos ARCO
          </h2>
          <p>
            El Cliente tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (ARCO) al tratamiento de sus datos personales. Para ejercer cualquiera de estos derechos, podrá enviar una solicitud a:
          </p>
          <p className="mt-4">Correo Electrónico: contacto@datagora.mx</p>
          <p>Teléfono: +52 (556) 429 9653</p>

          <p className="mt-6">La solicitud deberá incluir:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Nombre completo del titular.</li>
            <li>Descripción clara del derecho que desea ejercer.</li>
            <li>Documentación que acredite su identidad o representación legal.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            7. Uso de Cookies y Tecnologías Similares
          </h2>
          <p>
            Nuestro sitio web podrá utilizar cookies y otras tecnologías para mejorar la experiencia del usuario. Estas herramientas recaban datos como:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Tipo de navegador y sistema operativo.</li>
            <li>Páginas visitadas.</li>
            <li>Tiempo de navegación.</li>
            <li>Dirección IP.</li>
            <li>Ubicación geográfica.</li>
          </ul>

          <p className="font-bold mt-6">Categorías de Cookies que Utilizamos:</p>
          <ol className="list-decimal pl-6 mt-4 space-y-4">
            <li>
              <span className="font-bold">Cookies de funcionalidad:</span> Permiten recordar las preferencias del usuario y proporcionar una experiencia personalizada sin rastrear actividad fuera del sitio web.
            </li>
            <li>
              <span className="font-bold">Cookies de rendimiento:</span> Recaban información sobre cómo los visitantes utilizan el sitio web, como las páginas visitadas y el tiempo de permanencia, para mejorar su rendimiento.
            </li>
            <li>
              <span className="font-bold">Cookies de publicidad:</span> Usadas para mostrar anuncios relevantes y medir la efectividad de las campañas publicitarias.
            </li>
          </ol>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            8. Retención de Datos Personales
          </h2>
          <p>
            Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir con los fines descritos en este Aviso de Privacidad, salvo que exista una obligación legal de conservarlos por un periodo más largo. Una vez cumplidos dichos fines, los datos serán eliminados de manera segura.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            9. Automatización y Decisiones Algorítmicas
          </h2>
          <p>
            Datagora no utiliza sistemas de toma de decisiones completamente automatizados que puedan tener efectos legales o significativos para el usuario. Cualquier decisión automatizada será complementada con revisión humana.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            10. Modificaciones al Aviso de Privacidad
          </h2>
          <p>
            Datagora se reserva el derecho de modificar este Aviso de Privacidad para cumplir con cambios legales o por ajustes en nuestras prácticas internas. Las modificaciones serán publicadas en nuestro sitio web.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            11. Contacto
          </h2>
          <p>Para dudas o comentarios sobre este Aviso de Privacidad, puede comunicarse con nosotros a:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Correo Electrónico: contacto@datagora.mx</li>
            <li>Teléfono: +52 (556) 429 9653</li>
            <li>Dirección: Fracc. Desarrollo, Blvd. Antonio Rocha Cordero, Del Pedregal 157-D201, 78295 San Luis Potosí, S.L.P.</li>
          </ul>

          <p className="mt-8 text-sm text-gray-400">
            Al proporcionar sus datos personales a Datagora, usted manifiesta su conformidad con los términos y condiciones establecidos en este Aviso de Privacidad.
          </p>
        </div>
      </div>
    </main>
  )
} 