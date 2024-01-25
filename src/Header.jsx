import React, { useState } from 'react';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownMenus = [
    {
      name: 'courses',
      label: 'Cursos',
      links: [
        { href: '/fullstack', label: 'FullStack Web Developer' },
        { href: '/data', label: 'Data Science' }
      ]
    },
    {
      name: 'studyLocations',
      label: 'Dónde estudiar',
      links: [
        { href: '/madrid', label: 'Madrid' },
        { href: '/vitoria', label: 'Vitoria' }
      ]
    },
    {
      name: 'financingScholarships',
      label: 'Financiación y becas',
      links: [
        { href: '/beca', label: 'Becas' },
        { href: '/financiacion', label: 'Financiación' }
      ]
    },
    {
      name: 'companiesInstitutions',
      label: 'Empresas e instituciones',
      links: [
        { href: '/telefonica', label: 'Telefónica' },
        { href: '/deloitte', label: 'Deloitte' }
      ]
    },
    {
      name: 'aboutUs',
      label: 'Sobre nosotros',
      links: [
        { href: '/quienesSomos', label: 'Quienes somos' },
        { href: '/contacto', label: 'Contacta con nosotros' }
      ]
    }
  ];

  const showDropdown = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const hideDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="/"><h1>TheBridge</h1></a></li>
          {dropdownMenus.map(menu => (
            <li key={menu.name}
                onMouseOver={() => showDropdown(menu.name)}
                onMouseLeave={hideDropdown}>
              {menu.label}
              {openDropdown === menu.name && (
                <ul>
                  {menu.links.map(link => (
                    <li key={link.href}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
