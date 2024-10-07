/* eslint-disable */
import { v4 as uuid } from 'uuid';



export const DashboardMenu = [
  {
    id: uuid(),
    title: 'Panel',
    icon: 'home',
    children: [
      { id: uuid(), link: '/dashboard/overview', name: 'General' },
    ]
  },

  {
    id: uuid(),
    title: 'Clientes',
    icon: 'user',
    children: [
      { id: uuid(), link: '/dashboard/analytics', name: 'Prospectos' },
      { id: uuid(), link: '/dashboard/calendar', name: 'Cotizador' },
      { id: uuid(), link: '/dashboard/chat', name: 'Agregar prospecto' },
    ]
  },

  // Agrega la opción de cerrar sesión al final
];

export default DashboardMenu;
