// Dentalmix es un solo deposito dental: toda la informacion se registra en
// esta unica "sucursal" interna (no se muestra en pantalla).
const SUCURSAL_UNICA = 'Dentalmix';
const SUCURSALES_INICIALES = [SUCURSAL_UNICA];

// Dentalmix no clasifica sus gastos por tipo.
const TIPOS_GASTO = [];

// Se conserva la estructura de "marcas" de la app original con una sola marca.
const MARCAS = ['dentalmix'];
const TOMOX_SUCURSALES = [];
const SUCURSAL_LABORATORIO = 'Laboratorio';

// Meta mensual de ingreso (se aplica igual todos los meses): 60,000 por semana.
const METAS_MENSUALES = {
  [SUCURSAL_UNICA]: 240000,
};

module.exports = { SUCURSALES_INICIALES, SUCURSAL_UNICA, TIPOS_GASTO, METAS_MENSUALES, MARCAS, TOMOX_SUCURSALES, SUCURSAL_LABORATORIO };
