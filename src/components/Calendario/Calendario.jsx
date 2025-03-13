import React, { useState } from 'react';
import styles from './Calendario.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Lista de días especiales que se podrían traer desde una base de datos
const diasEspeciales = ['Enero 1', 'Enero 24', 'Febrero 9', 'Marzo 15', 'Septiembre 13'];

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const diasSemana = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

const obtenerDiasDelMes = (anio, mes) => {
  return new Date(anio, mes + 1, 0).getDate();
};

const obtenerDiaDeInicio = (anio, mes) => {
  let dia = new Date(anio, mes, 1).getDay();
  return dia === 0 ? 6 : dia - 1; // Ajuste para iniciar el lunes
};

export default function Calendario() {
  const fechaActual = new Date();
  const [mesActual, setMesActual] = useState(fechaActual.getMonth());
  const [anioActual, setAnioActual] = useState(fechaActual.getFullYear());
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  const cambiarMes = (direccion) => {
    let nuevoMes = mesActual + direccion;
    let nuevoAno = anioActual;

    if (nuevoMes < 0) {
      nuevoMes = 11;
      nuevoAno -= 1;
    } else if (nuevoMes > 11) {
      nuevoMes = 0;
      nuevoAno += 1;
    }

    setMesActual(nuevoMes);
    setAnioActual(nuevoAno);
    setDiaSeleccionado(null); // Reset al cambiar de mes
  };

  const seleccionarDia = (dia) => {
    const mesNombre = meses[mesActual];
    const diaEspecial = `${mesNombre} ${dia}`;

    if (!diasEspeciales.includes(diaEspecial)) {
      return; // Solo permitir seleccionar días especiales
    }

    if (diaSeleccionado === diaEspecial) {
      setDiaSeleccionado(null); // Deseleccionar si se presiona el mismo día
    } else {
      setDiaSeleccionado(diaEspecial);
    }
  };

  const esDiaEspecial = (mes, dia) => {
    return diasEspeciales.includes(`${mes} ${dia}`);
  };

  const totalDias = obtenerDiasDelMes(anioActual, mesActual);
  const diaInicio = obtenerDiaDeInicio(anioActual, mesActual);
  const dias = Array(diaInicio).fill(null);

  for (let i = 1; i <= totalDias; i++) {
    dias.push(i);
  }

  return (
    <div className={styles.contenedorCalendario}>
      <div className={styles.encabezado}>
        <button className={styles.flecha} onClick={() => cambiarMes(-1)}>
          <FaChevronLeft />
        </button>
        <div className={styles.mesAnio}>
          {meses[mesActual]} {anioActual}
        </div>
        <button className={styles.flecha} onClick={() => cambiarMes(1)}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.semana}>
        {diasSemana.map((dia) => (
          <div key={dia} className={styles.diaSemana}>
            {dia}
          </div>
        ))}
      </div>

      <div className={styles.dias}>
        {dias.map((dia, index) => {
          const mesNombre = meses[mesActual];
          const esEspecial = esDiaEspecial(mesNombre, dia);
          const esSeleccionado = diaSeleccionado === `${mesNombre} ${dia}`;

          return (
            <div
              key={index}
              className={`${styles.dia} ${esEspecial ? styles.especial : ''} ${
                esSeleccionado ? styles.seleccionado : ''
              }`}
              onClick={() => dia && seleccionarDia(dia)}
            >
              {dia}
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        {diaSeleccionado && (
          <div className={styles.seleccionTexto}>
            Día seleccionado: {diaSeleccionado}
          </div>
        )}
      </div>
    </div>
  );
}