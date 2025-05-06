// // import React from 'react';
// import React, { useState, useEffect, useRef } from "react";

// export const PropertyCard: React.FC<Product> = (props: Product) => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(1);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const touchStartX = useRef(0);
//   const touchDeltaX = useRef(0);

//   // Ajustar items por página según ancho
//   useEffect(() => {
//     const updateLayout = () => {
//       const w = window.innerWidth;
//       if (w >= 1024) setItemsPerPage(3);
//       else if (w >= 768) setItemsPerPage(2);
//       else setItemsPerPage(1);
//       setCurrentPage(0);
//     };
//     updateLayout();
//     window.addEventListener("resize", updateLayout);
//     return () => window.removeEventListener("resize", updateLayout);
//   }, []);

// //   const pageCount = Math.ceil(items.length / itemsPerPage);

//   // Desplazar track en cada cambio de página
// //   useEffect(() => {
// //     if (wrapperRef.current && trackRef.current) {
// //       const width = wrapperRef.current.clientWidth;
// //       trackRef.current.style.transform = `translateX(-${currentPage * width}px)`;
// //     }
// //   }, [currentPage, itemsPerPage, items.length]);

// //   const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));
// //   const nextPage = () => setCurrentPage((p) => Math.min(p + 1, pageCount - 1));

//   // Swipe handlers
// //   const handleTouchStart = (e: React.TouchEvent) => {
// //     touchStartX.current = e.touches[0].clientX;
// //   };
// //   const handleTouchMove = (e: React.TouchEvent) => {
// //     touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
// //   };
// //   const handleTouchEnd = () => {
// //     if (touchDeltaX.current > 50) prevPage();
// //     else if (touchDeltaX.current < -50) nextPage();
// //     touchDeltaX.current = 0;
// //   };
//   return (
//     <div
//       key={props.id}
//       className="flex-shrink-0 px-2"
//       style={{ width: `${100 / itemsPerPage}%` }}
//     >
//       <div className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl">
//         <img
//           src={props.image_url}
//           alt=""
//           className="h-48 w-full object-cover"
//         />
//         <div className="p-4">
//           <p className="mb-2 text-sm text-gray-600">
//             {props.caracteristicas.join(", ")}
//           </p>
//           <p className="text-lg font-bold text-green-600">
//             {props.moneda}
//             {props.precio}
//           </p>
//           <a
//             href={props.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-2 inline-block text-sm text-blue-500"
//           >
//             Ver publicación
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

  export interface Product {
    agente: string;
    alrededores: string;
    banios: number;
    caracteristicas: string[];
    circunstancia: string;
    ciudad: string;
    cocina: string;
    codigo_postal: number;
    construccion_nueva: number;
    consumo_energia: number;
    direccion: string;
    dormitorios: number;
    emisiones: number;
    estado: string;
    estgen: string;
    fecha_alta: string;
    freq_precio: string;
    'geolocalizacion.latitude': number;
    'geolocalizacion.longitude': number;
    id: string | number; // Cambiado a string | number
    image_url: string;
    m2constr: number;
    m2terraza: number;
    m2utiles: number;
    moneda: string;
    nascensor: number;
    ntrasteros: number;
    num_inmueble: number | string; // Cambiado a number | string
    num_pisos_bloque: number | null; // Cambiado a number | null
    num_pisos_edificio: number | null; // Cambiado a number | null
    num_planta: string | null; // Cambiado a string | null
    num_terrazas: number | null; // Cambiado a number | null
    pais: string;
    piscina: number | null; // Cambiado a number | null
    precio: number | null; // Cambiado a number | null
    'propietario.apellido': string | null; // Cambiado a string | null
    'propietario.codigo': number | null; // Cambiado a number | null
    'propietario.comercial': string | null; // Cambiado a string | null
    'propietario.fecha_alta': string | null; // Cambiado a string | null
    'propietario.nombre': string | null; // Cambiado a string | null
    provincia: string;
    puerta?: any; // Se puede cambiar el tipo según sea necesario
    ref?: any; // Se puede cambiar el tipo según sea necesario
    'superficie.built'?: any; // Se puede cambiar el tipo según sea necesario
    'superficie.plot'?: any; // Se puede cambiar el tipo según sea necesario
    tipo: string;
    tipo_operacion: string;
    tipo_via: string;
    ubicacion: string;
    ventana: string;
    zona: string;
    url: string;
    [key: string]: any; // Permitir propiedades adicionales
  }

// export default PropertyCard;
