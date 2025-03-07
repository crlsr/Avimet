import React, {use} from 'react';
import { UserContext } from '../context/UserContext';

export default function Profile() { 
    const contextUser= use(UserContext);
    // eslint-disable-next-line no-unused-vars
    const {user, setUser, profile} = contextUser

    console.log(profile);
    return (

        
        <div>
            <button> Editar </button>
            <form>
                <p> Nombre y Apellido</p>
                <input
                className="input-field"
                type="text"
                placeholder={profile.name}
                id="name"
                />
                <p> Nombre de usuario </p>
                <input
                className="input-field"
                type="text"
                placeholder={profile.user}
                id="username"
                />
                <p> Email </p>
                <input
                className="input-field"
                type="email"
                placeholder={profile.email}
                id="email"
                />
                <p> Teléfono </p>
                <input
                className="input-field"
                type="text"
                placeholder={profile.phone}
                id="phone"
                />
                <p> Contraseña </p>
                <input
                className="input-field password-input"
                type= "password"
                placeholder={profile.password}
                id="password"
                />
            </form>
        </div>
    )
}
