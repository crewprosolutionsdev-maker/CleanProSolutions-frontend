import { useEffect, useState } from "react"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import "./AdminPage.css"

function AdminPage() {
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(true)

    const API_URL = import.meta.env.VITE_API_URL || 'https://cleanprosolutions-backend-production.up.railway.app'

    const getContacts = async () => {
        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json()

            setContacts(data)
        } catch (error) {
            console.error(error)
            alert("Error al cargar las consultas")
        } finally {
            setLoading(false)
        }
    }

    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await fetch(`${API_URL}/api/contact/${id}/status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: newStatus }),
            })

            const data = await response.json()

            if (!response.ok) {
                alert(data.message || "Error al actualizar estado")
                return
            }

            setContacts((prevContacts) =>
                prevContacts.map((contact) =>
                    contact._id === id
                        ? { ...contact, status: newStatus }
                        : contact
                )
            )
        } catch (error) {
            console.error(error)
            alert("No se pudo actualizar el estado")
        }
    }

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <>
            <Navbar />

            <main className="admin-page">
                <div className="container">
                    <div className="admin-header">
                        <span>Panel interno</span>
                        <h1>Consultas recibidas</h1>
                        <p>
                            Gestioná las solicitudes enviadas desde el formulario de contacto.
                        </p>
                    </div>

                    {loading ? (
                        <p>Cargando consultas...</p>
                    ) : contacts.length === 0 ? (
                        <p>No hay consultas todavía.</p>
                    ) : (
                        <div className="admin-table-wrapper">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Empresa</th>
                                        <th>Servicio</th>
                                        <th>Mensaje</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {contacts.map((contact) => (
                                        <tr key={contact._id}>
                                            <td>
                                                <strong>{contact.name}</strong>
                                                <span>{contact.email}</span>
                                                <span>{contact.phone}</span>
                                            </td>

                                            <td>{contact.company || "-"}</td>

                                            <td>{contact.service}</td>

                                            <td>{contact.message}</td>

                                            <td>
                                                <select
                                                    value={contact.status}
                                                    onChange={(e) =>
                                                        handleStatusChange(
                                                            contact._id,
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="Pendiente">
                                                        Pendiente
                                                    </option>
                                                    <option value="En proceso">
                                                        En proceso
                                                    </option>
                                                    <option value="Completada">
                                                        Completada
                                                    </option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </>
    )
}

export default AdminPage