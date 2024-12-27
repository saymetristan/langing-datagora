import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text`}>
          Términos y Condiciones
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">Última actualización: Marzo 04, 2024</p>

          <p className="mb-8">
            Estos Términos y Condiciones (en adelante, los "Términos") regulan la relación contractual entre Datagora Inteligencia Digital S.A.S. de C.V. (en adelante, "Datagora") y el cliente (en adelante, el "Cliente"), respecto a los servicios de desarrollo de software y soluciones de inteligencia artificial proporcionados por Datagora. Al contratar los servicios de Datagora, el Cliente acepta plenamente los presentes Términos, los cuales constituyen un acuerdo legal vinculante.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            1. Definiciones
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cliente: Persona física o moral que contrata los servicios de Datagora.</li>
            <li>Servicios: Actividades de desarrollo de software, implementación de soluciones de inteligencia artificial, consultoría y optimización de procesos digitales.</li>
            <li>Software: Programas informáticos desarrollados por Datagora conforme a las especificaciones del Cliente.</li>
            <li>Partes: Datagora y el Cliente, referidos de manera conjunta.</li>
            <li>Plazo de Entrega: El periodo acordado entre las Partes para la ejecución y entrega de los Servicios.</li>
            <li>Confidencialidad: La obligación de las Partes de proteger información clasificada como confidencial.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            2. Alcance de los Servicios
          </h2>
          <p>
            Datagora se compromete a proporcionar los Servicios descritos en la propuesta o contrato correspondiente, los cuales incluirán especificaciones detalladas, plazos de entrega y costos. Cualquier cambio en el alcance de los Servicios deberá ser aprobado por escrito por ambas Partes, y podrá implicar ajustes en tiempos y tarifas.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            3. Obligaciones de las Partes
          </h2>
          <h3 className="text-xl font-semibold mt-6 mb-3 text-white">3.1. Obligaciones de Datagora:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar los Servicios en cumplimiento con los estándares de calidad acordados.</li>
            <li>Cumplir con los plazos establecidos, salvo circunstancias de fuerza mayor o eventos fuera de su control razonable.</li>
            <li>Garantizar la confidencialidad de toda la información proporcionada por el Cliente.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-white">3.2. Obligaciones del Cliente:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar de manera oportuna toda la información y recursos necesarios para la ejecución de los Servicios.</li>
            <li>Realizar los pagos conforme a los términos establecidos en la propuesta o contrato.</li>
            <li>Revisar y aprobar entregables en los plazos estipulados para evitar retrasos en el proyecto.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            4. Propiedad Intelectual
          </h2>
          <h3 className="text-xl font-semibold mt-6 mb-3 text-white">4.1. Derechos del Cliente:</h3>
          <p>
            El Cliente conservará la propiedad de los datos, información y materiales que proporcione a Datagora para el desarrollo de los Servicios.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-white">4.2. Derechos de Datagora:</h3>
          <p>
            Datagora retiene todos los derechos sobre las herramientas, bibliotecas y código preexistente utilizados en el desarrollo de los Servicios, salvo acuerdo en contrario por escrito.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-white">4.3. Transferencia de Derechos:</h3>
          <p>
            Los derechos de uso del Software desarrollado serán transferidos al Cliente una vez recibido el pago completo del proyecto, bajo los términos establecidos en el contrato.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            5. Protección de Datos Personales
          </h2>
          <p>
            Datagora se compromete a cumplir con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento. Los datos personales proporcionados por el Cliente serán tratados conforme a nuestro Aviso de Privacidad, disponible en la sección correspondiente de nuestro sitio web.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            6. Términos de Pago
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Las tarifas y plazos de pago serán los acordados en la propuesta o contrato.</li>
            <li>Los pagos retrasados estarán sujetos a un recargo mensual del 5% sobre el monto pendiente.</li>
            <li>Datagora se reserva el derecho de suspender los Servicios en caso de incumplimiento de pago por parte del Cliente.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            7. Confidencialidad
          </h2>
          <p>
            Ambas Partes acuerdan que toda la información clasificada como confidencial será protegida y no podrá ser divulgada a terceros sin el consentimiento previo por escrito de la otra Parte, salvo por mandato legal.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            8. Soporte y Garantías
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Datagora proporcionará soporte técnico sin costo durante 3 meses posteriores a la entrega de los Servicios.</li>
            <li>Modificaciones adicionales o solicitudes fuera del alcance inicial serán facturadas como servicios adicionales.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            9. Limitación de Responsabilidad
          </h2>
          <p>Datagora no será responsable por:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Daños indirectos, incidentales o consecuentes derivados del uso del Software.</li>
            <li>Fallos causados por integraciones realizadas por terceros o uso inadecuado del Cliente.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            10. Resolución de Disputas
          </h2>
          <p>
            Las Partes se comprometen a resolver cualquier controversia de manera amistosa. Si no se alcanza un acuerdo, las disputas serán sometidas a los tribunales competentes de San Luis Potosí, S.L.P., conforme a las leyes vigentes en los Estados Unidos Mexicanos.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            11. Política de Cancelación
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>El Cliente podrá cancelar los Servicios antes del inicio del desarrollo con un reembolso del 80% del anticipo.</li>
            <li>Una vez iniciado el proyecto, no se realizarán reembolsos salvo en caso de incumplimiento grave por parte de Datagora.</li>
          </ul>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            12. Cláusula Anticorrupción
          </h2>
          <p>
            Ambas Partes se comprometen a cumplir con la Ley General del Sistema Nacional Anticorrupción, absteniéndose de incurrir en sobornos, actos de corrupción o conductas ilegales que afecten la ejecución del contrato.
          </p>

          <h2 className={`${spaceGrotesk.className} text-2xl font-bold mt-12 mb-4 text-white`}>
            Contacto
          </h2>
          <p>Para cualquier consulta relacionada con estos Términos, comuníquese con nosotros a:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Correo Electrónico: contacto@datagora.mx</li>
            <li>Teléfono: +52 (556) 429 9653</li>
            <li>Dirección: Fracc. Desarrollo, Blvd. Antonio Rocha Cordero, Del Pedregal 157-D201, 78295 San Luis Potosí, S.L.P.</li>
          </ul>
        </div>
      </div>
    </main>
  )
} 