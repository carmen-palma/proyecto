import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-brand">PalmaFit</div>
            <div className="navbar-links">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/perfil">Perfil</a></li>
                    <li><a href="/amigos">Amigos</a></li>
                    <li><a href="/mensajes">Mensajes</a></li>
                    <li><a href="/configuracion">Configuración</a></li>
                    <li><a href="/notificaciones">Notificaciones</a></li>
                    <li><a href="/grupos">Grupos</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;