import { useState, useEffect } from 'react'

const Filtros = ({ filtrar, setFiltrar }) => {
    return (
        <div className='filtros sombra contenedor'>
            <form className='campo'>
                <label>Filtrar Gastos</label>
                <select
                    value={filtrar}
                    onChange={ e => setFiltrar(e.target.value)}
                >
                        <option value="">-- Todas Las Categorias --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="transporte">Transporte</option>
                </select>
            </form>
        </div>
    )
}

export default Filtros