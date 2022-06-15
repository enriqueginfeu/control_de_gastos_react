import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtrar, gastosFiltrados }) => {
    return (
        <div className='listado-gastos contenedor'>
            

        {
            filtrar ? (
            <>
                <h2>{gastosFiltrados.length ? 'Gastos' : 'Categoria Sin Gastos'}</h2>
                {gastosFiltrados.map( gasto => (
                    <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                    />
                ))}
            </>
            ) : (
            <>
            <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos'}</h2>
                {gastos.map( gasto => (
                    <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                    />
                ))}
            </>
            )
        }
        </div>
    )
}

export default ListadoGastos