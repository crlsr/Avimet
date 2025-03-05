import React, {use} from 'react';
import { UserContext } from '../context/UserContext';

export default function Profile() { 
    const contextUser= use(UserContext);
    // eslint-disable-next-line no-unused-vars
    const {user, setUser, profile} = contextUser

    console.log(profile);
    return (
        <div>
            <ul>
                <li> {profile.email} </li>
                <li> {profile.name} </li>
                <li> {profile.phone}</li>

            </ul>
        </div>
    )
}
