import { useState, useEffect } from 'react'
import ContactRow from './ContactRow';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState('');

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    }, [])
    console.log(contact);

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
                }
            </tbody>
        </table>
    )
}

export default SelectedContact;