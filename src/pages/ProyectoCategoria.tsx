import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg"; // Reusing hero image

// ITSE Prosegur Alarma Images
import alarma1 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma1.jpg";
import alarma2 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma2.jpg";
import alarma3 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma3.jpg";
import alarma4 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma4.jpg";
import alarma5 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma5.jpg";
import alarma6 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma6.jpeg";
import alarma7 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma7.jpeg";

// ITSE Prosegur Cash Piura Images
import cash1 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura1.jpg";
import cash2 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura2.jpg";
import cash3 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura3.jpeg";
import cash4 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura4.jpg";
import cash5 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura5.jpeg";
import cash6 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura6.jpeg";
import cash7 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura7.jpeg";
import cash8 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura8.jpeg";
import cash9 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura9.jpeg";
import cash10 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura10.jpeg";
import cash11 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura11.jpeg";
import cash12 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura12.jpeg";

// ITSE Prosegur Cajero Miraflores Images
import miraflores1 from "@/assets/imagenes-proyectos/ITSE/05. ITSE - PROSEGUR CAJERO MIRAFLORES1.jpg";
import miraflores2 from "@/assets/imagenes-proyectos/ITSE/05. ITSE - PROSEGUR CAJERO MIRAFLORES2.jpeg";
import miraflores3 from "@/assets/imagenes-proyectos/ITSE/05. ITSE - PROSEGUR CAJERO MIRAFLORES3.jpg";
import miraflores4 from "@/assets/imagenes-proyectos/ITSE/05. ITSE - PROSEGUR CAJERO MIRAFLORES4.jpeg";
import miraflores5 from "@/assets/imagenes-proyectos/ITSE/05. ITSE - PROSEGUR CAJERO MIRAFLORES5.jpeg";
import miraflores6 from "@/assets/imagenes-proyectos/ITSE/05. ITSE - PROSEGUR CAJERO MIRAFLORES6.jpeg";

// ITSE Proseguridad Callao Images
import callao1 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD CALLAO1.jpeg";
import callao2 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD CALLAO2.jpg";
import callao3 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD CALLAO3.jpg";
import callao4 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD CALLAO4.jpg";
import callao5 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD CALLAO5.jpg";
import callao6 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD CALLAO6.jpeg";


// ITSE Prosegur Cash Morro Solar Images
import morro1 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGUR CASH MORRO SOLAR1.jpeg";
import morro2 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGUR CASH MORRO SOLAR2.jpg";
import morro3 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGUR CASH MORRO SOLAR3.jpeg";
import morro4 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGUR CASH MORRO SOLAR4.jpeg";
import morro5 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGUR CASH MORRO SOLAR5.jpeg";
import morro6 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGUR CASH MORRO SOLAR6.jpeg";
import morro7 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGUR CASH MORRO SOLAR7.jpeg";

// ITSE Proseguridad Huanuco Images
import huanuco1 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD HUANUCO1.jpg";
import huanuco2 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD HUANUCO2.jpg";
import huanuco3 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD HUANUCO3.jpg";
import huanuco4 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD HUANUCO4.jpg";
import huanuco5 from "@/assets/imagenes-proyectos/ITSE/ITSE - PROSEGURIDAD HUANUCO5.jpg";

// Servicios Generales - Banco de la Nación Images


import bnGraco1 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION GRIFO GRACO - ATE1.jpg";
import bnGraco2 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION GRIFO GRACO - ATE2.jpeg";
import bnGraco3 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION GRIFO GRACO - ATE3.jpeg";
import bnGraco4 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION GRIFO GRACO - ATE4.jpg";
import bnGraco5 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION GRIFO GRACO - ATE5.jpg";
import bnGraco6 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION GRIFO GRACO - ATE6.jpeg";


import bnMegaplaza1 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION MEGAPLAZA  - INDEPENDENCIA1.jpg";
import bnMegaplaza2 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION MEGAPLAZA  - INDEPENDENCIA2.jpg";
import bnMegaplaza3 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION MEGAPLAZA  - INDEPENDENCIA3.jpg";
import bnMegaplaza4 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION MEGAPLAZA  - INDEPENDENCIA4.jpg";
import bnMegaplaza5 from "@/assets/imagenes-proyectos/ITSE/PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION MEGAPLAZA  - INDEPENDENCIA5.jpg";

import bnDorado1 from "@/assets/imagenes-proyectos/ITSE/Banco de la nacion el dorado1.jpg";
import bnDorado2 from "@/assets/imagenes-proyectos/ITSE/Banco de la nacion el dorado2.jpg";
import bnDorado3 from "@/assets/imagenes-proyectos/ITSE/Banco de la nacion el dorado3.jpg";
import bnDorado4 from "@/assets/imagenes-proyectos/ITSE/Banco de la nacion el dorado4.jpg";
import bnDorado5 from "@/assets/imagenes-proyectos/ITSE/Banco de la nacion el dorado5.jpg";

import bnSanBorja1 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA1.jpeg";
import bnSanBorja2 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA2.jpeg";
import bnSanBorja3 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA3.jpg";
import bnSanBorja4 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA4.jpg";
import bnSanBorja5 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA5.jpg";
import bnSanBorja6 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA6.jpeg";
import bnSanBorja7 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA7.jpeg";
import bnSanBorja8 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA8.jpeg";
import bnSanBorja9 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA9.jpeg";
import bnSanBorja10 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA10.jpeg";
import bnSanBorja11 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA11.jpeg";
import bnSanBorja12 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA12.jpeg";
import bnSanBorja13 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA13.jpeg";
import bnSanBorja14 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA14.jpeg";
import bnSanBorja15 from "@/assets/imagenes-proyectos/ITSE/IMPLEMENTACION BANCO DE LA NACION - SAN BORJA15.jpeg";

// Remodelaciones - Prosegur Alarma & Teleperformance
import salaDescanso1 from "@/assets/imagenes-proyectos/ITSE/adecuacion de la sala de descanso Prosegur alarma1.jpg";
import salaDescanso2 from "@/assets/imagenes-proyectos/ITSE/adecuacion de la sala de descanso Prosegur alarma2.jpg";
import salaDescanso3 from "@/assets/imagenes-proyectos/ITSE/adecuacion de la sala de descanso Prosegur alarma3.jpg";
import salaDescanso4 from "@/assets/imagenes-proyectos/ITSE/adecuacion de la sala de descanso Prosegur alarma4.jpg";
import salaDescanso5 from "@/assets/imagenes-proyectos/ITSE/adecuacion de la sala de descanso Prosegur alarma5.jpg";

// Servicios Generales - Adecuaciones Portones Prosegur Morro del Solar Images
import porton1 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR1.jpeg";
import porton2 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR2.jpeg";
import porton3 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR3.jpeg";
import porton5 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR5.jpeg";
import porton6 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR6.jpeg";
import porton7 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR7.jpeg";
import porton8 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR8.jpeg";
import porton9 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR9.jpeg";
import porton10 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR10.jpeg";
import porton11 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR11.jpeg";
import porton12 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR12.jpeg";
import porton13 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR13.jpeg";
import porton14 from "@/assets/imagenes-proyectos/ITSE/PROYECTO ADECUACIONES DE PORTONES DE ESCLUSA VEHICULAR INTERIOR Y EXTERIOR PROSEGUR MORRO DEL SOLAR14.jpeg";

// Servicios Generales - Mantenimiento de Coberturas Prosegur Morro del Solar
import techo1 from "@/assets/imagenes-proyectos/ITSE/MANTAMIENTO DE COBERTURAS E IMPERMEABILICION DE TECHOS PROSEGUR MORRO DEL SOLAR1.jpeg";
import techo2 from "@/assets/imagenes-proyectos/ITSE/MANTAMIENTO DE COBERTURAS E IMPERMEABILICION DE TECHOS PROSEGUR MORRO DEL SOLAR2.jpeg";
import techo3 from "@/assets/imagenes-proyectos/ITSE/MANTAMIENTO DE COBERTURAS E IMPERMEABILICION DE TECHOS PROSEGUR MORRO DEL SOLAR3.jpeg";
import techo5 from "@/assets/imagenes-proyectos/ITSE/MANTAMIENTO DE COBERTURAS E IMPERMEABILICION DE TECHOS PROSEGUR MORRO DEL SOLAR5.jpeg";
import techo6 from "@/assets/imagenes-proyectos/ITSE/MANTAMIENTO DE COBERTURAS E IMPERMEABILICION DE TECHOS PROSEGUR MORRO DEL SOLAR6.jpeg";
import techo7 from "@/assets/imagenes-proyectos/ITSE/MANTAMIENTO DE COBERTURAS E IMPERMEABILICION DE TECHOS PROSEGUR MORRO DEL SOLAR7.jpeg";

// Servicios Generales - Grupo ATV Structures Images
import atv1 from "@/assets/imagenes-proyectos/ITSE/MANTENIMIENTO Y FAFRICACION DE ESCTRUCTURAS METALICAS – GRUPO ATV1.jpeg";
import atv2 from "@/assets/imagenes-proyectos/ITSE/MANTENIMIENTO Y FAFRICACION DE ESCTRUCTURAS METALICAS – GRUPO ATV2.jpeg";
import atv3 from "@/assets/imagenes-proyectos/ITSE/MANTENIMIENTO Y FAFRICACION DE ESCTRUCTURAS METALICAS – GRUPO ATV3.jpeg";
import atv4 from "@/assets/imagenes-proyectos/ITSE/MANTENIMIENTO Y FAFRICACION DE ESCTRUCTURAS METALICAS – GRUPO ATV4.jpeg";
import atv5 from "@/assets/imagenes-proyectos/ITSE/MANTENIMIENTO Y FAFRICACION DE ESCTRUCTURAS METALICAS – GRUPO ATV5.jpeg";
import atv6 from "@/assets/imagenes-proyectos/ITSE/MANTENIMIENTO Y FAFRICACION DE ESCTRUCTURAS METALICAS – GRUPO ATV6.jpeg";

// Servicios Generales - Inrubi Aislamiento Acústico Images
import inrubi1 from "@/assets/imagenes-proyectos/ITSE/Cliente Inrubi1.jpeg";
import inrubi2 from "@/assets/imagenes-proyectos/ITSE/Cliente Inrubi2.jpeg";
import inrubi3 from "@/assets/imagenes-proyectos/ITSE/Cliente Inrubi3.jpeg";
import inrubi4 from "@/assets/imagenes-proyectos/ITSE/Cliente Inrubi4.jpeg";
import inrubi5 from "@/assets/imagenes-proyectos/ITSE/Cliente Inrubi5.jpeg";
import inrubi6 from "@/assets/imagenes-proyectos/ITSE/Cliente Inrubi6.jpeg";

// Servicios Generales - Aduni Vallejo Facade Maintenance Images
import aduni1 from "@/assets/imagenes-proyectos/ITSE/Mantenimiento de fachada - Tapa juntas de acero inoxidable1.jpeg";
import aduni2 from "@/assets/imagenes-proyectos/ITSE/Mantenimiento de fachada - Tapa juntas de acero inoxidable2.jpeg";
import aduni3 from "@/assets/imagenes-proyectos/ITSE/Mantenimiento de fachada - Tapa juntas de acero inoxidable3.jpeg";
import aduni4 from "@/assets/imagenes-proyectos/ITSE/Mantenimiento de fachada - Tapa juntas de acero inoxidable4.jpeg";
import aduni5 from "@/assets/imagenes-proyectos/ITSE/Mantenimiento de fachada - Tapa juntas de acero inoxidable5.jpeg";
import aduni6 from "@/assets/imagenes-proyectos/ITSE/Mantenimiento de fachada - Tapa juntas de acero inoxidable6.jpeg";

import teleperformance1 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE1.jpg";
import teleperformance2 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE2.jpg";
import teleperformance3 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE3.jpg";
import teleperformance4 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE4.jpg";
import teleperformance5 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE5.jpeg";
import teleperformance6 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE6.jpeg";
import teleperformance7 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE7.jpeg";
import teleperformance8 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE8.jpeg";
import teleperformance9 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE9.jpeg";
import teleperformance10 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE10.jpeg";
import teleperformance11 from "@/assets/imagenes-proyectos/ITSE/TELEPERFORMANCE11.jpeg";

// Remodelación Oficina Panamá Images
import panamaOficina1 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA1.jpg";
import panamaOficina2 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA2.jpg";
import panamaOficina3 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA3.jpg";
import panamaOficina4 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA4.jpg";
import panamaOficina5 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA5.jpg";
import panamaOficina6 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA6.jpg";
import panamaOficina7 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA7.jpeg";
import panamaOficina8 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA8.jpeg";
import panamaOficina9 from "@/assets/imagenes-proyectos/ITSE/REMODELACION OFICINA PANAMA9.jpeg";

// Remodelación Banco de la Nación Sepahua Images
import bnSepahua1 from "@/assets/imagenes-proyectos/ITSE/Banco de la nación Sepahua1.jpeg";
import bnSepahua2 from "@/assets/imagenes-proyectos/ITSE/Banco de la nación Sepahua2.jpeg";
import bnSepahua3 from "@/assets/imagenes-proyectos/ITSE/Banco de la nación Sepahua3.jpeg";
import bnSepahua4 from "@/assets/imagenes-proyectos/ITSE/Banco de la nación Sepahua4.jpeg";
import bnSepahua5 from "@/assets/imagenes-proyectos/ITSE/Banco de la nación Sepahua5.jpeg";
import bnSepahua6 from "@/assets/imagenes-proyectos/ITSE/Banco de la nación Sepahua6.jpeg";
import bnSepahua7 from "@/assets/imagenes-proyectos/ITSE/Banco de la nación Sepahua7.jpeg";

// Construcción - Reforzamiento Estructural Panamá
import panama1 from "@/assets/imagenes-proyectos/ITSE/Reforzamiento estructural Panama1.jpg";
import panama2 from "@/assets/imagenes-proyectos/ITSE/Reforzamiento estructural Panama2.jpg";
import panama3 from "@/assets/imagenes-proyectos/ITSE/Reforzamiento estructural Panama3.jpg";
import panama4 from "@/assets/imagenes-proyectos/ITSE/Reforzamiento estructural Panama4.jpg";
import panama5 from "@/assets/imagenes-proyectos/ITSE/Reforzamiento estructural Panama5.jpg";

// Construcción - Implementacion SOC Segurity Prosegur Images
import soc1 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur1.jpeg";
import soc2 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur2.jpeg";
import soc3 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur3.jpeg";
import soc4 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur4.jpeg";
import soc5 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur5.jpeg";
import soc6 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur6.jpeg";
import soc7 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur7.jpeg";
import soc8 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur8.jpeg";
import soc9 from "@/assets/imagenes-proyectos/ITSE/Implementacion SOC Segurity Prosegur9.jpeg";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const categoryMap: Record<string, string> = {
    "levantamiento-itse": "Levantamiento itse",
    "remodelaciones": "Remodelaciones",
    "construccion": "Construcción",
    "servicios-generales": "Servicios generales",
};

const projects = [
    {
        id: 27,
        title: "MANTENIMIENTO DE FACHADA - TAPA JUNTAS DE ACERO INOXIDABLE - ACADEMIAS ADUNI VALLEJO SEDE DE SJL",
        client: "ACADEMIAS ADUNI VALLEJO",
        description: "Proyecto integral de mantenimiento de fachada, incluyendo la instalación y adecuación de tapa juntas de acero inoxidable en la sede San Juan de Lurigancho de las Academias Aduni Vallejo.",
        image: aduni1,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [aduni1, aduni2, aduni3, aduni4, aduni5, aduni6]
    },
    {
        id: 26,
        title: "INRUBI - EDIFICIO GRIMALDO DEL SOLAR AISLAMIENTO ACÚSTICO PARA GRUPO ELECTRÓGENO",
        client: "INRUBI",
        description: "Servicio de implementación de aislamiento acústico especializado para el grupo electrógeno del Edificio Grimaldo del Solar, garantizando la reducción efectiva de niveles sonoros y cumplimiento normativo.",
        image: inrubi1,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [inrubi1, inrubi2, inrubi3, inrubi4, inrubi5, inrubi6]
    },
    {
        id: 25,
        title: "MANTENIMIENTO Y FABRICACIÓN DE ESTRUCTURAS METÁLICAS – GRUPO ATV",
        client: "GRUPO ATV",
        description: "Servicio especializado de diseño, fabricación y mantenimiento de estructuras metálicas a medida, asegurando la máxima resistencia y calidad en cada componente para el Grupo ATV.",
        image: atv1,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [atv1, atv2, atv3, atv4, atv5, atv6]
    },
    {
        id: 24,
        title: "MANTENIMIENTO DE COBERTURAS E IMPERMEABILIZACIÓN DE TECHOS PROSEGUR MORRO DEL SOLAR",
        client: "PROSEGUR",
        description: "Servicio especializado de mantenimiento correctivo y preventivo de coberturas, incluyendo trabajos de impermeabilización técnica para asegurar la integridad estructural y protección contra filtraciones en la sede Morro del Solar.",
        image: techo1,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [techo1, techo2, techo3, techo5, techo6, techo7]
    },
    {
        id: 23,
        title: "ADECUACIÓN DE PORTONES DE ESCLUSA VEHICULAR PROSEGUR",
        client: "PROSEGUR",
        description: "Servicio especializado de mantenimiento y adecuación técnica de portones de esclusa vehicular (interior y exterior) en la sede Morro del Solar, garantizando la operatividad y seguridad del acceso.",
        image: porton1,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [porton1, porton2, porton3, porton5, porton6, porton7, porton8, porton9, porton10, porton11, porton12, porton13, porton14]
    },
    {
        id: 22,
        title: "IMPLEMENTACIÓN SOC SECURITY PROSEGUR",
        client: "PROSEGUR",
        description: "Proyecto especializado de construcción e implementación del centro de control SOC Security para Prosegur, integrando infraestructura técnica avanzada y acabados de alta calidad para operaciones críticas.",
        image: soc1,
        category: "construccion",
        categoryLabel: "Construcción",
        images: [soc1, soc2, soc3, soc4, soc5, soc6, soc7, soc8, soc9]
    },
    {
        id: 21,
        title: "BANCO DE LA NACIÓN SEPAHUA",
        client: "BANCO DE LA NACIÓN",
        description: "Proyecto integral de remodelación y adecuación de la sede del Banco de la Nación en Sepahua, optimizando los espacios de atención y modernizando la infraestructura institucional.",
        image: bnSepahua1,
        category: "remodelaciones",
        categoryLabel: "Remodelaciones",
        images: [bnSepahua1, bnSepahua2, bnSepahua3, bnSepahua4, bnSepahua5, bnSepahua6, bnSepahua7]
    },
    {
        id: 20,
        title: "REMODELACION OFICINA PANAMA",
        client: "PANAMA",
        description: "Proyecto integral de remodelación de oficinas corporativas, optimizando espacios y modernizando la infraestructura para mejorar el entorno laboral.",
        image: panamaOficina1,
        category: "remodelaciones",
        categoryLabel: "Remodelaciones",
        images: [panamaOficina1, panamaOficina2, panamaOficina3, panamaOficina4, panamaOficina5, panamaOficina6, panamaOficina7, panamaOficina8, panamaOficina9]
    },
    {
        id: 17,
        title: "Adecuacion de la sala de descanso Prosegur alarma",
        client: "PROSEGUR",
        description: "Servicio de remodelación y adecuación de espacios para sala de descanso en sede Prosegur Alarma.",
        image: salaDescanso1,
        category: "remodelaciones",
        categoryLabel: "Remodelaciones",
        images: [salaDescanso1, salaDescanso2, salaDescanso3, salaDescanso4, salaDescanso5]
    },
    {
        id: 18,
        title: "TELEPERFORMANCE",
        client: "TELEPERFORMANCE",
        description: "Proyecto de adecuación y remodelación de instalaciones corporativas para Teleperformance.",
        image: teleperformance1,
        category: "remodelaciones",
        categoryLabel: "Remodelaciones",
        images: [teleperformance1, teleperformance2, teleperformance3, teleperformance4, teleperformance5, teleperformance6, teleperformance7, teleperformance8, teleperformance9, teleperformance10, teleperformance11]
    },
    {
        id: 19,
        title: "Reforzamiento estructural Panama",
        client: "PANAMA",
        description: "Servicio especializado de reforzamiento estructural para mejorar la estabilidad y capacidad de carga de edificaciones.",
        image: panama1,
        category: "construccion",
        categoryLabel: "Construcción",
        images: [panama1, panama2, panama3, panama4, panama5]
    },
    {
        id: 4,
        title: "Levantamiento de observaciones ITSE Prosegur alarma",
        client: "PROSEGUR",
        description: "Adecuación de infraestructura y sistemas de alarma para cumplimiento de normativas de Inspección Técnica de Seguridad en Edificaciones.",
        image: alarma1,
        category: "levantamiento-itse",
        categoryLabel: "Levantamiento itse",
        images: [alarma1, alarma2, alarma3, alarma4, alarma5, alarma6, alarma7]
    },
    {
        id: 5,
        title: "Levantamiento de observaciones ITSE Prosegur Cash Piura",
        client: "PROSEGUR CASH",
        description: "Implementación de mejoras y correcciones de seguridad en la sede Piura para certificación ITSE.",
        image: cash1,
        category: "levantamiento-itse",
        categoryLabel: "Levantamiento itse",
        images: [cash1, cash2, cash3, cash4, cash5, cash6, cash7, cash8, cash9, cash10, cash11, cash12]
    },
    {
        id: 6,
        title: "Levantamiento de observaciones ITSE - Prosegur Cajero Miraflores",
        client: "PROSEGUR",
        description: "Adecuación de infraestructura para cumplimiento de normativas ITSE en cajeros Miraflores.",
        image: miraflores1,
        category: "levantamiento-itse",
        categoryLabel: "Levantamiento itse",
        images: [miraflores1, miraflores2, miraflores3, miraflores4, miraflores5, miraflores6]
    },
    {
        id: 7,
        title: "Levantamiento de observaciones ITSE - Proseguridad Callao",
        client: "PROSEGURIDAD",
        description: "Implementación de mejoras de seguridad y cumplimiento normativo ITSE en sede Callao.",
        image: callao1,
        category: "levantamiento-itse",
        categoryLabel: "Levantamiento itse",
        images: [callao1, callao2, callao3, callao4, callao5, callao6]
    },
    {
        id: 9,
        title: "Levantamiento de observaciones ITSE - Prosegur Cash Morro Solar",
        client: "PROSEGUR CASH",
        description: "Implementación de mejoras y cumplimiento normativo ITSE en sede Morro Solar.",
        image: morro1,
        category: "levantamiento-itse",
        categoryLabel: "Levantamiento itse",
        images: [morro1, morro2, morro3, morro4, morro5, morro6, morro7]
    },
    {
        id: 10,
        title: "Levantamiento de observaciones ITSE - Proseguridad Huanuco",
        client: "PROSEGURIDAD",
        description: "Adecuación de infraestructura para cumplimiento de normativas ITSE en sede Huanuco.",
        image: huanuco1,
        category: "levantamiento-itse",
        categoryLabel: "Levantamiento itse",
        images: [huanuco1, huanuco2, huanuco3, huanuco4, huanuco5]
    },
    {
        id: 11,
        title: "PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION GRIFO GRACO - ATE",
        client: "BANCO DE LA NACIÓN",
        description: "Servicio integral de mantenimiento preventivo y correctivo según plan anual.",
        image: bnGraco1,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [bnGraco1, bnGraco2, bnGraco3, bnGraco4, bnGraco5, bnGraco6]
    },
    {
        id: 14,
        title: "PLAN ANUAL DE MANTENIMIENTO BANCO DE LA NACION MEGAPLAZA - INDEPENDENCIA",
        client: "BANCO DE LA NACIÓN",
        description: "Mantenimiento preventivo y correctivo según cronograma anual en sede Megaplaza.",
        image: bnMegaplaza1,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [bnMegaplaza1, bnMegaplaza2, bnMegaplaza3, bnMegaplaza4, bnMegaplaza5]
    },
    {
        id: 15,
        title: "BANCO DE LA NACIÓN EL DORADO",
        client: "BANCO DE LA NACIÓN",
        description: "Servicios de mantenimiento y soporte técnico para la sede El Dorado.",
        image: bnDorado1,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [bnDorado1, bnDorado2, bnDorado3, bnDorado4, bnDorado5]
    },
    {
        id: 16,
        title: "PROYECTO MUDANZA Y ACONDICIONAMIENTO DE BANCO DE LA NACION SAN BORJA",
        client: "BANCO DE LA NACIÓN",
        description: "Servicio integral de mudanza, adecuación y acondicionamiento de espacios corporativos para la sede San Borja del Banco de la Nación.",
        image: bnSanBorja1,
        category: "remodelaciones",
        categoryLabel: "Remodelaciones",
        images: [bnSanBorja1, bnSanBorja2, bnSanBorja3, bnSanBorja4, bnSanBorja5, bnSanBorja6, bnSanBorja7, bnSanBorja8, bnSanBorja9, bnSanBorja10, bnSanBorja11, bnSanBorja12, bnSanBorja13, bnSanBorja14, bnSanBorja15]
    }
];

const ProyectoCategoria = () => {
    const { category } = useParams<{ category: string }>();
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [pageTitle, setPageTitle] = useState("Proyectos");

    useEffect(() => {
        if (category && categoryMap[category]) {
            setPageTitle(categoryMap[category]);
        } else {
            setPageTitle("Proyectos");
        }
    }, [category]);

    const filteredProjects = category
        ? projects.filter(p => p.category === category)
        : projects;

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[85vh] min-h-[750px] flex items-center justify-center pt-96 pb-80 md:pt-80 md:pb-64 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt={pageTitle}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/60" />
                    </div>

                    <div className="section-container relative z-10 text-center">
                        <div className="animate-slide-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30 mx-auto">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-primary-foreground">
                                    Portafolio de Especialidad
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                                {pageTitle}
                            </h1>

                            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Portafolio de soluciones y casos de éxito en {pageTitle}.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Grid Section */}
                <section className="py-20 bg-background">
                    <div className="section-container">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experiencia Comprobada</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Resultados tangibles y cumplimiento de objetivos en cada una de nuestras intervenciones en {pageTitle}.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <RevealOnScroll
                                    key={project.id}
                                    delay={index * 0.1}
                                >
                                    <div
                                        className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col h-full cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="text-white font-medium px-4 py-2 border border-white/30 bg-white/10 backdrop-blur rounded-full">
                                                    Ver Galería
                                                </span>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm">
                                                    {project.categoryLabel}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {project.title}
                                            </h3>

                                            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground font-medium">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                                {project.client}
                                            </div>

                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                                {project.description}
                                            </p>

                                            <Button
                                                variant="outline"
                                                className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }}
                                            >
                                                Ver Galería
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Modal */}
                <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                    <DialogContent className="max-w-4xl w-full bg-background border-border p-0 overflow-hidden">
                        {selectedProject && (
                            <div className="flex flex-col">
                                <div className="p-6 bg-muted/30 border-b border-border">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
                                        <DialogDescription className="text-base text-muted-foreground mt-2">
                                            Cliente: <span className="font-semibold text-foreground">{selectedProject.client}</span>
                                        </DialogDescription>
                                    </DialogHeader>
                                </div>

                                <div className="p-6 bg-background flex flex-col items-center justify-center min-h-[400px]">
                                    <Carousel className="w-full max-w-3xl">
                                        <CarouselContent>
                                            {selectedProject.images.map((img, index) => (
                                                <CarouselItem key={index}>
                                                    <div className="p-1">
                                                        <div className="overflow-hidden rounded-lg border border-border shadow-sm aspect-video relative">
                                                            <img
                                                                src={img}
                                                                alt={`${selectedProject.title} - Imagen ${index + 1}`}
                                                                className={`w-full h-full ${(img === bnMegaplaza2 || img === bnMegaplaza3) ? 'object-contain bg-black/5' : 'object-cover'}`}
                                                            />
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="left-2 md:-left-12 bg-background/80 backdrop-blur border-border text-foreground" />
                                        <CarouselNext className="right-2 md:-right-12 bg-background/80 backdrop-blur border-border text-foreground" />
                                    </Carousel>
                                    <p className="mt-6 text-muted-foreground text-center max-w-2xl">
                                        {selectedProject.description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </main>
            <Footer />
        </div>
    );
};

export default ProyectoCategoria;
