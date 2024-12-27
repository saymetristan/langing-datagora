### **Visión General de la Web**

La web será **una experiencia inmersiva** que combine diseños 3D creados con Three.js, transiciones suaves y una identidad visual futurista. El objetivo es dejar a los visitantes con la sensación de que Datagora está redefiniendo los límites de la IA y de la innovación.

---

### **Estructura y Diseño**

1. **Pantalla de Inicio (Hero)**  
   - **Fondo 3D** con Three.js que muestre un entorno dinámico (puede ser una figura geométrica con rotaciones o partículas que reaccionan al movimiento del cursor).  
   - **Texto Principal** centrado y sobrepuesto al 3D:  
     - **“Redefine el Presente. Conquista el Futuro con IA.”**  
   - **Subtexto**:  
     - *“En Datagora diseñamos soluciones de Inteligencia Artificial que impulsan a empresas y usuarios finales hacia un nuevo paradigma de eficiencia y crecimiento.”*  
   - **Botón CTA**:  
     - “Conoce Cómo” (ancla para bajar a la siguiente sección).  
   - **Estilo**: Colores oscuros (negro, gris carbón) con acentos en neones (azul eléctrico, morado o verde cibernético).

2. **Sección de Soluciones: Empresas**  
   - **Título de Sección**: “Soluciones IA para Empresas”  
   - **Descripción Breve**:  
     - *“Impulsa tu negocio con automatizaciones inteligentes que liberan tiempo, reducen costos y multiplican resultados.”*  
   - **Galería de Tarjetas** (cada una con animación de entrada sutil usando Three.js o GSAP):  
     - **Agente de Prospección Inteligente**  
       - Texto: *“Investiga leads, redacta correos en frío hiperpersonalizados y acelera tus ventas.”*  
     - **Traducción Masiva de Excel**  
       - Texto: *“Procesa miles de líneas en segundos sin perder precisión.”*  
     - **Automatización de Contenido**  
       - Texto: *“Genera y publica posts en redes al instante, optimizados para tu audiencia.”*  
     - **Agentes de Venta 24/7 (WhatsApp, Facebook, Instagram y Llamadas)**  
       - Texto: *“Atención constante y cerrando ventas sin interrupciones.”*  
     - **ERP Somos Oliver + IA**  
       - Texto: *“Integra IA en la gestión de tu negocio para facturar, organizar e impulsar resultados.”*

3. **Sección de Soluciones: Usuarios Finales**  
   - **Título de Sección**: “Soluciones IA para Usuarios”  
   - **Descripción Breve**:  
     - *“Transforma tu día a día con asistentes inteligentes diseñados para simplificar tus finanzas, salud y estilo de vida.”*  
   - **Galería de Tarjetas** (mismo estilo que la sección anterior):  
     - **Asesor Financiero Personal en WhatsApp**  
       - Texto: *“Administra tus finanzas de manera sencilla con alertas, reportes y seguimiento automático desde tu móvil.”*  
       Link: https://getwispen.com
     - **Asistente de Rutinas de Ejercicio**  
       - Texto: *“Accede a entrenamientos personalizados impulsados por inteligencia artificial que se adaptan a tu progreso y necesidades.”*  
       Link: https://actibai.com
     - **Plataforma IA para Carreras Deportivas**  
       - Texto: *“Encuentra, compra y administra tus fotos de carreras fácilmente con tecnología de reconocimiento facial y de dorsales.”*  
       Link: https://pacerpic.com
     - **Mejora Inteligente de Imágenes para Ecommerce**  
       - Texto: *“Optimiza la presentación de tus productos con iluminación mejorada y fondos personalizados, manteniendo la calidad y el estilo de tus imágenes.”*  
       Link: https://lumixfy.com
4. **Sección de Testimonios o Impacto**  
   - **Texto Principal**: “Casos de Éxito y Resultados Reales”  
   - **Subtexto**: *“Desde el aumento de ventas hasta la transformación de la experiencia de usuario, hemos generado valor tangible en cada proyecto.”*  
   - **Ejemplos de Métricas** (con animaciones de conteo incremental):  
     - “+31% en Ventas con Agentes de Prospección Inteligente”  
     - “+48% de Eficiencia al Clasificar Imágenes en Eventos Deportivos”  
     - “+62% de Apertura en Campañas de Email Hiperpersonalizadas”  

5. **Sección CTA Final**  
   - **Título**: “El Futuro se Construye Hoy”  
   - **Subtexto**: *“Toma la delantera y conviértete en el referente de tu industria con soluciones IA de Datagora.”*  
   - **Botón CTA**: “Charlemos  
   - **Fondo 3D**: Podría mostrar un ambiente futurista en movimiento, cerrando con un broche de oro la experiencia inmersiva.

6. **Footer**  
   - **Datos de Contacto**  
   - **Copyright**  
   - **Enlaces Relevantes** (Política de Privacidad, Términos de Uso, etc.)

---

### **Tecnología a Utilizar**

- **Next.js** para la estructura del sitio, renderizado rápido y SEO optimizado.  
- **Three.js** para la escena 3D y animaciones principales.  
- **GSAP** para transiciones suaves, animaciones de entrada y microinteracciones.  
- **Tailwind CSS** para un diseño consistente y estilizado, manteniendo un flujo de trabajo ágil.  

---

### **Instrucciones para el Desarrollador**

1. **Configurar Proyecto**  
   - Crear el proyecto con `npx create-next-app datagora-website`.  
   - Instalar dependencias:  
     - `npm install three gsap tailwindcss postcss autoprefixer`.  
   - Configurar Tailwind en el `postcss.config.js` y `tailwind.config.js` siguiendo la documentación oficial.

2. **Implementar Estructura**  
   - En el archivo `pages/index.js` (o `app/page.js` si usas la nueva app directory de Next.js), crear los componentes para cada sección:  
     - `HeroSection`  
     - `SolutionsEmpresasSection`  
     - `SolutionsUsuariosSection`  
     - `TestimoniosSection`  
     - `CTASection`  
     - `Footer`  

3. **Montar la Escena 3D con Three.js**  
   - Dentro de `HeroSection`, implementar un canvas de Three.js donde se renderee un objeto 3D o un sistema de partículas.  
   - Ajustar la cámara y la iluminación para crear un entorno dinámico.  
   - Vincular interacciones del ratón o el scroll para animar ligeramente el objeto (por ejemplo, rotación sutil o distorsiones de partículas).

4. **Animaciones con GSAP**  
   - Agregar animaciones de entrada (fade-in o slide-in) a los elementos de texto y a las tarjetas de soluciones cuando aparezcan en el viewport.  
   - En la sección de Testimonios o Impacto, usar animaciones de conteo (GSAP Timeline o funciones integradas) para mostrar incrementos de números.

5. **Optimizar para Rendimiento**  
   - Utilizar Lazy Loading para el canvas de Three.js si fuese necesario.  
   - Minimizar texturas y geometrías complejas para no afectar tiempos de carga.  
   - Configurar `next.config.js` para un performance óptimo (compresión, imágenes optimizadas, etc.).

6. **Revisar Responsividad**  
   - Asegurarse de que la experiencia 3D sea armónica en dispositivos móviles (con una versión simplificada o con menos partículas).  
   - Testear el layout para diferentes breakpoints usando las utilidades de Tailwind.

7. **Despliegue**  
   - Usar Github para guardar el proyecto.
   - Realizar build de producción con `npm run build`.  
   - Desplegar en un servicio como Vercel para un mejor rendimiento y dominio personalizado.

---

### **Copy Final para Cada Sección (en Resumen)**

- **Hero**:  
  “Redefine el Presente. Conquista el Futuro con IA.”  
  “En Datagora diseñamos soluciones inteligentes para impulsar a empresas y usuarios finales hacia nuevas fronteras.”  

- **Soluciones para Empresas**:  
  “Potencia tus procesos, minimiza tus costos y maximiza tus ingresos con automatizaciones creadas a la medida.”  

- **Soluciones para Usuarios**:  
  “Vive una experiencia personalizada que cuida tus finanzas, tu salud y tu tiempo con la ayuda de IA.”  

- **Testimonios**:  
  “Nuestra tecnología no solo promete, cumple. Descubre los resultados que hemos generado en diferentes industrias.”  

- **CTA Final**:  
  “El Futuro se Construye Hoy. Agenda una Demo y descubre cómo podemos transformar tu negocio y tu vida.”
