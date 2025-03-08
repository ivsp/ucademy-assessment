import IconComponent from '../Icon/icon-component';
import UcademyLogo from '../../assets/logo/logo.png';
import BellIcon from '../../assets/icons/bell-icon.png';
import InfoIcon from '../../assets/icons/info-icon.png';
import StudentsIcon from '../../assets/icons/student-icon.png';
import {
  NotificationContainer,
  Nav,
  NavItem,
  Sidebar,
  TopSection,
} from './styles';
import CustomLink from '../Link/link';

export default function Menu() {
  return (
    <Sidebar>
      <TopSection>
        <CustomLink
          to={{
            pathname: '/',
          }}
        >
          <IconComponent src={UcademyLogo} alt="Ucademy Logo" width="100px" />
        </CustomLink>
        <NotificationContainer>
          <IconComponent src={BellIcon} alt="Notificaciones" width="15px" />
          <IconComponent src={InfoIcon} alt="Ayuda" width="20px" />
        </NotificationContainer>
      </TopSection>

      <Nav>
        <CustomLink
          to={{
            pathname: '/alumnos',
          }}
        >
          <NavItem>
            <IconComponent
              src={StudentsIcon}
              alt="Icono de alumnos"
              width="20px"
            />
            <span>Alumnos</span>
          </NavItem>
        </CustomLink>
      </Nav>
    </Sidebar>
  );
}
