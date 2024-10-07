import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Accordion, Card, Badge, Image } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const DashboardMenu = [
  {
    id: 'panel',
    title: 'Panel',
    icon: 'home',
    children: [
      { id: 'general', link: '/dashboard/overview', name: 'General' }
    ]
  },
  {
    id: 'clientes',
    title: 'Clientes',
    icon: 'user',
    children: [
      { id: 'prospectos', link: '/dashboard/analytics', name: 'Prospectos' },
      { id: 'cotizador', link: '/dashboard/calendar', name: 'Cotizador' },
      { id: 'agregar', link: '/dashboard/chat', name: 'Agregar prospecto' }
    ]
  }
];

const NavbarVertical = () => {
  const location = useLocation();

  const generateLink = (item) => {
    return (
      <Link
        className={`nav-link ${location.pathname === item.link ? 'active' : ''}`}
        to={item.link}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <Fragment>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <div className="nav-scroller">
          <Link className="navbar-brand" style={{ marginLeft: '20px' }} to="/dashboard/overview">
            <Image src={InverseLogo} alt="Logo" />
          </Link>
        </div>
        <Accordion defaultActiveKey="0" as="ul" className="navbar-nav flex-column">
          {DashboardMenu.map((menu, index) => (
            <Fragment key={index}>
              <Card bsPrefix="nav-item">
                <Accordion.Toggle as={Link} to="#!" eventKey={menu.id}>
                  <div className="nav-link">
                    {menu.icon && <i className={`nav-icon fe fe-${menu.icon} me-2`}></i>}
                    {menu.title}
                  </div>
                </Accordion.Toggle>
              </Card>
              <Accordion.Collapse eventKey={menu.id} as="li" bsPrefix="nav-item">
                <ul className="navbar-nav flex-column">
                  {menu.children.map((menuItem, menuItemIndex) => (
                    <li key={menuItemIndex} className="nav-item">
                      {generateLink(menuItem)}
                    </li>
                  ))}
                </ul>
              </Accordion.Collapse>
            </Fragment>
          ))}
        </Accordion>
      </SimpleBar>
    </Fragment>
  );
};

export default NavbarVertical;
