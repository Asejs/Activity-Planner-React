import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from './logo.png'

export default class NavMenu extends React.PureComponent<{}, { isOpen: boolean }> {
    public state = {
        isOpen: false
    };

    public render() {
        return (
            <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3 header" dark>
                <Container>
        
                    <NavbarBrand tag={Link} to="/">
                        <div className="logo">
                            <NavbarBrand tag={Link} to="/"><img src={ logo }/></NavbarBrand>
                        </div>
                    </NavbarBrand>


                    <NavbarToggler onClick={this.toggle} className="mr-2"/>

                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                        
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Hjem</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/counter">Utforsk aktiviteter</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/fetch-data">Logg inn/logg ut</NavLink>
                            </NavItem>
                        </ul>

                    </Collapse>

                </Container>
            </Navbar>
        );
    }

    private toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}


{/* <header>
<Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
    <Container>
        <NavbarBrand tag={Link} to="/">Aktivitetsplanlegger</NavbarBrand>
        <NavbarToggler onClick={this.toggle} className="mr-2"/>
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav flex-grow">
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/">Hjem</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/counter">Utforsk aktiviteter</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/fetch-data">Logg inn/logg ut</NavLink>
                </NavItem>
            </ul>
        </Collapse>
    </Container>
</Navbar>
</header> */}