import React, {useState} from 'react'

export const UserRegistration = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        usuario: '',
        correo: '',
        telefono: '',
        id: '',
    });
    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.some((user) => user.id === formData.id)) {
            alert('El usuario ya existe');
        } else {
            setUsers((prev) => [...prev, formData]);
        }
    };
  
    return (
        <div className='container-page'>
            <h2 className='title-page'>User Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                {['nombre', 'usuario', 'correo', 'telefono', 'id'].map((field) => (
                    <input
                        key={field}
                        type={field === 'correo' ? 'email' : field === 'telefono' ? 'tel' : 'text'}
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={formData[field]}
                        onChange={handleChange}
                        className="border p-2 block w-full"
                    />
                ))}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Registrar</button>
            </form>
        </div>
    );
};
