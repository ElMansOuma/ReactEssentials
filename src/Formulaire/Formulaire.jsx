import React, { useState } from 'react';
import './Formulaire.css';

const Formulaire = () => {
    const [formData, setFormData] = useState({
        nom: '',
        niveau: '',
        typeStage: '',
        dateDebut: '',
        cv: null,
    });

    const [errors, setErrors] = useState({
        nom: '',
        niveau: '',
        dateDebut: '',
        cv: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nom) newErrors.nom = 'Le nom est requis';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'L\'email est invalide';
        if (!formData.niveau) newErrors.niveau = 'Le niveau d\'études est requis';
        if (!formData.dateDebut) newErrors.dateDebut = 'La date de début est requise';
        if (!formData.cv) newErrors.cv = 'Le CV est requis';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Candidature envoyée avec succès');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Candidature pour un Stage</h2>

                <div className="form-group">
                    <label htmlFor="nom">Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className={`input ${errors.nom ? 'error' : ''}`}
                        placeholder="Entrez votre nom"
                    />
                    {errors.nom && <span className="error-message">{errors.nom}</span>}
                </div>


                <div className="form-group">
                    <label htmlFor="niveau">Niveau d'études :</label>
                    <input
                        type="text"
                        id="niveau"
                        name="niveau"
                        value={formData.niveau}
                        onChange={handleChange}
                        className={`input ${errors.niveau ? 'error' : ''}`}
                        placeholder="Entrez votre niveau d'études"
                    />
                    {errors.niveau && <span className="error-message">{errors.niveau}</span>}
                </div>


                <div className="form-group">
                    <label htmlFor="dateDebut">Date de début :</label>
                    <input
                        type="date"
                        id="dateDebut"
                        name="dateDebut"
                        value={formData.dateDebut}
                        onChange={handleChange}
                        className={`input ${errors.dateDebut ? 'error' : ''}`}
                    />
                    {errors.dateDebut && <span className="error-message">{errors.dateDebut}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="cv">Télécharger votre CV :</label>
                    <input
                        type="file"
                        id="cv"
                        name="cv"
                        onChange={handleChange}
                        className={`input ${errors.cv ? 'error' : ''}`}
                    />
                    {errors.cv && <span className="error-message">{errors.cv}</span>}
                </div>

                <button type="submit" className="submit-btn">
                    Soumettre
                </button>
            </form>
        </div>
    );
};

export default Formulaire;
