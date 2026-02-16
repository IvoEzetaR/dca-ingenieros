import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terminos = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-48 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-[#1B316E]">
                        Términos y Condiciones
                    </h1>

                    <div className="space-y-12 text-gray-800 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                1. IDENTIFICACIÓN DEL TITULAR DEL SITIO WEB
                            </h2>
                            <p className="mb-4">
                                Los presentes Términos y Condiciones regulan el acceso y uso del sitio web <span className="font-semibold">www.dcaingenieros.com</span> (en adelante, el “Sitio Web”), de titularidad de <span className="font-semibold text-[#1B316E]">DCA INGENIEROS S.A.C.</span>, identificada con <span className="font-semibold">RUC 20607126292</span>, con domicilio fiscal en la ciudad de Lima, República del Perú, en adelante “DCA INGENIEROS” o “la Empresa”.
                            </p>
                            <p>
                                El acceso y uso del Sitio Web implica la aceptación expresa, plena y sin reservas de los presentes Términos y Condiciones.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                2. SOBRE NOSOTROS
                            </h2>
                            <p className="mb-4">
                                DCA INGENIEROS S.A.C. es una empresa peruana dedicada a la ingeniería, construcción, obras y servicios generales, mantenimiento, instalaciones eléctricas y sanitarias, gerencia y supervisión de proyectos, alquiler de maquinaria y herramientas, así como otros servicios especializados relacionados al sector de la construcción e infraestructura.
                            </p>
                            <p>
                                Nuestra actividad se desarrolla bajo criterios de calidad, seguridad, cumplimiento normativo y responsabilidad profesional.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                3. ACEPTACIÓN Y RESPONSABILIDAD DEL USUARIO
                            </h2>
                            <p className="mb-4">
                                El Usuario se compromete a utilizar el Sitio Web de forma responsable, lícita y conforme a la legislación peruana vigente. Cualquier uso indebido del Sitio Web será de exclusiva responsabilidad del Usuario.
                            </p>
                            <p className="mb-2">El Usuario se abstendrá de:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Realizar actividades contrarias a la ley, la moral o el orden público.</li>
                                <li>Introducir virus, software malicioso o cualquier elemento que afecte el funcionamiento del Sitio Web.</li>
                                <li>Utilizar la información contenida en el Sitio Web con fines fraudulentos o no autorizados.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                4. DISPONIBILIDAD DEL SERVICIO
                            </h2>
                            <p className="mb-4">
                                DCA INGENIEROS no garantiza la disponibilidad continua del Sitio Web ni la ausencia de errores técnicos. Sin embargo, realizará esfuerzos razonables para corregir fallas, restablecer el servicio y actualizar la información cuando sea necesario.
                            </p>
                            <p>El acceso al Sitio Web se limita al tiempo en que el Usuario permanezca conectado.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                5. INFORMACIÓN Y CONTENIDOS
                            </h2>
                            <p className="mb-4">
                                La información contenida en el Sitio Web tiene carácter referencial e informativo, por lo que no constituye una oferta contractual vinculante.
                            </p>
                            <p>
                                Los alcances, precios, plazos y condiciones de los servicios serán definidos únicamente mediante cotizaciones formales, órdenes de servicio o contratos escritos suscritos entre DCA INGENIEROS y el cliente.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                6. CONTRATACIÓN DE SERVICIOS
                            </h2>
                            <p className="mb-2">Las solicitudes de cotización realizadas a través del Sitio Web:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Están sujetas a evaluación técnica y económica.</li>
                                <li>Pueden variar según el alcance, ubicación, condiciones del proyecto y normativa aplicable.</li>
                                <li>Solo adquieren validez una vez formalizadas por escrito.</li>
                            </ul>
                            <p>
                                Cualquier pago realizado sin contrato, orden de servicio o acuerdo previo no genera obligación contractual para DCA INGENIEROS.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                7. RESPONSABILIDAD
                            </h2>
                            <p className="mb-2">DCA INGENIEROS no será responsable por:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Daños derivados del uso indebido del Sitio Web.</li>
                                <li>Fallas técnicas atribuibles a terceros, proveedores de internet o sistemas externos.</li>
                                <li>Enlaces a sitios web de terceros ajenos a la Empresa.</li>
                            </ul>
                            <p>El Usuario asume total responsabilidad por el uso que haga del Sitio Web.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                8. IMÁGENES REFERENCIALES
                            </h2>
                            <p>
                                Las imágenes, fotografías, renders, planos y descripciones mostradas en el Sitio Web son referenciales y pueden variar respecto al resultado final del servicio ejecutado, el cual se rige por lo establecido en los documentos contractuales.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                9. MEDIOS DE PAGO
                            </h2>
                            <p className="mb-4">
                                Los pagos por los servicios de DCA INGENIEROS se realizarán únicamente mediante medios bancarizados autorizados, en las cuentas oficiales de la Empresa y conforme a la legislación vigente.
                            </p>
                            <p className="font-bold text-[#1B316E]">
                                DCA INGENIEROS no solicita pagos en efectivo ni depósitos a cuentas personales.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                10. MODIFICACIONES
                            </h2>
                            <p>
                                La Empresa se reserva el derecho de modificar precios, condiciones comerciales y contenidos del Sitio Web en cualquier momento, sin necesidad de previo aviso.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                11. LEGISLACIÓN APLICABLE
                            </h2>
                            <p className="mb-4">
                                DCA INGENIEROS cuenta con un Libro de Reclamaciones, conforme a la normativa de INDECOPI.
                            </p>
                            <p>
                                El proveedor dará respuesta al reclamo o queja en un plazo máximo de 15 días hábiles improrrogables.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                12. PROPIEDAD INTELECTUAL
                            </h2>
                            <p className="mb-4">
                                Todos los contenidos del Sitio Web son propiedad de DCA INGENIEROS S.A.C. o cuentan con autorización para su uso.
                            </p>
                            <p>
                                Queda prohibida su reproducción, distribución o modificación sin autorización expresa y por escrito.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                13. CANALES OFICIALES
                            </h2>
                            <p className="mb-4">
                                Los únicos canales oficiales de comunicación, contratación y pagos son los publicados en el Sitio Web de DCA INGENIEROS.
                            </p>
                            <p>
                                La Empresa no se responsabiliza por comunicaciones o solicitudes realizadas por terceros no autorizados que utilicen indebidamente el nombre de la Empresa.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                14. MODIFICACIONES DE LOS TÉRMINOS
                            </h2>
                            <p className="mb-4">
                                DCA INGENIEROS se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento.
                            </p>
                            <p>Se recomienda al Usuario revisarlos periódicamente.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-[#1B316E] mb-4">
                                15. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
                            </h2>
                            <p className="mb-4">Estos Términos y Condiciones se rigen por las leyes de la República del Perú.</p>
                            <p>Cualquier controversia será sometida a los jueces y tribunales competentes de Lima.</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Terminos;
