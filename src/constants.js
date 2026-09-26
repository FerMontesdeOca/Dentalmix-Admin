// Dentalmix es un solo deposito dental: toda la informacion se registra en
// esta unica "sucursal" interna (no se muestra en pantalla).
const SUCURSAL_UNICA = 'Dentalmix';
const SUCURSALES_INICIALES = [SUCURSAL_UNICA];

const TIPOS_GASTO = [
  'Compra de mercancía (proveedores)',
  'Fletes y paquetería',
  'Renta local comercial',
  'Servicios (agua, luz, teléfono, internet)',
  'Pago celulares y saldo',
  'Nómina/IMSS/ISN/ISR',
  'Comisiones de ventas',
  'Gasolina y tag',
  'Mantenimiento de vehículos',
  'Limpieza',
  'Papelería y oficina',
  'Empaque y embalaje',
  'Mantenimiento',
  'Mercadotecnia (agencias y saldo meta)',
  'Comisiones bancarias y terminal',
  'Software y sistemas',
  'Honorarios contables y timbres',
  'Servicios legales',
  'Impuestos',
  'Trámites administrativos',
  'Devoluciones a clientes',
  'Mermas y caducidades',
  'Equipo y mobiliario',
  'Viaticos',
  'Finiquitos',
  'Gratificaciones',
  'Otros',
];

// Se conserva la estructura de "marcas" de la app original con una sola marca.
const MARCAS = ['dentalmix'];
const TOMOX_SUCURSALES = [];
const SUCURSAL_LABORATORIO = 'Laboratorio';

// Meta mensual de ingreso (se aplica igual todos los meses). Ajusta el monto
// cuando tengas la meta de Dentalmix; null = sin meta.
const METAS_MENSUALES = {
  [SUCURSAL_UNICA]: null,
};

module.exports = { SUCURSALES_INICIALES, SUCURSAL_UNICA, TIPOS_GASTO, METAS_MENSUALES, MARCAS, TOMOX_SUCURSALES, SUCURSAL_LABORATORIO };
