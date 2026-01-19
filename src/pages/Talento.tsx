
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    Users,
    Star,
    GraduationCap,
    ArrowRight,
    CheckCircle2,
    MapPin,
    Clock,
    Search,
    Filter,
    X
} from "lucide-react";
import heroImage from "@/assets/servicios-hero.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { Badge } from "@/components/ui/badge";

const beneficios = [
    {
        icon: Star,
        title: "Desarrollo Profesional",
        description: "Programas de capacitación continua y planes de carrera claros para que crezcas con nosotros."
    },
    {
        icon: Users,
        title: "Ambiente Colaborativo",
        description: "Trabajamos en un entorno de respeto, innovación y apoyo mutuo entre colegas."
    },
    {
        icon: GraduationCap,
        title: "Liderazgo y Mentores",
        description: "Aprende de los mejores profesionales del sector ingeniería y construcción."
    }
];

const jobs = [
    {
        id: "1",
        title: "Administrador(a) de Obra",
        location: "Lima y Provincias",
        type: "Full-time",
        department: "Administración",
        postedDate: "19 Ene 2026",
        description: "En DCA INGENIEROS SAC, cada día representa una oportunidad para crecer, aprender y asumir nuevos retos. Buscamos un profesional con experiencia liderando actividades administrativas y contables en obra, con capacidad de planificación, organización y negociación con proveedores.",
        responsibilities: [
            "Planificar, organizar y liderar las actividades del área administrativa del proyecto.",
            "Gestionar y administrar las garantías financieras (cartas fianza y seguros) de subcontratos.",
            "Aprobar valorizaciones y programar pagos a proveedores.",
            "Elaborar y administrar contratos de proveedores de bienes y servicios.",
            "Controlar y dar seguimiento a las facturas por pagar.",
            "Supervisar los almacenes del proyecto."
        ],
        requirements: [
            "Bachiller o titulado en Administración, Contabilidad o carreras afines.",
            "Experiencia laboral mínima de 8 años en el área administrativa, contable y/o financiera.",
            "Al menos 5 años en cargos de liderazgo administrativo o contable (pref. construcción).",
            "Conocimientos indispensables en Excel avanzado y SAP (FI, MM)."
        ],
        benefits: [
            "Remuneración competitiva acorde al mercado.",
            "Ingreso a planilla con todos los beneficios de ley.",
            "Oportunidades de desarrollo y crecimiento profesional.",
            "Capacitación constante según el rol."
        ]
    },
    {
        id: "2",
        title: "Auxiliar Logístico",
        location: "Lima y Provincias",
        type: "Full-time",
        department: "Logística",
        postedDate: "19 Ene 2026",
        description: "Buscamos un profesional organizado, proactivo y con experiencia en gestión logística, compras y control de almacenes, orientado al cumplimiento de plazos y estándares de seguridad.",
        responsibilities: [
            "Evaluar alternativas de compra y proveedores para los procesos logísticos.",
            "Buscar, identificar y desarrollar proveedores competitivos de bienes y servicios.",
            "Solicitar cotizaciones y elaborar cuadros comparativos.",
            "Ejecutar compras de materiales, herramientas, equipos y servicios.",
            "Garantizar la entrega oportuna de materiales a cada proyecto.",
            "Gestionar el orden, limpieza e inventarios del almacén.",
            "Supervisar el adecuado manejo y almacenamiento de materiales peligrosos."
        ],
        requirements: [
            "Estudios técnicos o universitarios en Administración, Logística, Ing. Industrial o afines.",
            "Experiencia mínima de 2 a 3 años en funciones logísticas, compras o almacén.",
            "Conocimientos en gestión de compras, negociación y control de inventarios.",
            "Manejo de Excel intermedio o avanzado (deseable)."
        ],
        benefits: [
            "Remuneración acorde al mercado.",
            "Ingreso a planilla con todos los beneficios de ley.",
            "Oportunidades de crecimiento y desarrollo profesional.",
            "Capacitación constante según el rol."
        ]
    },
    {
        id: "3",
        title: "Ingeniero(a) de Costos y Presupuestos",
        location: "Lima y Provincias",
        type: "Full-time",
        department: "Área Técnica",
        postedDate: "19 Ene 2026",
        description: "Responsable de la correcta elaboración, control y seguimiento de los presupuestos de nuestros proyectos, garantizando una adecuada gestión de costos y rentabilidad.",
        responsibilities: [
            "Elaborar presupuestos de partidas eléctricas, sanitarias, HVAC y demás especialidades.",
            "Desarrollar el presupuesto base y el presupuesto meta de los proyectos.",
            "Elaborar el plan de costos del proyecto y proyectar precios.",
            "Realizar metrados y cubicaciones de las diferentes especialidades.",
            "Desarrollar el Análisis de Precios Unitarios (APU).",
            "Realizar el seguimiento y control del cumplimiento de los presupuestos asignados.",
            "Identificar riesgos ambientales y proponer medidas correctivas."
        ],
        requirements: [
            "Bachiller o Titulado en Ingeniería Civil, Eléctrica, Sanitaria o afines.",
            "Experiencia mínima de 02 años en costos, presupuestos o funciones similares.",
            "Dominio de herramientas de estimación de costos (S10 u otro software similar).",
            "Manejo de AutoCAD Civil 3D – nivel intermedio.",
            "Conocimientos en Revit and/or SketchUp y MS Project."
        ],
        benefits: [
            "Remuneración acorde al mercado.",
            "Ingreso a planilla con todos los beneficios de ley.",
            "Oportunidades de desarrollo profesional y línea de carrera.",
            "Capacitación constante según el rol."
        ]
    },
    {
        id: "4",
        title: "Asistente de Costos y Presupuestos",
        location: "Lima y Provincias",
        type: "Full-time",
        department: "Área Técnica",
        postedDate: "19 Ene 2026",
        description: "Brinda soporte al Área Técnica en la elaboración, análisis y control de presupuestos, contribuyendo a la correcta estimación de costos de nuestros proyectos.",
        responsibilities: [
            "Analizar los requerimientos del cliente para identificar el alcance de los proyectos.",
            "Realizar visitas de campo para el levantamiento de información.",
            "Elaborar el itemizado y la estructura del presupuesto por partidas.",
            "Realizar metrados de las distintas especialidades.",
            "Mantener actualizada la base de datos de presupuestos.",
            "Realizar seguimiento a las cotizaciones enviadas."
        ],
        requirements: [
            "Egresado(a) universitario(a) de Ingeniería Civil, Industrial, Arquitectura o afines.",
            "Experiencia mínima de 01 año en funciones relacionadas a costos, presupuestos o metrados.",
            "Manejo de MS Project y AutoCAD Civil – nivel intermedio.",
            "Dominio de Microsoft Excel (tablas dinámicas, filtros).",
            "Conocimiento en estructura de costos."
        ],
        benefits: [
            "Remuneración acorde al mercado.",
            "Ingreso a planilla con todos los beneficios de ley.",
            "Oportunidades de aprendizaje y desarrollo profesional.",
            "Capacitación constante según el rol."
        ]
    },
    {
        id: "5",
        title: "Ingeniero(a) SSOMA",
        location: "Lima y Provincias",
        type: "Full-time",
        department: "Seguridad",
        postedDate: "19 Ene 2026",
        description: "Garantiza el cumplimiento de los estándares de Seguridad, Salud Ocupacional y Medio Ambiente en nuestras operaciones a nivel nacional.",
        responsibilities: [
            "Verificar que todo el personal haya recibido la Inducción de Hombre Nuevo.",
            "Asegurar la correcta entrega, uso y control de los EPP.",
            "Identificar, evaluar riesgos y proponer medidas correctivas y preventivas.",
            "Supervisar el correcto llenado de los ATS previo al inicio de actividades.",
            "Realizar y liderar charlas diarias de seguridad.",
            "Elaborar el Plan SSOMA e IPERC específicos por proyecto.",
            "Brindar capacitaciones en SST al personal."
        ],
        requirements: [
            "Titulado(a) en Ingeniería Industrial, Ambiental, Civil o afines con especialización en SST.",
            "Experiencia mínima de 01 año en funciones SSOMA o Prevencionista.",
            "Capacitación en trabajos de alto riesgo (altura, caliente, eléctrico, confinados).",
            "Certificación en Primeros Auxilios y Control de Incendios.",
            "Conocimientos en investigación de accidentes."
        ],
        benefits: [
            "Remuneración acorde al mercado.",
            "Ingreso a planilla con todos los beneficios de ley.",
            "Desarrollo profesional y capacitación continua en SSOMA.",
            "Participación en proyectos a nivel nacional."
        ]
    },
    {
        id: "6",
        title: "Ingeniero(a) de Producción",
        location: "Lima y Provincias",
        type: "Full-time",
        department: "Producción",
        postedDate: "19 Ene 2026",
        description: "Liderar y supervisar las actividades productivas en obra, asegurando el correcto desarrollo de los proyectos asignados.",
        responsibilities: [
            "Supervisar las labores diarias para asegurar el cumplimiento de plazos y calidad.",
            "Verificar en campo la producción, rendimiento de equipos, personal y materiales.",
            "Ejecutar y supervisar acciones correctivas identificadas.",
            "Elaborar valorizaciones y liquidaciones de obra.",
            "Realizar supervisión permanente en campo de las actividades operativas.",
            "Monitorear el cumplimiento de normativas ambientales y de seguridad."
        ],
        requirements: [
            "Bachiller o Titulado(a) en Ingeniería Civil.",
            "Experiencia mínima de 02 años en funciones similares como Ing. de Producción.",
            "Manejo de AutoCAD Civil – nivel intermedio.",
            "Conocimientos en S10, MS Project y metodología BIM (deseable).",
            "No contar con antecedentes policiales ni penales."
        ],
        benefits: [
            "Remuneración acorde al mercado.",
            "Ingreso a planilla con todos los beneficios de ley.",
            "Oportunidades de desarrollo profesional y crecimiento.",
            "Participación en proyectos a nivel nacional."
        ]
    },
    {
        id: "7",
        title: "Ingeniero(a) Residente de Obra",
        location: "Lima y Provincias",
        type: "Full-time",
        department: "Operaciones",
        postedDate: "19 Ene 2026",
        description: "Responsable de la ejecución integral de los proyectos en campo, garantizando el cumplimiento de plazos, costos, calidad y normativas vigentes.",
        responsibilities: [
            "Supervisar la ejecución de la obra asegurando cumplimiento de planos y EETT.",
            "Controlar que la obra se ejecute dentro del plazo y presupuesto establecidos.",
            "Coordinar y gestionar las actividades del personal y subcontratistas.",
            "Administrar los recursos materiales y humanos eficientemente.",
            "Velar por el cumplimiento de normativas SST y medio ambiente.",
            "Identificar y resolver problemas técnicos, operativos o logísticos."
        ],
        requirements: [
            "Titulado(a) en Ingeniería Civil, Arquitectura o afines.",
            "Experiencia mínima de 03 años como Ingeniero Residente en obras de construcción.",
            "Conocimientos en gestión de proyectos, presupuestos y control de costos.",
            "Manejo de software de gestión de obras y planificación.",
            "Normativa de seguridad y medio ambiente."
        ],
        benefits: [
            "Remuneración acorde al mercado.",
            "Ingreso a planilla con todos los beneficios de ley.",
            "Oportunidades de desarrollo profesional y crecimiento.",
            "Participación en proyectos a nivel nacional."
        ]
    },
    {
        id: "8",
        title: "Operarios (Múltiples Especialidades)",
        location: "Lima y Provincias",
        type: "Por Proyecto",
        department: "Operaciones",
        postedDate: "19 Ene 2026",
        description: "Buscamos Operarios especializados (Electricista, Pintor, Soldador, Albañil, Mantenimiento, Drywall, Aire Acondicionado, Sanitario) para integrarse a proyectos a nivel nacional.",
        responsibilities: [
            "Interpretar planos, diagramas y especificaciones técnicas según especialidad.",
            "Ejecutar los trabajos de manera ordenada, limpia y eficiente.",
            "Instalar equipos, aparatos, accesorios y sistemas según el alcance.",
            "Realizar tareas de mantenimiento y reparaciones requeridas.",
            "Cumplir estrictamente con las normas SSOMA y uso de EPP."
        ],
        requirements: [
            "Secundaria completa (deseable).",
            "Experiencia mínima de 06 meses en la especialidad (indispensable).",
            "Cursos o experiencia comprobada en la especialidad correspondiente.",
            "Certificación de homologación para soldadores (deseable).",
            "No contar con antecedentes policiales ni penales."
        ],
        benefits: [
            "Remuneración acorde al mercado.",
            "Ingreso a planilla con beneficios de ley (según régimen).",
            "Estabilidad laboral por proyecto.",
            "Capacitación en seguridad y procedimientos."
        ]
    },
    {
        id: "9",
        title: "Ayudante de Obra",
        location: "Lima y Provincias",
        type: "Por Proyecto",
        department: "Operaciones",
        postedDate: "19 Ene 2026",
        description: "Soporte operativo en nuestros proyectos, apoyando a ingenieros, técnicos y operarios especializados.",
        responsibilities: [
            "Apoyar en el registro de información para programas de trabajo.",
            "Conservar en buen estado las herramientas y equipos.",
            "Proteger muebles, materiales y áreas antes y durante los trabajos.",
            "Apoyar en trabajos de pintura, mezclas y asistencia a especialistas.",
            "Cumplir con las normas de SSOMA y participar en charlas de seguridad."
        ],
        requirements: [
            "Secundaria completa.",
            "Experiencia mínima de 03 meses en labores similares (deseable).",
            "Capacidad para trabajo físico y en equipo.",
            "No contar con antecedentes policiales ni penales."
        ],
        benefits: [
            "Remuneración acorde al mercado.",
            "Ingreso a planilla con beneficios de ley (según régimen).",
            "Oportunidad de aprendizaje y crecimiento en obra.",
            "Capacitación constante en seguridad y trabajos operativos."
        ]
    }
];

const Talento = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleApply = (job: typeof jobs[0]) => {
        setSelectedJob(job);
        setIsDialogOpen(true);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[750px] flex items-center justify-center pt-96 pb-80 md:pt-80 md:pb-64 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Talento DCA"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/60" />
                </div>

                <div className="section-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full mb-8 border border-primary/30">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-sm font-semibold text-primary-foreground tracking-wide uppercase">
                                Únete a nuestro equipo de élite
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8 tracking-tight">
                            Construye tu futuro con <span className="text-accent-light italic">Grupo DCA</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed font-light">
                            No solo construimos estructuras, construimos carreras. Buscamos el talento que transformará la ingeniería en el Perú.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="section-padding bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
                <div className="section-container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">¿Por qué DCA?</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full" />
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            En Grupo DCA, el talento humano es nuestra base más sólida. Ofrecemos un ecosistema de innovación donde cada proyecto es un reto y cada colaborador un protagonista.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {beneficios.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-10 rounded-[2rem] bg-card border border-border/40 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                <div className="w-20 h-20 bg-primary/5 text-primary rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Board Section */}
            <section className="section-padding bg-secondary/20" id="vacantes">
                <div className="section-container">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">Oportunidades de Carrera</h2>
                            <p className="text-muted-foreground text-lg">
                                Encuentra tu próximo desafío profesional. Si no ves una vacante que se ajuste a ti, puedes postular de forma general.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <div className="relative group flex-1 sm:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <Input
                                    className="pl-12 h-14 bg-white border-border/50 rounded-2xl focus-visible:ring-primary shadow-sm"
                                    placeholder="Buscar por puesto o palabra clave..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Button variant="outline" className="h-14 px-6 rounded-2xl gap-2 border-border/50 bg-white">
                                <Filter className="w-5 h-5" />
                                Filtrar
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-white p-6 md:p-8 rounded-[2rem] border border-border/40 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                                >
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                                {job.department}
                                            </Badge>
                                            <Badge variant="outline" className="border-border/50 text-muted-foreground text-xs font-medium px-3 py-1 rounded-full">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {job.postedDate}
                                            </Badge>
                                        </div>
                                        <h3 className="text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-muted-foreground font-medium">
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-accent" />
                                                {job.location}
                                            </span>
                                            <span className="w-1.5 h-1.5 bg-border rounded-full" />
                                            <span className="flex items-center gap-1.5">
                                                <Briefcase className="w-4 h-4 text-accent" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    <Button
                                        size="lg"
                                        onClick={() => handleApply(job)}
                                        className="w-full md:w-auto bg-[#1B316E] hover:bg-accent text-white group-hover:scale-105 transition-all duration-300 rounded-2xl px-8 h-14 font-bold"
                                    >
                                        Postular Ahora
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </motion.div>
                            ))
                        ) : (
                            <div className="bg-white/50 backdrop-blur-sm rounded-[2rem] p-12 text-center border border-dashed border-border/60">
                                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-2">No encontramos vacantes</h3>
                                <p className="text-muted-foreground mb-8">No hay resultados para "{searchTerm}". Prueba con otros términos o envía tu postulación general.</p>
                                <Button
                                    variant="outline"
                                    onClick={() => setSearchTerm("")}
                                    className="rounded-xl"
                                >
                                    Ver todos los puestos
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* General Application Section */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="bg-[#1B316E] rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 group-hover:translate-x-1/3 transition-transform duration-1000" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                            <div className="max-w-2xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                                    <Star className="text-accent w-4 h-4" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-white/90">Postulación General</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">¿No ves una posición abierta?</h2>
                                <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                                    En DCA siempre hay espacio para el talento genuino. Envíanos tu información y sé parte de nuestra base de datos para futuros proyectos estratégicos.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                                        <CheckCircle2 className="text-accent-light w-6 h-6 shrink-0" />
                                        <span className="text-lg font-medium">Selección Meritocrática</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                                        <CheckCircle2 className="text-accent-light w-6 h-6 shrink-0" />
                                        <span className="text-lg font-medium">Ambiente Inclusivo</span>
                                    </div>
                                </div>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    onClick={() => handleApply({
                                        id: "general",
                                        title: "Candidatura Espontánea / General",
                                        department: "General",
                                        location: "Remoto / Todas las sedes",
                                        type: "Variable",
                                        postedDate: "-",
                                        description: "Postulación para futuros procesos.",
                                        requirements: []
                                    })}
                                    className="font-bold text-xl px-12 py-8 rounded-2xl bg-white text-primary hover:bg-accent hover:text-white transition-all transform hover:scale-105"
                                >
                                    Enviar Postulación General
                                    <ArrowRight className="ml-3 h-6 w-6" />
                                </Button>
                            </div>
                            <div className="hidden lg:block relative">
                                <div className="absolute inset-0 bg-accent rounded-full blur-[100px] opacity-20 animate-pulse" />
                                <Briefcase className="w-80 h-80 text-white opacity-20 -rotate-12 transform hover:rotate-0 transition-transform duration-700 relative z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto rounded-[2rem] border-none shadow-2xl p-0">
                    <div className="bg-[#1B316E] p-8 text-white relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsDialogOpen(false)}
                            className="absolute right-6 top-6 text-white/50 hover:text-white hover:bg-white/10 rounded-xl"
                        >
                            <X className="w-6 h-6" />
                        </Button>
                        <Badge variant="secondary" className="bg-accent text-white border-none mb-4 uppercase tracking-tighter">
                            Formulario de Postulación
                        </Badge>
                        <DialogTitle className="text-3xl font-bold mb-2 text-white">
                            {selectedJob?.title}
                        </DialogTitle>
                        <DialogDescription className="text-white/70 text-base">
                            Completa tus datos profesionales para iniciar el proceso de selección con nosotros.
                        </DialogDescription>
                    </div>
                    <div className="p-8 pb-12">
                        {selectedJob && (
                            <div className="space-y-8 mb-10">
                                <div>
                                    <h4 className="text-xl font-bold text-secondary-900 mb-3 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-primary" />
                                        Descripción del Puesto
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {selectedJob.description}
                                    </p>
                                </div>

                                {selectedJob.responsibilities && (
                                    <div>
                                        <h4 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            Responsabilidades
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {selectedJob.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5 text-primary" />
                                        Requisitos
                                    </h4>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {selectedJob.requirements.map((req, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {selectedJob.benefits && (
                                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                                        <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                            <Star className="w-5 h-5" />
                                            ¿Qué ofrecemos?
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selectedJob.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-2 text-secondary-800 font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="border-t border-border pt-10">
                                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">Postulación Directa</h3>
                                    <p className="text-muted-foreground mb-6">Envía tus datos y CV para ser evaluado por nuestro equipo.</p>
                                    <JobApplicationForm
                                        jobTitle={selectedJob.title}
                                        onSuccess={() => setIsDialogOpen(false)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
};

export default Talento;
