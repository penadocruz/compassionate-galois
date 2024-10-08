import React, { useState, useEffect } from "react";

const MobileWireframe = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;

  const steps = [
    { title: "Ingreso DUI", content: "Número de identificación" },
    { title: "Verificación RNPN", content: "Confirmación de datos" },
    { title: "Información de contacto", content: "Datos adicionales" },
    { title: "Datos laborales", content: "Información de empleo" },
    { title: "Pre-calificación", content: "Análisis de elegibilidad" },
    { title: "Selección de tarjeta", content: "Opciones de tarjeta" },
    {
      title: "Confirmación y términos",
      content: "Revisión final y aceptación",
    },
    { title: "Finalización", content: "Proceso completado" },
  ];

  useEffect(() => {
    if (currentStep === 5) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const ProgressBar = () => (
    <div className="w-full bg-gray-200 h-2 mt-4">
      <div
        className="bg-blue-500 h-2"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      ></div>
    </div>
  );

  const StepIndicator = () => (
    <div className="text-sm text-gray-600 mt-2">
      Paso {currentStep} de {totalSteps}: {steps[currentStep - 1].title}
    </div>
  );

  const Tooltip = ({ children }) => (
    <div className="group relative inline-block">
      <span className="text-gray-500 inline-block ml-1 cursor-help">ℹ️</span>
      <div className="absolute z-10 invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 mt-2 w-48">
        {children}
      </div>
    </div>
  );

  const Content = () => (
    <div className="mt-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">{steps[currentStep - 1].title}</h2>
      {currentStep === 1 && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Número de DUI
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="00000000-0"
          />
        </div>
      )}
      {currentStep === 2 && (
        <div>
          <h3 className="font-bold mb-2">Verifique sus datos del RNPN:</h3>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Nombres:</span> Juan Antonio
            </p>
            <p>
              <span className="font-semibold">Apellidos:</span> Pérez García
            </p>
            <p>
              <span className="font-semibold">Fecha de nacimiento:</span>{" "}
              15/05/1985
            </p>
            <p>
              <span className="font-semibold">Dirección:</span> Calle Principal
              #123, Col. Centro, San Salvador
            </p>
            <p>
              <span className="font-semibold">Profesión/Oficio:</span> Ingeniero
            </p>
          </div>
          <div className="mt-4">
            <input type="checkbox" id="confirmData" className="mr-2" />
            <label htmlFor="confirmData" className="text-sm">
              Confirmo que los datos son correctos
            </label>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Número de celular
          </label>
          <input
            type="tel"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="0000-0000"
          />
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Correo electrónico
          </label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="ejemplo@correo.com"
          />
        </div>
      )}
      {currentStep === 4 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre de la empresa
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Ingrese el nombre de su empresa"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cargo actual
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Ej: Gerente de Ventas"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha de ingreso a la empresa
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salario mensual
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="$0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Actividad económica
              <Tooltip>
                La actividad económica se refiere al sector general en el que
                opera la empresa.
              </Tooltip>
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Seleccione una opción</option>
              <option>Comercio</option>
              <option>Servicios</option>
              <option>Industria</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Giro económico
              <Tooltip>
                El giro económico es la actividad específica dentro del sector
                seleccionado.
              </Tooltip>
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Seleccione una opción</option>
              {/* Opciones filtradas basadas en la actividad económica seleccionada */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ocupación
              <Tooltip>
                La ocupación se refiere a su rol o puesto específico dentro de
                la empresa.
              </Tooltip>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Comience a escribir para ver sugerencias"
            />
          </div>
        </div>
      )}
      {currentStep === 5 && (
        <div className="text-center">
          <div className="animate-pulse bg-gray-300 h-16 w-16 rounded-full mx-auto mb-4"></div>
          <p>Analizando su información...</p>
          <p className="text-sm text-gray-600 mt-2">
            Este proceso tomará unos segundos.
          </p>
        </div>
      )}
      {currentStep === 6 && (
        <div>
          <div className="border border-gray-300 rounded-md p-4 mb-4">
            <h3 className="font-bold">Visa Clásica</h3>
            <p className="text-sm text-gray-600">Límite: $1,000</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setCurrentStep(7)}
            >
              Seleccionar
            </button>
          </div>
          <div className="border border-gray-300 rounded-md p-4">
            <h3 className="font-bold">Visa Oro</h3>
            <p className="text-sm text-gray-600">Límite: $3,000</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setCurrentStep(7)}
            >
              Seleccionar
            </button>
          </div>
        </div>
      )}
      {currentStep === 7 && (
        <div>
          <h3 className="font-bold mb-2">Resumen de su solicitud:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Tarjeta seleccionada: Visa Oro</li>
            <li>Límite de crédito: $3,000</li>
            <li>Tasa de interés anual: 24%</li>
          </ul>
          <div className="mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              Acepto los términos y condiciones
            </label>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={() => setCurrentStep(8)}
          >
            Confirmar y Aceptar
          </button>
        </div>
      )}
      {currentStep === 8 && (
        <div className="text-center">
          <div className="bg-green-500 text-white rounded-full p-4 inline-block mb-4">
            ✅
          </div>
          <h3 className="font-bold mb-2">¡Felicidades!</h3>
          <p className="mb-4">
            Su solicitud de tarjeta de crédito ha sido procesada con éxito.
          </p>
          <p className="text-sm text-gray-600">
            Recibirá un correo electrónico con los siguientes pasos.
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 h-screen overflow-auto">
      <div className="bg-white p-4 rounded-t-lg shadow flex items-center justify-between">
        <span className="text-gray-500">◀️</span>
        <h1 className="text-lg font-bold">Solicitud de Tarjeta</h1>
        <span className="text-gray-500">💳</span>
      </div>
      <ProgressBar />
      <StepIndicator />
      <Content />
      <div className="mt-8 flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1 || currentStep === 5}
        >
          Anterior
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
          disabled={currentStep === totalSteps || currentStep === 5}
        >
          {currentStep === totalSteps ? "Finalizar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
};

export default MobileWireframe;
