// Title, description y canonical por ruta.
// Si agregas una ruta pública en App.tsx, agrégala aquí y en public/sitemap.xml.

export const SITE_URL = "https://www.dcaingenieros.com";

export type RouteSeo = {
  title: string;
  description: string;
};

export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": {
    title: "DCA Ingenieros | Constructora en Los Olivos, Lima",
    description:
      "Constructora en Los Olivos, Lima: obras civiles, remodelaciones, mantenimiento, levantamiento ITSE y gerencia de proyectos para empresas. Certificados ISO 9001, 14001 y 45001.",
  },
  "/proyectos": {
    title: "Proyectos de construcción y mantenimiento | DCA Ingenieros",
    description:
      "Obras ejecutadas por DCA Ingenieros: construcción, remodelaciones, servicios generales y levantamiento de observaciones ITSE para empresas en Lima, Piura y otras ciudades del Perú.",
  },
  "/proyectos/levantamiento-itse": {
    title: "Levantamiento de observaciones ITSE: proyectos | DCA Ingenieros",
    description:
      "Proyectos de levantamiento de observaciones ITSE ejecutados por DCA Ingenieros en agencias, sedes y oficinas de Lima, Callao, Piura y Huánuco.",
  },
  "/proyectos/remodelaciones": {
    title: "Remodelaciones: proyectos | DCA Ingenieros",
    description:
      "Remodelaciones y acondicionamiento de oficinas, agencias bancarias y áreas de personal ejecutadas por DCA Ingenieros. Mira las obras terminadas.",
  },
  "/proyectos/construccion": {
    title: "Construcción: proyectos | DCA Ingenieros",
    description:
      "Acondicionamiento de bases, implementación de centros de control y reforzamiento estructural ejecutados por DCA Ingenieros. Mira las obras terminadas.",
  },
  "/proyectos/servicios-generales": {
    title: "Mantenimiento y servicios generales: proyectos | DCA Ingenieros",
    description:
      "Planes de mantenimiento, fachadas, coberturas, impermeabilización y estructuras metálicas ejecutados por DCA Ingenieros para empresas en Lima.",
  },
  "/servicios/ingenieria-construccion": {
    title: "Ingeniería y construcción en Lima | DCA Ingenieros",
    description:
      "Obras civiles, remodelaciones y gestión de obra bajo estándares PMI e ISO, desde el primer trazo hasta la entrega. Pide tu presupuesto a DCA Ingenieros.",
  },
  "/servicios/obras-servicios-generales": {
    title: "Mantenimiento y servicios generales en Lima | DCA Ingenieros",
    description:
      "Mantenimiento integral de instalaciones, drywall y acabados para empresas en Lima. Servicio rápido y profesional de DCA Ingenieros.",
  },
  "/servicios/ferreteria-integral": {
    title: "Ferretería integral en Lima | DCA Ingenieros",
    description:
      "Materiales y herramientas para tu obra en un solo lugar. Pide la lista de precios y el stock actualizado a DCA Ingenieros.",
  },
  "/servicios/alquiler-maquinarias": {
    title: "Alquiler de maquinarias y herramientas en Lima | DCA Ingenieros",
    description:
      "Alquiler de maquinarias y herramientas para obra en Lima. Consulta la disponibilidad de los equipos que necesitas con DCA Ingenieros.",
  },
  "/servicios/importacion": {
    title: "Importación de materiales y equipos en Lima | DCA Ingenieros",
    description:
      "Gestión de importaciones de materiales y equipos, desde la búsqueda del proveedor hasta la entrega en tu almacén. Asesoría de DCA Ingenieros.",
  },
  "/servicios/gestion-proyectos": {
    title: "Gerencia de proyectos en Lima | DCA Ingenieros",
    description:
      "Gerencia y dirección de proyectos para cumplir alcance, plazo, costo, calidad y seguridad, con buenas prácticas del PMI. Cotiza con DCA Ingenieros.",
  },
  "/noticias": {
    title: "Noticias | DCA Ingenieros",
    description:
      "Novedades, proyectos y certificaciones de DCA Ingenieros, constructora en Los Olivos, Lima.",
  },
  "/talento": {
    title: "Trabaja con nosotros | DCA Ingenieros",
    description:
      "Postula a DCA Ingenieros: revisa las vacantes abiertas en áreas técnicas y administrativas y envía tu CV desde esta página.",
  },
  "/libro-de-reclamaciones": {
    title: "Libro de Reclamaciones | DCA Ingenieros",
    description:
      "Libro de Reclamaciones virtual de DCA INGENIEROS S.A.C. (RUC 20607126292), conforme al Código de Protección y Defensa del Consumidor.",
  },
  "/terminos": {
    title: "Términos y Condiciones | DCA Ingenieros",
    description: "Términos y condiciones de uso del sitio web de DCA INGENIEROS S.A.C.",
  },
  "/politica": {
    title: "Política de Privacidad | DCA Ingenieros",
    description:
      "Cómo DCA INGENIEROS S.A.C. trata y protege los datos personales que recibe por este sitio web.",
  },
};

export const NOT_FOUND_SEO: RouteSeo = {
  title: "Página no encontrada | DCA Ingenieros",
  description: "La página que buscas no existe o cambió de dirección.",
};

/** Quita la barra final (salvo en "/") para comparar y armar el canonical. */
export const normalizePath = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
