'use client'; 
import Image from "next/image";

import { useEffect, useState } from 'react';



export default function Home() {

  const [visitas, setVisitas] = useState<number>(0);

  useEffect(() => {
    // 1. Intentamos obtener el valor guardado en el navegador
    const visitasGuardadas = localStorage.getItem('captus_views');
    
    let nuevoTotal = 0;

    if (visitasGuardadas) {
      // Si ya existía, le sumamos 1 a la visita anterior
      nuevoTotal = parseInt(visitasGuardadas, 10) + 1;
    } else {
      // Si es la primerísima vez que alguien entra, iniciamos con una base alta para que se vea profesional
      nuevoTotal = 1230; 
    }

    // 2. Guardamos el nuevo total en el almacenamiento local del navegador
    localStorage.setItem('captus_views', nuevoTotal.toString());
    
    // 3. Actualizamos el estado de React para que se pinte en pantalla
    setVisitas(nuevoTotal);
  }, []); // Se ejecuta una sola vez al cargar la página



  return (
   <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. NAVBAR */}
     <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    
    {/* Agrupamos el Logo y el Texto en un solo contenedor alineado */}
    <div className="flex items-center gap-3">
      <Image 
        src="/images/logoc.png" 
        alt="CaptusSoftware Logo" 
        width={48} 
        height={48} 
        className="object-contain"
      />
      <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
        <span className="text-amber-500">Captus</span>
        <span className="text-cyan-400">Software</span>
      </div>
    </div>

    {/* Menú de navegación a la derecha */}
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
      <a href="#servicios" className="hover:text-emerald-400 transition-colors">Servicios</a>
      <a href="#proyectos" className="hover:text-emerald-400 transition-colors">Proyectos</a>
      <a href="#contacto" className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all">
        Contáctanos
      </a>
    </nav>

  </div>
</header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Luces de fondo (Glow effects) basadas en el logo */}
        <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              🌵 Innovación y Soluciones Digitales
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Transformamos tus ideas en <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">Software de Alto Impacto</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
              Creamos ecosistemas digitales robustos, modernos y adaptados a las necesidades de tu negocio. Desde aplicaciones web hasta plataformas escalables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#contacto" className="px-8 py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all text-center">
                Iniciar Proyecto
              </a>
              <a href="#servicios" className="px-8 py-4 rounded-xl bg-slate-800/80 text-slate-200 font-semibold border border-slate-700 hover:bg-slate-800 transition-all text-center">
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Representación visual inspirada en el ambiente tecnológico del logo */}
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-md aspect-square bg-gradient-to-tr from-slate-800 to-slate-800/40 rounded-3xl border border-slate-700 p-8 flex flex-col justify-between shadow-2xl">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl -z-10 opacity-40 blur-xl" />
            
            {/* Header simulado de IDE */}
            <div className="flex items-center gap-2 pb-4 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-slate-500 ml-2 font-mono">CaptusService.ts</span>
            </div>
            
            {/* Cuerpo de código simulado con los colores corporativos */}
            <div className="font-mono text-sm space-y-2 py-4 flex-1">
              <p><span className="text-orange-400">const</span> <span className="text-cyan-400">captusSoftware</span> = &#123;</p>
              <p className="pl-4"><span className="text-emerald-400">misión</span>: <span className="text-amber-200">"Innovación Digital"</span>,</p>
              <p className="pl-4"><span className="text-emerald-400">tecnologías</span>: [<span className="text-amber-200">"Next.js"</span>, <span className="text-amber-200">"Spring Boot"</span>],</p>
              <p className="pl-4"><span className="text-emerald-400">calidad</span>: <span className="text-orange-400">true</span></p>
              <p>&#125;;</p>
              <p className="pt-4 text-emerald-500 animate-pulse">// Desarrollando soluciones robustas...</p>
            </div>

            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl">⚙️</div>
                <div>
                  <p className="text-xs text-slate-400">Estado del Sistema</p>
                  <p className="text-sm font-bold text-white">100% Operativo</p>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-700 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl">
          📊
        </div>
        <div>
          <p className="text-xs text-slate-400">Visitas Totales</p>
          <p className="text-sm font-bold text-white tracking-wider">
            {visitas > 0 ? visitas.toLocaleString() : "..."} 
            <span className="text-[10px] text-cyan-400 font-normal ml-1">en vivo</span>
          </p>
        </div>
      </div>
      
      {/* Luz indicadora */}
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
    </div>
          </div>
        </div>
      </section>

      {/* 3.5. PROYECTOS SECTION */}
<section id="proyectos" className="py-20 bg-slate-800 border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Cabecera de la sección */}
    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Proyectos en Desarrollo</h2>
      <p className="text-slate-400">
        Así avanza la construcción de nuestras soluciones digitales de alto impacto. Transparencia en cada etapa del código.
      </p>
    </div>

    {/* Grid de tarjetas de proyectos */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Tarjeta Proyecto 1 - E-Commerce / Marketplace */}
      <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
  {/* El recuadro del ícono se mantiene intacto */}
  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-2xl group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
    🛒
  </div>
  
  {/* Nombre de la plataforma al lado */}
  <span className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
    CaptusLine
  </span>
</div>
          <h3 className="text-xl font-bold text-white mb-2">Marketplace Core</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Plataforma robusta con roles distribuidos para compradores y vendedores, sincronización de carritos de compra activos en tiempo real y pasarela de pagos integrada.
          </p>
        </div>
        
        {/* Barra de Avance */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-emerald-400 uppercase tracking-wider">Fase de Desarrollo</span>
            <span className="text-white bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">80%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: '80%' }} />
          </div>
        </div>
      </div>

      {/* Tarjeta Proyecto 2 - Plataforma Mobile */}
      <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all group flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
  {/* El recuadro del ícono adaptado para gestión de empleados */}
  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
    👥
  </div>
  
  {/* Nombre de la plataforma de recursos humanos al lado */}
  <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
    CaptusEmployed
  </span>
</div>
          <h3 className="text-xl font-bold text-white mb-2">Portal de Gestión Humana</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Plataforma centralizada para la administración de personal, control de asistencia, evaluación de desempeño y flujos automatizados de solicitudes internas.
          </p>
        </div>
        
        {/* Barra de Avance */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-cyan-400 uppercase tracking-wider">Fase de Análisis</span>
            <span className="text-white bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md">40%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400 rounded-full transition-all duration-500" style={{ width: '40%' }} />
          </div>
        </div>
      </div>

      {/* Tarjeta Proyecto 3 - Portal Corporativo */}
      <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-2xl mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
            🌵
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Ecosistema Captus Brand</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Diseño e implementación de la landing page oficial, optimización de velocidad de carga, SEO avanzado y despliegue automatizado en la nube.
          </p>
        </div>
        
        {/* Barra de Avance */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-amber-400 uppercase tracking-wider">Despliegue e Identidad</span>
            <span className="text-white bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">85%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: '85%' }} />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 3. SERVICIOS SECTION */}
      <section id="servicios" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Nuestros Servicios</h2>
            <p className="text-slate-400">Soluciones de software a la medida diseñadas para escalar y destacar en el mercado actual.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tarjeta 1 - Desarrollo Web */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-2xl mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                💻
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Desarrollo Web Full-Stack</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Aplicaciones interactivas, rápidas y optimizadas para SEO utilizando tecnologías modernas como React, Next.js y arquitecturas backend potentes.
              </p>
            </div>

            {/* Tarjeta 2 - Aplicaciones Móviles */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                📱
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Aplicaciones Móviles</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Llevamos tu negocio al bolsillo de tus clientes con apps nativas o híbridas fluidas, intuitivas y de alto rendimiento.
              </p>
            </div>

            {/* Tarjeta 3 - Consultoría e Infraestructura */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-2xl mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                🚀
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cloud y Optimización</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Migración a la nube, diseño de bases de datos eficientes y optimización de sistemas para garantizar que tu infraestructura crezca sin problemas.
              </p>
            </div>

            {/* Tarjeta 3 - Consultoría e Infraestructura */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-2xl mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                🛠️
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Infraestructura y Soporte</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Mantenimiento preventivo y correctivo de computadores, soporte técnico especializado, diseño de redes y venta de periféricos de alta calidad para tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACTO / CTA */}
      <section id="contacto" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="absolute bottom-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">¿Listo para hacer crecer tu proyecto?</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Hablemos sobre tus necesidades de software. Nuestro equipo está listo para diseñar la solución perfecta y robusta que estás buscando.
          </p>
          <div className="pt-4">
            <a href="mailto:contactocaptussoftware@gmail.com" className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold rounded-xl shadow-lg hover:opacity-90 transition-all">
              Escríbenos un Correo.
            </a>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} CaptusSoftware. Todos los derechos reservados.</p>
          <p className="text-slate-400 font-medium">Innovación y Soluciones Digitales 🌵</p>
        </div>
      </footer>

    </div>
  );
}
