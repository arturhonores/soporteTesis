const Services = () => {
  return (
    <section className="bg-zinc-100">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-black text-center">Nuestros Servicios</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 py-16">
          <div className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Asesoría</h3>
            <p>
              Expertos en cada materia te ayudarán a organizar tus ideas y a
              presentar una investigación adaptada a lo que necesites.
            </p>
          </div>
          <div className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Redacción</h3>
            <p>Elaboramos desde cero o retomamos tu proyecto.</p>
          </div>
          <div className="bg-white rounded-lg text-center p-8 shadow-lg flex-1 min-h-80 flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Correción</h3>
            <p>
              Nuestro equipo se encargará de la corrección y detección del
              plagio de tu proyecto universitario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
